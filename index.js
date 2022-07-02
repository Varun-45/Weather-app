const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const Comment = require('./models/comments');

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

///database url
const url = `mongodb+srv://Varun_45:7I4QbVgDsVUHSIiX@cluster0.cmxlm.mongodb.net/?retryWrites=true&w=majority`;

///connection ///
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("MONGO CONNECTED"))

    .catch(err => console.log(err))
////////////DATA///////////////
var db = mongoose.connection;
app.post("/feedback", (req, res) => {
    var name = req.body.name;
    var comment = req.body.comment;

    var data = {
        "name": name,
        "comment": comment
    }
    db.collection('comments').insertOne(data, (err, collection) => {

        if (err) {
            throw err;
            console.log(err)
        }
        console.log("success")
    });
    Comment.find({}, function (err, datas) {
        res.render('feedback', {
            datalist: datas
        })
    })
})
const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, './public/about.html'))
})
app.get("/weather", (req, res) => {
    res.sendFile(path.join(__dirname, './public/weather.html'))
})


app.get("/feedback", (req, res) => {
    Comment.find({}, function (err, datas) {
        res.render('feedback', {
            datalist: datas
        })
    })

})
// app.get("/form", (req, res) => {
//     res.render('feedback')
// })

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/404.html'))
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


