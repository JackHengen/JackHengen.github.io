
const guessTxtInput =document.getElementById("guessTxtInput");
const resultOutput = document.getElementById("results");
const guessDisplay = document.getElementById("guessDisplay");
const winDialog = document.getElementById("winDialog");
const helpDialog = document.getElementById("howToPlay");


let won = false;
let answerTeacher = getNewTeacher();
let guesses = 0;
let guessHistory =[];
guessDisplay.innerHTML=`<p>${guesses}</p>`;


function newGame(){
    won = false;
    answerTeacher = getNewTeacher();
    winDialog.close();
    resultOutput.innerHTML="";
    guesses =0;
    guessDisplay.innerHTML=`<p>${guesses}</p>`;
}


function guess(){

    const userGuess = guessTxtInput.value;
    const guessedTeacher=getTeacher(userGuess);
    if(guessedTeacher){
        if(!hasGuessed(guessedTeacher))
        {
            guesses ++;
            guessHistory.push(guessedTeacher);
            guessTxtInput.value="";
            calculateCorrectTeacher(guessedTeacher);
            if(won===true){
                winDialog.showModal();
            }
        }
        else{
        resultOutput.innerHTML+=`<p style="color:red">You already guessed that teacher!</p><hr>`;
        }    
    }
    else{
        resultOutput.innerHTML+=`<p style="color:red">That isn't a teacher</p><hr>`;
    }
    guessDisplay.innerHTML=`<p>${guesses}</p>`;
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

function hasGuessed(guess){
    for(let i=0; i<guessHistory.length; i++){
        if(guess.name===guessHistory[i].name)
        {
            return true;
        }
    }
    return false;
}


function calculateCorrectTeacher(guess){
    let nameCheck="❌";
    let hairCheck="❌";
    let gradeCheck="❌";
    let subjectCheck="❌";

    if(guess.name===answerTeacher.name)
    {
        nameCheck="✅";
        won = true;
    }
    if(guess.hair===answerTeacher.hair)
    {
        hairCheck="✅";
    }
    for(let i=0; i<answerTeacher.teachesSubjects.length; i++)
    {
        for(let j=0; j<guess.teachesSubjects.length; j++)
        {
            if(guess.teachesSubjects[j]===answerTeacher.teachesSubjects[i])
            {
                subjectCheck="✅";
            }
        }
    }
    for(let i=0; i<answerTeacher.teachesGrades.length; i++)
    {
        for(let j=0; j<guess.teachesGrades.length; j++)
        {
            if(guess.teachesGrades[j]===answerTeacher.teachesGrades[i])
            {
                gradeCheck="✅";
            }
        }
    }
    resultOutput.innerHTML+=`<p class="result">Name: ${guess.name} ${nameCheck}</p><p  class="result">Hair: ${guess.hair}${hairCheck}</p><p class="result">Grades Taught: ${guess.teachesGrades} ${gradeCheck}</p><p  class="result">Subjects Taught: ${guess.teachesSubjects} ${subjectCheck}</p><hr>`;
    //return a p tag with highlighted text for right and wrong
}

function getNewTeacher(){
    const index = Math.floor(Math.random() * teachers.length);
    return teachers[index];
}

function browseName(){
    input =guessTxtInput.value;

}

guessTxtInput.addEventListener("keyup", (e) => {
    if(e.key ==="Enter" && guessTxtInput.value != ""){
        guess();
    }
})



/*
function getPersonDetails(person){
    console.log(`name:${person.name}, grade:${person.gradeLevel}, hair color:${person.hair}, eye color:${person.eyeColor}`);
}

getPersonDetails(teachers[1]);
*/