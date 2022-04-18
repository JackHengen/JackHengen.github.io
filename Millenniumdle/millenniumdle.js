
const guessTxtInput =document.getElementById("guessTxtInput");
const resultOutput = document.getElementById("results");
const guessDisplay = document.getElementById("guessDisplay");
const winDialog = document.getElementById("winDialog");

let won = false;
let answerTeacher = getNewTeacher();
let guesses = 0;
guessDisplay.innerHTML=`<p>${guesses}</p>`


function newGame(){
    won = false;
    answerTeacher = getNewTeacher();
    winDialog.close();
    resultOutput.innerHTML="";
    guesses =0;
    guessDisplay.innerHTML=`<p>${guesses}</p>`
}


function guess(){

    const userGuess = guessTxtInput.value;
    const guessedTeacher=getTeacher(userGuess);

    if(guessedTeacher){
        guesses ++;
        guessTxtInput.value="";
        calculateCorrectTeacher(guessedTeacher);
        if(won===true){
            winDialog.showModal();
        }
    }
    else{
        resultOutput.innerHTML+=`<p style="color:red">That isn't a teacher</p>`
    }
    guessDisplay.innerHTML=`<p>${guesses}</p>`
}

function getTeacher(guess){
    for(let i=0; i<teachers.length; i++)
    {
        if(guess.toLowerCase() === teachers[i].name.toLowerCase()){
            return teachers[i];
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
                subjectCheck="✅"
            }
        }
    }
    for(let i=0; i<answerTeacher.teachesGrades.length; i++)
    {
        for(let j=0; j<guess.teachesGrades.length; j++)
        {
            if(guess.teachesGrades[j]===answerTeacher.teachesGrades[i])
            {
                gradeCheck="✅"
            }
        }
    }
    resultOutput.innerHTML+=`<p>Name: ${guess.name} ${nameCheck} | Hair: ${guess.hair}${hairCheck} | Grades Taught: ${guess.teachesGrades} ${gradeCheck} | Subjects Taught: ${guess.teachesSubjects} ${subjectCheck}</p>`;
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