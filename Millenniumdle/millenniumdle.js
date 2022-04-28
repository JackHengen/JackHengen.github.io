
const guessTxtInput =document.getElementById("guessTxtInput");
const resultContainerDiv =document.getElementById("resultsContainer")
const resultContentDiv = document.getElementById("results");
const resultHeaderDiv = document.getElementById("resultsHeader");
const winDialog = document.getElementById("winDialog");
const winTxt = document.getElementById("winTxt");
const newGameDiv= document.getElementById("newGame");
const forfeitDiv= document.getElementById("forfeit");
const answerDiv = document.getElementById("answer");

let game;
newGame();


//events
function forfeit()
{
    game.forfeit();
    newGameDiv.innerHTML = `<button onclick="newGame()">New Game</button>`;
    forfeitDiv.innerHTML ="";
    answerDiv.innerHTML=`<p>The answer was ${game.answer.name}`;
}

guessTxtInput.addEventListener("keyup", (e) => {
    if(e.key ==="Enter" && guessTxtInput.value != ""){
        guess();
    }
})

function closeWin(){
    winDialog.close();
    newGameDiv.innerHTML += `<button onclick="newGame()">New Game</button>`
}

function guess(){
    if(game.won || game.lost)
        return;
    const guess =guessTxtInput.value;
    const result = game.AddGuess(guess);
    guessTxtInput.value="";
    if(result[0]){
        resultContentDiv.innerHTML += result[1] + "<hr>";
    }
    else{
        resultContentDiv.innerHTML += `<p style="color:red"> ${result[1]}</p><hr>`
    }
    resultHeaderDiv.innerHTML=`<h3>Guesses: ${game.guesses}</h3>`;
    resultContainerDiv.scrollTop = resultContainerDiv.scrollHeight;
    if(game.won)
    {
        winDialog.showModal();
        winTxt.innerHTML += `<p>The teacher was <strong>${guess.toUpperCase()}!</strong> You got it in <strong>${game.guesses}</strong> guesses!</p>`
        newGameDiv.innerHTML = `<button onclick="newGame()>New Game</button>`;
        forfeitDiv.innerHTML="";
    }
    if(game.lost)
    {
        newGameDiv.innerHTML = `<button onclick="newGame()>New Game</button>`;
        answerDiv.innerHTML=`<p>The answer was ${game.answer.name}`;
    }
}


//functions
function newGame(){
    answerDiv.innerHTML ="";
    resultHeaderDiv.innerHTML=`<h3>Guesses: 0</h3>`;
    resultContentDiv.innerHTML ="";
    winDialog.close();
    newGameDiv.innerHTML="";
    forfeitDiv.innerHTML="Don't know the teacher? <button onclick='forfeit()'>Forfeit</button>"
    game = new Game();
}

function getTeacher(guess){
    let modifiedGuess = guess.toLowerCase();
    modifiedGuess = modifiedGuess.replace(/ /g, "");
    if(modifiedGuess[0]=== "m" && (modifiedGuess[1]=== "r" || modifiedGuess[1] ==="s"))
    {
        if(modifiedGuess[2]===".")
        {
            modifiedGuess = modifiedGuess.replace(".","");
        }
        modifiedGuess = modifiedGuess.replace("mr","");
        modifiedGuess = modifiedGuess.replace("ms","");
    }
    if(modifiedGuess[0]==="d" && modifiedGuess[1]==="r")
    {
        if(modifiedGuess[2]===".")
        {
            modifiedGuess = modifiedGuess.replace(".","");
        }
        modifiedGuess = modifiedGuess.replace("dr","");
    }
    modifiedGuess = modifiedGuess.replace("coach","");
    for(let i=0; i<teachers.length; i++)
    {
        let modifiedTeacherString =teachers[i].name.toLowerCase();
        modifiedTeacherString = modifiedTeacherString.replace(/ /g,"");
        modifiedTeacherString = modifiedTeacherString.replace("ms.","");
        modifiedTeacherString = modifiedTeacherString.replace("mr.","");
        modifiedTeacherString = modifiedTeacherString.replace("dr.","");
        modifiedTeacherString = modifiedTeacherString.replace("coach","");
        if(modifiedGuess === modifiedTeacherString){
            return teachers[i];
        }
    }
    return false;
}

function getRandomTeacher(){
    const index = Math.floor(Math.random() * teachers.length);
    return teachers[index];
}

