var express = require ('express'); 
var app = express ();

app.get ('/items', function (req, res) { 
    res.send ('¡ITEMS!'); 
  });

app.listen (3000, function () { 
  console.log ('¡Aplicación de ejemplo escuchando en el puerto 3000!'); 
});