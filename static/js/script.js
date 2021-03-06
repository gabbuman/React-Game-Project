// Challenge 1: Your age in days!

function ageInDays(){
    var birthYear = prompt('What year where you born?');
    let days = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + days + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInDays').remove();
}


// Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}



// Challenge 3: Rock Paper and Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = randChoice(); 
    console.log('Computer choice: ', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}



function randChoice(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
}

function decideWinner(yourChoice, computerChoice){
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper':0.5,'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
     if(yourScore === 0){
         return {'message':  'You lost!', 'color': 'red'};
     }
     else if(yourScore === 0.5){
         return {'message': 'You tied!', 'color': 'yellow'};
     }
     else{
         return {'message': 'You won!', 'color': 'green'};
     }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // remove all previous images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' heigh=150 width=150 style='box-shadow: 0px 10px 50px rgba(41, 63, 187, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' heigh=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}



// Challenge 4: Change the color of all buttons
let allButtons = document.getElementsByTagName('button');
console.log(allButtons);

let copyAllButtons = [];
for (let i=0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i]);
}