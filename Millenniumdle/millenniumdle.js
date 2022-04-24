
const guessTxtInput =document.getElementById("guessTxtInput");
const resultContainerDiv =document.getElementById("resultsContainer")
const resultContentDiv = document.getElementById("results");
const resultHeaderDiv = document.getElementById("resultsHeader");
const winDialog = document.getElementById("winDialog");
const winTxt = document.getElementById("winTxt");
const newGameDiv= document.getElementById("newGame");

let won;
let answerTeacher;
let guesses;
let guessHistory;

function newGame(){
    newGameDiv.innerHTML="";
    won = false;
    answerTeacher = getNewTeacher();
    winDialog.close();
    guesses =0;
    guessHistory=[];
    resultHeaderDiv.innerHTML=`<h3>Guesses: ${guesses}</h3>`;
    resultContentDiv.innerHTML ="";
}

newGame();

function guess(){

    const userGuess = guessTxtInput.value;
    if(won)
        return;
    const currentGuessedTeacher=getTeacher(userGuess);
    if(currentGuessedTeacher){
        if(!hasAlreadyGuessedTeacher(currentGuessedTeacher) )
        {
            if(currentGuessedTeacher === answerTeacher)
            {
                won=true;
            }
            
            guesses ++;
            guessHistory.push(currentGuessedTeacher);
            guessTxtInput.value="";
            resultContentDiv.innerHTML +=calculateResultString(currentGuessedTeacher, answerTeacher) + "<hr>";
            if(won===true){
                winTxt.textContent =`It was ${answerTeacher.name}! You got it in ${guesses} guesses!`;
                winDialog.showModal();
            }
        }
        else{
        resultContentDiv.innerHTML+=`<p style="color:red">You already guessed that teacher!</p><hr>`;
        }    
    }
    else{
        resultContentDiv.innerHTML+=`<p style="color:red">That isn't a teacher</p><hr>`;
    }
    resultHeaderDiv.innerHTML=`<h3>Guesses: ${guesses}</h3>`;
    resultContainerDiv.scrollTop = resultContainerDiv.scrollHeight;
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

function hasAlreadyGuessedTeacher(guess){
    for(let i=0; i<guessHistory.length; i++){
        if(guess.name===guessHistory[i].name)
        {
            return true;
        }
    }
    return false;
}


function calculateResultString(guess, actualTeacher){
    let nameCheck="❌";
    let hairCheck="❌";
    let gradeCheck="❌";
    let subjectCheck="❌";

    if(guess.name===actualTeacher.name)
    {
        nameCheck="✅";
    }
    if(guess.hair===actualTeacher.hair)
    {
        hairCheck="✅";
    }
    for(let i=0; i<actualTeacher.teachesSubjects.length; i++)
    {
        for(let j=0; j<guess.teachesSubjects.length; j++)
        {
            if(guess.teachesSubjects[j]===actualTeacher.teachesSubjects[i])
            {
                subjectCheck="✅";
            }
        }
    }
    for(let i=0; i<actualTeacher.teachesGrades.length; i++)
    {
        for(let j=0; j<guess.teachesGrades.length; j++)
        {
            if(guess.teachesGrades[j]===actualTeacher.teachesGrades[i])
            {
                gradeCheck="✅";
            }
        }
    }
    return `<p class="result">Name: ${guess.name} ${nameCheck}</p><p  class="result">Hair: ${guess.hair}${hairCheck}</p><p class="result">Grades Taught: ${guess.teachesGrades} ${gradeCheck}</p><p  class="result">Subjects Taught: ${guess.teachesSubjects} ${subjectCheck}</p>`;
    //return a p tag with highlighted text for right and wrong
}

function getNewTeacher(){
    const index = Math.floor(Math.random() * teachers.length);
    return teachers[index];
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