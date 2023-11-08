// initial number of cookies    
var num = 0;

// get the cookie div element from the html file
var cookie = document.getElementById("cookie");

// create a function called cookieClick that will increment a count and change levels on every click
function cookieClick() { 

    // every click increment count by 1 and update the numbers div element
    var numbers = document.getElementById("numbers");
    num += 1;
    numbers.innerHTML = num;

    // get the level div element from the html file
    var upgradeLevel = document.getElementById("upgradeLevel");
    

    // automatic upgrade to 2x paul dickson level
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Paul Dickson Level";
    }

    // automatic upgrade to 10x carl alphonce level
    if(num >= 300) {
        num += 10;
        upgradeLevel.innerHTML = "Carl Alphonce Level";
    }

    // automatic upgrade to 30x ethan blanton level
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Ethan Blanton Level";
    }

    // automatic upgrade to 1000x matthew hertz level
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Matthew Hertz Level";
    }
}
