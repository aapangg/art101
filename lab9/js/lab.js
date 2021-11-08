/*
 * AUTHOR: ANITA PANG <APANG6@UCSC.EDU>
 * CREATED: 2 NOVEMBER, 2021
 * LICENSE: PUBLIC DOMAIN
 */

window.onload = function () {
    var outputEl = document.getElementById("outputEl");
    var new1El = document.createElement("p");

    new1El.innerHTML = "Something new.";
    new1El.id = "new-one";

    var new2El = document.createElement("p");

    new1El.id = "new-two";
    new2El.innerHTML = "Something else.";

    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);
    outputEl.className = 'changed';
}
