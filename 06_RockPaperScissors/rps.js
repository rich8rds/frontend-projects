let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('userScore');
const compScore_span = document.getElementById('compScore');
const result_p = document.querySelector('.result > p');
const rock_img = document.getElementById('Rock');
const paper_img = document.getElementById('Paper');
const scissors_img = document.getElementById('Scissors');

const small_u = "user" .fontsize(3).fontcolor("red").sub();
const small_c = "comp" .fontsize(3).fontcolor("#6078db").sub();

const win = (userChoice, compChoice) =>  {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div =  document.getElementById(userChoice);

    result_p.innerHTML = `${userChoice}${small_u} covers ${compChoice}${small_c} . You win✨`;
    userChoice_div.classList.add('green-glow');
    setTimeout( ()=>  userChoice_div .classList.remove('green-glow') , 300);
}
const lose = (userChoice, compChoice) => {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div =  document.getElementById(userChoice);

    result_p.innerHTML = `${userChoice}${small_u} lost to ${compChoice}${small_c}. You lose`;
    userChoice_div.classList.add('red-glow');
    setTimeout( () =>  userChoice_div.classList.remove('red-glow'), 300);
}
const draw = (userChoice, compChoice) => {
    const userChoice_div =  document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice}${small_u}   == ${compChoice}${small_c} . It's a draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout( () => userChoice_div.classList.remove('gray-glow') , 300);
}
const getComChoice = () =>{
        const comChoice = ["Rock", "Paper", "Scissors"];
        const randomNum = Math.floor(Math.random() * 3);
        return comChoice[randomNum];
}
const game = (userChoice) =>{ 
    const compChoice = getComChoice();
    switch(userChoice + compChoice){
            //For wins
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
               win(userChoice, compChoice);
                break;
                //For Losses
            case "ScissorsRock":
            case "RockPaper":
            case "PaperScissors":
                    lose(userChoice, compChoice);
                break;
            //For Draws
            case "RockRock": 
            case "PaperPaper":
            case "ScissorsScissors":
                    draw(userChoice, compChoice);
                break;
    }
}
const main = () => {
    rock_img.addEventListener('click' , () => game("Rock"));
    paper_img.addEventListener('click' , () => game("Paper"));
    scissors_img.addEventListener('click' , () =>game("Scissors"));
}
main();

