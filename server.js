var express = require('express');
var app = express();

app.use(express.static(__dirname));

var messages = [
  {
    name: 'Nydia',
    message: 'How are you doing?'
  },
  {
    name: 'Joel',
    message: 'I am good, how about you?'
  }
]

app.get('/messages', (req, res) => {
	res.send(messages);
});


var server = app.listen(3000, ()=> {
  console.log('this server is listening to port: ', server.address().port );
});



