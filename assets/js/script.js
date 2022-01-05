const resultText = document.getElementById("result-message");
const user_img = document.getElementById("human-img");
const cpu_img = document.getElementById("cpu-img");
const scoreP = document.getElementById("score");
const buttons = document.querySelectorAll(".btn-elements")
const board_game = [
    [0,1,2,2,1],
    [2,0,1,1,2],
    [1,2,0,2,1],
    [1,2,1,0,2],
    [2,1,2,1,0]
];
const result = ["tie","win","loose"]
const choices = ["rock","paper","scissors","lizard","spock"]
let cpu = 0;
const cpChioce = choices[cpu];
let score = 0;
let user = 0;
console.log(`CPNUMBER: ${cpu}`)
console.log(`CPElEMENT: ${cpChioce}`)
let game_result = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        user = button.getAttribute('data-choice');
        
        innerText();
    });
})

function innerText(){
    cpu = pickRandomChoise();
    console.log(`CP:${cpu}`)
    game_result = board_game[cpu][user]
    console.log(`CORRESPOND NUMBER RESULT: ${game_result}`)
    resultText.innerHTML = `You ${result[game_result]}. <br> ${descrip_game[cpu][user]}`
    user_img.src = "assets/images/"+choices[user]+".png";
    cpu_img.src = "assets/images/"+choices[cpu]+".png";  
    console.log(result[game_result])
    console.log(descrip_game[cpu][user])
    checkWinner();
}

function checkWinner(){

    if(game_result == 2 ) {
        if (score >= 1) {
            updateScore(-1); 
        } else {
            alert("You loose")
        }   
    }
     
     else if (game_result == 1) {
        updateScore(1)
     }
     else {
         score = score;
     }
}

console.log(user)
function updateScore(value){
    score += value;
    scoreP.innerText = score
}
function pickRandomChoise(){
    return Math.floor(Math.random() * 5)
}


// Game description
const descrip_game = [
    ["Are the same", "Paper covers rock", "Rock crushes scissors", "Rock crushes lizard", "Spock vaporizes rock"],
    ["Paper covers rock", "Are the same", "Scissors cuts paper", "Lizard eats paper", "Paper disproves Spock"],
    ["Rock crushes scissors","Scissors cuts paper","Are the same","Scissors decapitates lizard","Spock smashes scissors"],
    ["Rock crushes lizard","Lizard eats paper","Scissors decapitates lizard","Are the same","Lizard poisons Spock"],
    ["Spock vaporizes rock","Paper disproves Spock","Spock smashes scissors","Lizard poisons Spock","Are the same"]
];
function getText(){
    const game_result = board_game[cpu][user]
    console.log(`CORRESPOND NUMBER RESULT: ${game_result}`)
    result[game_result]
    console.log(result[game_result])
    console.log(descrip_game[cpu][user])
}
/**
}

 * The variables that save the possible results and the elements that can be chosen are created.
 * A two-dimensional array is created in which the result of the choice of the user and the CPU is calculated

function chooseElement(human){
    // Contains the result values
    let i = 1;
    let score = 3
    const result = ["tie","win","loose"]
    // Contains all elements
    const elements = ["rock","paper","scissors","lizard","spock"]
    // A two-dimensional array where the game is encoded. The columns are the user's movement and the rows are those of the computer. The numbers are the result.
    const board_game = [
                        [0,1,2,2,1],
                        [2,0,1,1,2],
                        [1,2,0,2,1],
                        [1,2,1,0,2],
                        [2,1,2,1,0]
                    ];
    

    // Game description
    const descrip_game = [
                            ["Are the same", "Paper covers rock", "Rock crushes scissors", "Rock crushes lizard", "Spock vaporizes rock"],
                            ["Paper covers rock", "Are the same", "Scissors cuts paper", "Lizard eats paper", "Paper disproves Spock"],
                            ["Rock crushes scissors","Scissors cuts paper","Are the same","Scissors decapitates lizard","Spock smashes scissors"],
                            ["Rock crushes lizard","Lizard eats paper","Scissors decapitates lizard","Are the same","Lizard poisons Spock"],
                            ["Spock vaporizes rock","Paper disproves Spock","Spock smashes scissors","Lizard poisons Spock","Are the same"]
                        ];    
    // CPU chooses a random item betwen 0 and 4 
    const cpu = Math.floor((Math.random() * 5));
    // Game result. 
    const game_result = board_game[cpu][human];
    console.log(game_result)                  
    // Add the result in the html
    resultText.innerHTML = `You ${result[game_result]}!! ${descrip_game[human][cpu]}!`
    console.log(`You choose ${elements[human]}, and the CPU choose ${elements[cpu]} So you ${result[game_result]}`)
    // Create the path of the image chosen by the user and the cpu
    human_img.src = "assets/images/"+elements[human]+".png";
    cpu_img.src = "assets/images/"+elements[cpu]+".png";

    // Message to be reproduced by the browser                    
    //const message = new SpeechSynthesisUtterance(`You choose ${elements[human]}, and the CPU choose ${elements[cpu]}. So you ${result[game_result]}, because ${descrip_game[human][cpu]} `)                        
    //message.lang = 'en-US'
    //window.speechSynthesis.speak(message) 
    if (game_result == 1 ){
        score++;
        scoreP.innerText = score;
    }else{
        score--;
        scoreP.innerText = score;
    }
}
 */
