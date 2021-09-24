const express = require('express');

var cors = require('cors')
var app = express()

app.use(cors())

function translate(text){
  return text +" | " + text.split("").reverse().join("");
}

app.get("/", (req, res) => {
  res.send(" Go to translate")
})

app.get('/translate/mirror.json', (req, res) => {
  console.log(req.query.text)
  res.json({
    "success": {
        "total": 1
    },
    "contents": {
        "translated": translate(req.query.text),
        "text": req.query.text || "text missing",
        "translation": "mirror image"
    }
})
});

app.listen(3000, () => {
  console.log('server started');
});