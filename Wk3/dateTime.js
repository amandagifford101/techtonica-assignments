/* var date = new Date(1993, 0, 31);
console.log(date + "\n");

var d = new Date().toUTCString(); //date display standard
console.log(d);

console.log(d.toDateString());    //This one is saying that 
                                    //toDateString is not a func.???*/

//An epoch means an instant in time chosen as the origin of a particular era. 
//Basically Data-base time, and it is very exacting.

// Challenge : 

var oneMin = 60 * 1000;
var bDay = new Date(1993, 0, 31);
var today = new Date();
var mins = Math.round(Math.abs((bDay.getTime() - today.getTime())/(oneMin)));
console.log(mins); // Wow! 13926969 minutes...

var hours = mins/60;
console.log(hours);

var days = hours/24;
console.log(days);

//hours = 232116.18333333332; 

//days = 9671.507638888888; 