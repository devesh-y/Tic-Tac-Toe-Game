const select_box = document.querySelector(".select-box"),
select_X = select_box.querySelector(".options .playerX"),
select_O = select_box.querySelector(".options .playerO"),
playbox = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allboxes = document.querySelectorAll("section span"),
resut_boxes = document.querySelector(".result-box"),
winnername = resut_boxes.querySelector(".won-text"),
resetbtn = resut_boxes.querySelector("button");


let playerxicon = "fas fa-times"; 
let playeroicon = "far fa-circle"; 
let playerSign = "X"; 
select_X.onclick = ()=>{
    select_box.classList.add("hide"); 
    playbox.classList.add("show"); 
    playerSign = "X"; 
}

select_O.onclick = ()=>{ 
    select_box.classList.add("hide"); 
    playbox.classList.add("show"); 
    playerSign = "O"; 
    players.setAttribute("class", "players active player"); 
}


function clickedBox(element)
{
    if(playerSign ==="O")
    {
        element.innerHTML = `<i class="${playeroicon}"></i>`; 
        players.classList.remove("active"); 
        element.setAttribute("id", playerSign); 
        selectWinner(); 
        element.style.pointerEvents = "none";
        playerSign="X";
    }
    else
    {
        element.innerHTML = `<i class="${playerxicon}"></i>`; 
        element.setAttribute("id", playerSign); 
        players.classList.add("active"); 
        selectWinner(); 
        element.style.pointerEvents = "none";
        playerSign="O";
    }
 
}

function getIdVal(classname)
{
    return document.querySelector(".box" + classname).id; //return id value
}
function checkIdSign(val1, val2, val3, sign)
{ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}
function selectWinner()
{
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign))
    {

        resut_boxes.classList.add("show");
        playbox.classList.remove("show");
        winnername.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }
    else{ 

        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            resut_boxes.classList.add("show");
            playbox.classList.remove("show");
            winnername.textContent = "Match has been drawn!"; 
        }
    }
}

resetbtn.onclick = ()=>{
    window.location.reload(); 
}