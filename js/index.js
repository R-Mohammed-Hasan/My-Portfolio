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

function time3() {
    printLetterByLetter(
        "philosophy",
        "My philosophy : Anyone can write code that a computer can understand. Good programmers write code that other humans can understand....",
        100
    );
}
printLetterByLetter("welcome", "Hello World...!!", 150);
setTimeout(time, 5000);
setTimeout(time2, 7000);
setTimeout(time3, 10000);