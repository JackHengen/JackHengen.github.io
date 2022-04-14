
const guessTxtInput =document.getElementById("guessTxtInput");
const resultOutput = document.getElementById("results");
const guessDisplay = document.getElementById("guessDisplay");



const answerTeacher = getNewTeacher();
let guesses = 0;
guessDisplay.innerHTML=`<p>${guesses}</p>`
function guess(){
    const userGuess = guessTxtInput.value;
    for(let i=0; i<teachers.length; i++)
    {
        if(userGuess === teachers[i].name){
            guesses ++;
            calculateCorrectTeacher(teachers[i])
            break;
        }
    }
    guessDisplay.innerHTML=`<p>${guesses}</p>`
}

function calculateCorrectTeacher(guess){
    let nameCheck="❌";
    let hairCheck="❌";
    let gradeCheck="❌";
    let subjectCheck="❌";

    if(guess.name===answerTeacher.name)
    {
        nameCheck="✅";
    }  
    if(guess.hair===answerTeacher.hair)
    {
        hairCheck="✅";
    }
    for(let i=0; i<answerTeacher.teachesSubjects.length; i++)
    {
        for(let i=0; i<guess.teachesSubjects.length; i++)
        {
            if(guess.teachesSubjects[i]===answerTeacher.teachesSubjects[i])
            {
                subjectCheck="✅"
            }
        }
    }
    for(let i=0; i<answerTeacher.teachesGrades.length; i++)
    {
        for(let i=0; i<guess.teachesGrades.length; i++)
        {
            if(guess.teachesGrades[i]===answerTeacher.teachesGrades[i])
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
/*
function getPersonDetails(person){
    console.log(`name:${person.name}, grade:${person.gradeLevel}, hair color:${person.hair}, eye color:${person.eyeColor}`);
}

getPersonDetails(teachers[1]);
*/