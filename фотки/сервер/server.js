const fs = require("fs");
const http = require("http");
const url = require('url');
const express = require('express');
const app=express();




const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/requests" || request.url === "/") {
        let content = fs.readFileSync("C:\\Users\\АртеМ\\Desktop\\языки\\Новая папка\\programming-lessons-1\\фотки\\сервер\\birthday.txt");
        response.writeHead(200, {
            'Content-Type': 'text/txt'
        })
        response.write(content);
   
    }
    else if (request.url == "/*") {
        
       
            fs.writeFile('C:\\Users\АртеМ\\esktop\языки\\Новая папка\\programming-lessons-1\\фотки\\сервер\\birthday.txt', request.url, function (err) {
                if (err) return console.log(err);
                console.log('file has created');
                response.write("Hi,  i'm there")
        
        });
       
       
    }


};

http.createServer(requestHandler).listen(3000); 
