var Client = require('lc-client');
var planner = new Client({"entrypoints" : ["http://belgium.linkedconnections.org/sncb/connections"]});
planner.query({"arrivalStop" : "http://irail.be/stations/NMBS/008896115", "departureStop" : "http://irail.be/stations/NMBS/008821006", "departureTime": new Date()}, function (resultStream, source) {
  resultStream.on('result', function (path) {
    console.log(JSON.stringify(path));
  });
  resultStream.on('data', function (connection) {
    //console.log(connection);
    //if you're not interested anymore, you can stop the processing by doing this
  });
  //you can also count the number of HTTP requests done by the interface as follows
  source.on('request', function (url) {
    //console.log('Requesting', url);
  });
  //you can also catch when a response is generated HTTP requests done by the interface as follows
  source.on('response', function (url) {
    //console.log('Response received for', url);
  });
});
