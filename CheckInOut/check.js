/**
 * Create two buttons : check-In and check-out
when  check-out  button is clicked the period of time (Hours) will be presented  
 */

let checkInTime = document.querySelector('#checkInTime');
let checkOutTime = document.querySelector('#checkOutTime');
// use global variable checkin :)

let checkin = 0;

function checkIn() {
    checkin = new Date().getUTCMinutes();
    checkInTime.innerHTML = ` Check In Time: ${checkin} Minutes`;

}

function checkOut() {
    let checkout = new Date().getMinutes();
    let result = checkout - checkin;

    checkOutTime.innerHTML = ` Check Out Time: ${checkout} Minutes <br> and Total Duration:  ${result} Minutes`;

}