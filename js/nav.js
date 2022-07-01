// function showText(target, message, index, interval) {
//     if (index < 20) {
//         $(target).append(message[index++]);
//         setTimeout(function() {
//             showText(target, message, index, interval);
//         }, interval);
//     }
// }
// showText(
//     ".test",
//     `<p><strong>Address : </strong> No : 3, 3rd Sangam Colony, Kottivakkam,<br> Chennai - 600 041 </p>
//         Instagram: < a href = '' > https: //instagram.com</><br> Facebook : <a href="">https://facebook.com</a><br> LinkedIn : <a href="">https://linkedin.com</a>
//         `,
//     0,
//     500
// );
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

printLetterByLetter("someElement", "Hello world, bonjour le monde.", 100);