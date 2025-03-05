// Check the README.md file for instructions to the exercise

import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const directory = "images";
const filePath = path.join(__dirname, directory)


const server = http.createServer((req, res) => {
    const { url, method } = req;

    //view image
if (url === "/view-images" && method === "GET") {
    fs.readFile(`${filePath}/veryhappydog.jpg`, (err, data) => {
        if(err) {
            res.writeHead(500, {"Content-Type": "text/plain"})
            res.end("Error Loading Image")
            return
        } 

        res.writeHead(200, {"Content-type" : "image/jpeg"})
        res.end(data)
    })
    return
    
}
})


const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})