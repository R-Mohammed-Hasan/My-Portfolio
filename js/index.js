let textSound = new Audio("./../images/key-sound.wav");

function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function() {
        textSound.play();
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}

function time() {
    document.getElementById("content").style.visibility = "visible";
    printLetterByLetter("welcome", "Hello World...!!", 150);
}

function time1() {
    printLetterByLetter("intro", "I am ", 150);
}

function time2() {
    printLetterByLetter("user-name", "Mohammed Hasan", 150);
}

function time3() {
    printLetterByLetter("info", "I am a good WebDev", 150);
}

function time4() {
    printLetterByLetter(
        "philosophy",
        "My philosophy : Anyone can write code that a computer can understand. Good programmers write code that other humans can understand....",
        70
    );
}

function onRefresh() {
    document.getElementById("my-img").style.cssText =
        "top:5%;left:5%;width:5%;height:5%;opacity:0;";
    document.getElementById("nav-my-img").style.opacity = "1";
    setTimeout(time, 4000);
    setTimeout(time1, 10000);
    setTimeout(time2, 12000);
    setTimeout(time3, 15000);
    setTimeout(time4, 17000);
}