function setCounter(targetElement, targetTime, duePrefix, dueSuffix, latePrefix, lateSuffix) {
    now = new Date();

    var msg = '';
    
    oneWeekHence = new Date(now.getTime() + 7*24*60*60*1000);
    
    var diff = 0;
    if (now > targetTime) {
        // Late
        msg = msg + latePrefix + '<span class="late"> ';
        diff = now - targetTime;
    } else if (oneWeekHence > targetTime) {
        // In the near future
        msg = msg + duePrefix + '<span class="soon"> ';
        diff = targetTime - now + 1000;
    } else {
        // In the far future
        msg = msg + duePrefix + '<span class="due"> ';
        diff = targetTime - now + 1000;
    }
    
    var days = Math.floor(diff/(1000*60*60*24));
    diff -= days*1000*60*60*24;
    msg = msg + days + 'd ';
    
    var hours = Math.floor(diff/(1000*60*60));
    diff -= hours*1000*60*60;
    msg = msg + hours + 'h ';
    
    var mins = Math.floor(diff/(1000*60));
    diff -= mins*1000*60;
    msg = msg + mins + 'm ';
    
    var secs = Math.floor(diff/(1000));
    msg = msg + secs + 's';
    
    if (now > targetTime) {
        msg = msg + '</span>' + lateSuffix;
    } else {
        msg = msg + '</span>' + dueSuffix;
    }
    
    document.getElementById(targetElement).innerHTML = msg;
    
}

var soon = new Date ( new Date().getTime() + 24*60*60*1000 );

window.setInterval(function () { setCounter('assignment1', new Date(2015, 7, 26, 23, 59), " is due in ", "", " is late by ", "")}, 1000);
window.setInterval(function () { setCounter('assignment2', new Date(2015, 9, 7, 23, 59), " is due in ", "", " is late by ", "")}, 1000);

window.setInterval(function () { setCounter('labs1', new Date(2015, 7, 5, 14, 0), " are due in ", "", " are late by ", " and will no longer be marked")}, 1000);
window.setInterval(function () { setCounter('labs2', new Date(2015, 7, 26, 14, 0), " are due in ", "", " are late by ", " and will no longer be marked")}, 1000);
window.setInterval(function () { setCounter('labs3', new Date(2015, 9, 7, 14, 0), " are due in ", "", " are late by ", " and will no longer be marked")}, 1000);
//window.setInterval(function () { setCounter('labs4', new Date(2015, 9, 9, 14, 0), " are due in ", "", " are late by ", " and will no longer be marked")}, 1000);


