const getDaysToGo = require('get-days-to-go');

let remaining = getDaysToGo("2022-07-06");
console.log(remaining.days,remaining.hrs,remaining.mins,remaining.secs);