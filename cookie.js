// initial number of cookies    
var num = 0

// get the cookie div element from the html file
// var cookie = document.getElementById("cookie")
// create a function called cookieClick that will increment a count and change levels on every click
function cookieClick() { 

    // every click increment count by 1 and update the numbers div element
    var numbers = document.getElementById("numbers")//get numbers using ID
    //increment number by 1 for that click
    var cookie = document.getElementById("image")
    num+=1
    numbers.innerHTML=num
    // get the level div element from the html file
    var level = document.getElementById("upgradeLevel")

    // automatic upgrade to 2x paul dickson level
    if (num >= 30) {
        num+=2
        level.innerHTML = "Paul Dickson Level"
    }
    // automatic upgrade to 10x carl alphonce level
    if (num >= 100) {
        num+=10
        level.innerHTML = "Carl Alphonce Level"
    }    

    // automatic upgrade to 100x ethan blanton level
    
    if (num >= 500) {
        num+=15
        level.innerHTML = "Ethan Blanton Level"
        cookie.src = "imgs/cracked-cookie.png"
    }  
    // automatic upgrade to 1000x matthew hertz level
    

    //Add semi broken cookie for halfway and completely break the cookie after completion
}
