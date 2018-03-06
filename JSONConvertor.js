const fs = require('fs');
const path = require('path');

const json = JSON.parse('{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A201707' +
'10","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http:' +
'//irail.be/stations/NMBS/008814357","departureTime": "2017-07-11T09:30:00.000Z","arrivalTime": "2017-07-11T' +
'09:50:00.000Z","arrivalDelay":900,"gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A' +
'52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}');

fs.writeFileSync(path.join(__dirname, 'res.json'), 
    JSON.stringify(json, null, "\t").replace(/"/g, "'"));