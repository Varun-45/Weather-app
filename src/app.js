const express = require('express');
const path = require('path')
const app = express();
const port = process.env.port || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'))
})
app.get("/weather", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/weather.html'))
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'))
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})