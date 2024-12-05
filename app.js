const choices= document.querySelectorAll(".choice");
let userScore =0;
let copScore = 0;

let userPaper = document.querySelector("#user");
let compPaper = document.querySelector("#comp");
let msg = document.querySelector("#msg")



const genCompChoice=()=> {
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
   return  options[randIdx];

}

const drawGame=()=> {
    console.log("draw game ");
    msg.style.backgroundColor="black";

}

const checkWinner=(userWin,compChoice,userChoice)=> {
if(userWin){
    userScore++;
    userPaper.innerText = userScore;
    msg.innerText = `You win your ${userChoice} beat ${compChoice}`
    msg.style.backgroundColor="green";


}else{ 
    copScore++;
    compPaper.innerText = copScore;

    msg.innerText = `You lost  ${userChoice}  your beat ${compChoice}`
    msg.style.backgroundColor="red";

}

}
const playGame=(userChoice)=> {
    let compChoice = genCompChoice();
    console.log(compChoice);
    if(userChoice === compChoice){
        drawGame();
    }


    else{
        let userWin = true;
        if(userChoice === "rock"){
            //secciors , paper 
            userWin = compChoice === "scissors" ? true :false;
        }else if(userChoice == "paper"){
            //rock  , scissor
            userWin = compChoice === "rock" ? true :false;

        }else{
            userWin = compChoice === "paper" ? true:false;
        }
        checkWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=> {
choice.addEventListener("click",()=> {
    let userChoice = choice.getAttribute("id");
    console.log(userChoice)
    playGame(userChoice);
})
})