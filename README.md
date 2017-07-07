# OASIS front-end
### Status
[![Build Status](https://travis-ci.org/oSoc17/oasis-frontend.png)](https://travis-ci.org/oSoc17/oasis-frontend)
## About
Together, Ghent and the region of Madrid have initiated an innovative action that will increase the accessibility of public services and public transport. To do this, they will collaborate to publish linked open data. Both cities are experienced publishers of open data, and together they will prove that new technologies (such as the “Semantic Web”) can lead to economies of scale, such as the creation of cross-country applications.  

The proof of concept is a small app in which a user can fill in the route he usually takes to work/home. The product wil show the **quality of experience** of the trip, compared to trains that depart earlier or later, within a predifined timespan.  
The applications uses linked open data from the iRail API, combined with historical data.

## Installation
### Requirements
* Node.JS (^v6.9.x)
* npm (^v3.x.x)
### Commands
To install all dependancies (required before running any of the other commands).
```
$ npm install
```
Start the application in developer mode (this will also open the project in the default browser).
```
$ npm start
```
Build the app for uploading it to the browser
```
$ npm run build
```