function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function() {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}

function time() {
    printLetterByLetter("intro", "I am ", 150);
}

function time2() {
    printLetterByLetter("user-name", "Mohammed Hasan", 150);
}
printLetterByLetter("welcome", "Hello World...!!", 150);
setTimeout(time, 3000);
setTimeout(time2, 4000);