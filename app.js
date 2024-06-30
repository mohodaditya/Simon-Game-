let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if( started == false){
        console.log("Game Satrted!");
        started = true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 275);
}


function levelUp(){

    userSeq = [];    

    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`#${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);

    console.log("LevelUP!");
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 275);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if( userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to restart.`;
        console.log("Game Over!");
        wrong();
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}
let body = document.querySelector("body");
function wrong(){
    body.classList.add("body");
    setTimeout(function(){
        body.classList.remove("body");
    }, 95);
}