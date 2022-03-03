const fs = require("fs");

const http = require("http");
const requestHandler = (request, response) => {
console.log("Url: " + request.url);
console.log("Тип запроса: " + request.method);
console.log("User-Agent: " + request.headers["user-agent"]);
console.log("Все заголовки");
console.log(request.headers);
fs.readFile("hello.txt", "utf8",
function(error,data){
console.log("Асинхронное чтение файла");
if(error) throw error; // если возникла ошибка
console.log(data); // выводим считанные данные
});
response.end(" vce rabotaet");
};
http.createServer(requestHandler).listen(3000);
