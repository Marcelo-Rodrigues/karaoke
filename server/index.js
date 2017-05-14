var express = require('express');
var app     = express();

console.log('Servidor iniciado na porta %s',
app
.use('/', express.static(__dirname + '/../client'))
.all("/", function (req, res) {
  res.redirect("/index.html");
})
.listen(3000).address().port);