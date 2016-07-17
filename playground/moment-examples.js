var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> -60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1468783336;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment', currentMoment.format('MMM D, YY @ h:mm a'));
console.log('currentMoment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));
