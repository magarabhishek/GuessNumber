let number= Math.floor(Math.random() * 10) + 1;
let attempts=3;
while(attempts>0){
    let userGuess=Number(prompt("guess a number between 1 and 10:"));
    if(userGuess===number){
        alert("congratulations! you guessed the number!");
        break;
    }
    else if(userGuess < number){
        alert("higher — try again.");
    }
    else{
        alert("lower — try again.");
    }
    attempts--;
}
if(attempts===0){
    alert(`game over! the number was ${number}`);
}
