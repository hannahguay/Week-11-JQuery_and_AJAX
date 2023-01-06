const button = document.querySelector("button")
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const grid = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

//this function changes the header to X's turn
function xTurn (){
    document.getElementById("header").textContent = "X\'s Turn";
}

//this function changes the header to O's turn
function oTurn (){
    document.getElementById("header").textContent  = "O\'s Turn";
}

//this function uses user clicks on the grid to alternate between 1 and 0 and trigger xTurn or oTurn accordingly
function alternateTurn(){
    let player = 1;
    for (let i = 0; i < 9; i++){
        if(player == 1) {
            grid[i].addEventListener('click', oTurn);
            player = 0;
        } else {
            grid[i].addEventListener('click', xTurn);
            player = 1;
        }
    }
}

alternateTurn();

//INSERT CHARACTER ON CLICK

//this function uses a XOR operator to alternate between 1 and 0 each time boxClick is called
//and inserts an X or O accordingly
let turn = 0;

function boxClick(id) {
    turn = turn ^ 1;
    if(turn == 1) {
        document.getElementById(id).textContent = 'X';
    } else if (turn == 0){
        document.getElementById(id).textContent = 'O';
    }
}
//FIND A WINNER

//This is a loop that determines if there are three boxes in a row with the same value and declares a winner based on the value
//Can't get the situation of a tie to actually run (default case, first condition)

document.getElementsByClassName("alert alert-primary")[0].style.display = "none";

for (let i = 0; i < grid.length; i++) {
   grid[i].addEventListener("click", function() {
      switch (true) {
      case box1.innerHTML == 'X' && box2.innerHTML == 'X' && box3.innerHTML == 'X':
        console.log("case1");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box1.innerHTML == 'X' && box5.innerHTML == 'X' && box9.innerHTML == 'X':
        console.log("case2");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box1.innerHTML == 'X' && box4.innerHTML == 'X' && box7.innerHTML == 'X':
        console.log("case3");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box2.innerHTML == 'X' && box5.innerHTML == 'X' && box8.innerHTML == 'X':
        console.log("case4");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box3.innerHTML == 'X' && box6.innerHTML == 'X' && box9.innerHTML == 'X':
        console.log("case5");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box4.innerHTML == 'X' && box5.innerHTML == 'X' && box6.innerHTML == 'X':
        console.log("case6");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box7.innerHTML == 'X' && box8.innerHTML == 'X' && box9.innerHTML == 'X':
        console.log("case7");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box1.innerHTML == 'O' && box2.innerHTML == 'X' && box3.innerHTML == 'O':
        console.log("case8");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "X is the Winner!";
        break;
      case box1.innerHTML == 'O' && box5.innerHTML == 'O' && box9.innerHTML == 'O':
        console.log("case9");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "O is the Winner!";
        break;
      case box1.innerHTML == 'O' && box4.innerHTML == 'O' && box7.innerHTML == 'O':
        console.log("case10");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "O is the Winner!";
        break;
      case box2.innerHTML == 'O' && box5.innerHTML == 'O' && box8.innerHTML == 'O':
        console.log("case11");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "O is the Winner!";
        break;
      case box3.innerHTML == 'O' && box6.innerHTML == 'O' && box9.innerHTML == 'O':
        console.log("case12");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "O is the Winner!";
        break;
      case box4.innerHTML == 'O' && box5.innerHTML == 'O' && box6.innerHTML == 'O':
        console.log("case13");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "O is the Winner!";
        break;
      case box7.innerHTML == 'O' && box8.innerHTML == 'O' && box9.innerHTML == 'O':
        console.log("case14");
        document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
        document.getElementsByClassName("alert alert-primary")[0].innerHTML = "O is the Winner!";
        break;
      default:
        const xElements = grid.filter(box => box.innerHTML === 'X');
        if(xElements >= 3) {
            console.log("default case 3 or more X's");
            document.getElementsByClassName("alert alert-primary")[0].style.display = "block";
            document.getElementsByClassName("alert alert-primary")[0].innerHTML = "Cat's Game!";
        } else {
          console.log("default case empty");
          document.getElementsByClassName("alert alert-primary")[0].innerHTML = "";
        }
      }   
  })
}

//RESET BUTTON

//Loops through the grid array and if a box contains any HTML replaces it with empty HTMl and hides the winner alert
button.addEventListener("click", e => {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].innerHTML != '') {
            grid[i].innerHTML = '';
            document.getElementsByClassName("alert alert-primary")[0].style.display = "none";
        }
    }
});







