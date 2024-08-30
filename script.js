let userscore=0
let computerscore=0
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
        playGame(userChoice)
    })
})

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"]
    //rock paper scissors
    const randomIndex= Math.floor(Math.random() *3)
    return options[randomIndex]
}

const playGame=(userChoice)=>{
    console.log("User choice = ",userChoice)
    //Generate computer choice
    const compChoice = genCompChoice()
    console.log("Computer choice = ",compChoice)

    if(userChoice == compChoice){
        drawGame()
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin= compChoice==="paper"? false:true
        }else if(userChoice==="paper"){
            //rock scissor
            userWin= compChoice==="scissors"? false:true
        }else{
            //rock paper
            userWin= compChoice==="rock"? false:true
        }

        showWinner(userWin,userChoice,compChoice)
    }
}

const drawGame=()=>{
    // console.log("game was draw")
    msg.innerText="Game was draw. Play again"
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++
        userscorepara.innerText=userscore
        // console.log("You Win!!!")
        msg.innerText=`You win!!! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        computerscore++
        compscorepara.innerText=computerscore
        // console.log("You loose!!!")
        msg.innerText=`You loose!!! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}
