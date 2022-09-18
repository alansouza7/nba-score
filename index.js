let homeScoreNumber = document.getElementById("score-home")
let guestScoreNumber = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

function homeScore1(){
    countHome += 1
    homeScoreNumber.textContent = countHome;
    
}

function homeScore2(){
    countHome += 2
    homeScoreNumber.textContent = countHome;
}

function homeScore3(){
    countHome += 3
    homeScoreNumber.textContent = countHome;
}

function guestScore1(){
    countGuest += 1
    guestScoreNumber.textContent = countGuest;
}

function guestScore2(){
    countGuest += 2
    guestScoreNumber.textContent = countGuest;
}

function guestScore3(){
    countGuest += 3
    guestScoreNumber.textContent = countGuest;
}

function newGame(){
    guestScoreNumber.textContent = 0
    homeScoreNumber.textContent = 0
    countHome = 0
    countGuest = 0
}

