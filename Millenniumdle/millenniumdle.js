
const guessTxtInput =document.getElementById("guessTxtInput");

function guess(){
    const userGuess = guessTxtInput.value;
    if(guess){

    }
}

function getPersonDetails(person){
    console.log(`name:${person.name}, grade:${person.gradeLevel}, hair color:${person.hairColor}, eye color:${person.eyeColor}`);
}

getPersonDetails(teachers[1]);