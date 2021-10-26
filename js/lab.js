/*
 * AUTHOR: ANITA PANG <APANG6@UCSC.EDU>
 * CREATED: 19 OCTOBER
 * LICENSE: PUBLIC DOMAIN
 */


 myTransport = ['foot','car','bus','bike','plane'];

 myMainRide = {
   make: 'Toyota',
   model: 'Highlander',
   color: 'White',
   year: 2020
 }


 myTransport[1];
 myMainRide.make;
 console.log('My Wheels: ' + myTransport);

document.writeln("Kinds of transportation I use: ", myTransport, "</br>")
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
