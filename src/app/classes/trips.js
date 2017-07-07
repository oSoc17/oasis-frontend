const tripData = require("../../dummydata/trips.json");

class Trips {
  findById(id) {
    let trips = tripData;
    return trips.filter((trip) => trip["@id"] === id)[0];
  }

  findByArrivalStopAndTime(arrivalStop, arrivalTime) {
    let trips = tripData;
    return trips.filter((trip) => {
      let date = new Date(trip.arrivalTime);
      let time = date.getTime();
      return trip.arrivalStop === arrivalStop && time === arrivalTime;
    })[0];
  }
}

//console.log(new Trips().findById("http://irail.be/connections/8885001/20170705/IC1909"));
//console.log(new Trips().findByArrivalStopAndTime("http://irail.be/stations/NMBS/008886348", 1499240640000));

export default Trips;
