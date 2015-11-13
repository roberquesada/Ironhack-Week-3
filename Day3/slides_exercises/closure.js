var myApp = function ticketBuilder(transport) {
  var passengerNumber = 0;
  return function(name) {
    passengerNumber++;
    console.log("Welcome, " + name + ". Here is yout ticket for the " + transport +  " You are passenger #" + passengerNumber + ".");
  }
}

var getPlaneTicket = ticketBuilder('plane')
var getTrainTicket = ticketBuilder('train')

getPlaneTicket("Roberto");
getPlaneTicket("Raul");

module.exports.myApp = myApp