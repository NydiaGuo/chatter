var express = require('express');
var app = express();

app.use(express.static(__dirname));


app.get('/messages', (req, res) => {
	res.send('hello! this is res!');
});


var server = app.listen(3000, ()=> {
  console.log('this server is listening to port: ', server.address().port );
});



