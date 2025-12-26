const input = document.getElementById("guessfield");
const button = document.getElementById("guesssubmit");
const guess =document.getElementById("guess");
const result = document.getElementById("result");
const lowhigh = document.getElementById("lowhigh");
const box = document.getElementById("box");

let randomnumber = Math.floor(Math.random()*100+1);// +1 garda yelah yesko range badhai dinxah paila aaba yo 1 dekhi 100 sama janxah 
let guesscount = 1;
let previousguesses=[];

function checkguess(){
    const userguess = Number(input.value);
   
    if(userguess<1 || userguess>100 || isNaN(userguess)){
        result.textContent ="please enter a number between 1 and 100";
        result.className = "text-xs text-red-800 ml-4 bg-grey-300 text-center h-5 w-60"

        return;
    }

previousguesses.push(userguess);
guess.textContent = "previous guesses: " + previousguesses.join("->");
guess.className="bg-black-300 text-xs text-center text-white-300 mt-1"
 
if(userguess === randomnumber){
    result.textContent = `congratulations! you guessed it in ${guesscount} you are legend`;
    result.className ="bg-green-300 text-xs text-center text-white-300 mt-1"
    endgame();
}

else if (userguess < randomnumber){
    lowhigh.textContent ="your guess is too low!";
    lowhigh.className ="text-brown-300 text-xs text-center bg-blue-200"
}
else if(userguess >randomnumber){
    lowhigh.textContent = "your guess is too high!";
    lowhigh.className ="text-blue-500 text-xs text-center bg-yellow-200"
}
guesscount++;
input.value="";
if(guesscount>10){
    result.textContent = `your are not over smart you lost the game the random number is ${randomnumber}`;
    endgame();
}
}
function endgame(){
    input.disabled =true;
    lowhigh.textContent="";
    const resetbutton = document.createElement("button");
    resetbutton.textContent="start new game";
    resetbutton.className ="text-xs bg-purple-300 ml-5 h-4 w-25 ring-1 ring-purple-700 text-center rounded-md bg-blue-100 mt-5 hover:bg-blue400 hover:text-white-300 transition duration-1000 hover:translate-x-2"
   box.appendChild(resetbutton);
    resetbutton.addEventListener('click',resetgame);
}

function resetgame(){
 randomnumber = Math.floor(Math.random()*100+1);
   guesscount = 1;
     previousguesses=[];
  guess.textContent="";
 lowhigh.textContent="";
 result.textContent="";
  input.disabled=false;
 input.value='';
 resetbutton.remove();
 resetbutton="null";

}
button.addEventListener('click',checkguess);



