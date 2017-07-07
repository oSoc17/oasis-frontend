const path = require('path');
const trips = require('../../dummydata/trips.json');

export class Parser {
  convToReadableTime(seconds) {
    return seconds / 60;
  }

  convDepartTime(timestamp) {
    let date = new Date(parseInt(timestamp));
    console.log(date);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  parseRaw(raw) {
    let res = {raw: raw, data: {
      'labels': [], 
      'data': [
        {'label': 'minimum travel time', 'data': [] },
        {'label': 'standard travel time', 'data': []},
        {'label': 'maximum travel time', 'data': [] }
        ]
      }
    };

    let conn = raw.connection;
    console.log(conn);
    for (let i=0; i < conn.length; i++) {
      let travelDuration = this.convToReadableTime(parseInt(conn[i].duration));
      let minDelay = Math.round(Math.random() * 20);
      let maxDelay = Math.round(Math.random() * 20) + minDelay;
      res.data.data[0].data.push(travelDuration);
      res.data.data[1].data.push(travelDuration + minDelay);
      res.data.data[2].data.push(travelDuration + maxDelay);
      res.data['labels'].push(`${this.convDepartTime(conn[i].departure.time)} - ${conn[i].departure.vehicle}`);
    }

    if (conn.length < 6) {
      for (let i=0; i < (6 - conn.length); i++) {
        for (let x=0; x < 3; x++) {
          res.data.data[x].data.push(0);
        } 
        res.data['labels'].push("--:--");
      }
    }
    
    return res;
  }
  
  findById(id) {
    return trips.filter((trip) => trip['@id'] === id);
  }

  findByArrivalStopAndTime(arrivalStop, arrivalTime) {
    return trips.filter((trip) => {
      let date = new Date(trip.arrivalTime);
      let time = date.getTime();
      return trip.arrivalStop === arrivalStop && time === arrivalTime;
    })[0];
  }
}
