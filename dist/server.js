"use strict";
// Check the README.md file for instructions to the exercise
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const directory = "images";
const filePath = path_1.default.join(__dirname, directory);
const server = http_1.default.createServer((req, res) => {
    const { url, method } = req;
    //view image
    if (url === "/view-images" && method === "GET") {
        fs_1.default.readFile(`${filePath}/veryhappydog.jpg`, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error Loading Image");
                return;
            }
            res.writeHead(200, { "Content-type": "image/jpeg" });
            res.end(data);
        });
        return;
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
