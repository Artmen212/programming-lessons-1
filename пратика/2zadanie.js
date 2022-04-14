const axios = require('axios');
const fs = require("fs");
axios.get('https://http.cat/102', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/101', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat2.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/200', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat3.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/201', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat4.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/202', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat5.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/203', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat6.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/204', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat6.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/206', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat7.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/207', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat8.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/300', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat9.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/301', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat10.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/302', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat11.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/303', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat12.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/304', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat13.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/305', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat14.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/307', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat15.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/308', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat16.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/400', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat17.jpg", response.data)
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.then(function () 
{
});