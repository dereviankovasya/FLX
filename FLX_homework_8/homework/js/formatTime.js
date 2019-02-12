
function getTimeFromMins(x) {

let day = Math.floor(x / 1440);
    let hour = Math.floor((x % 1440) / 60);
    let minute = (x % 1440) % 60;
    return day +' day(s) '+ hour + ' hour(s) ' + minute + ' minute(s).';
}
getTimeFromMins(120);