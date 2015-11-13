var simplecached = require('simplecached');

var options = {
  port: 11312,
  host: '127.0.0.1'
};

var client = new simplecached.Client(options, function(error){
  console.log('Connected');
});

client.set("nombre", "roberto", function(error, response){
  client.get("nombre", function(error, resp){
    console.log(resp);
  });
});
