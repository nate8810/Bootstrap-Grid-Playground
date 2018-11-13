// JavaScript source code
var today = new Date();

function myFunction(a,b) {
    return a + b;
}


document.getElementById("footer").innerHTML = `Copywrite &copy ${myFunction("Your ", "Mom")} ${today.getFullYear()} all rights reserved`;

