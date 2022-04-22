const helpDialog = document.getElementById("howToPlay");

const gameExampleDiv =document.getElementById("gameExamples");
let guessedTeacher;
let mysteryTeacher;
updateGameExample();

function updateGameExample(){
    guessedTeacher = getNewTeacher();
    mysteryTeacher = getNewTeacher();
    gameExampleDiv.innerHTML =
    `
    For example: if you guess <b>"${guessedTeacher.name}"</b> and the mystery teacher is actually: <b>${mysteryTeacher.name}</b>
        <br>The result will be:
        <br>${calculateResultString(guessedTeacher,mysteryTeacher)}
    `
}

function showHelp(){
    helpDialog.showModal();
}

function closeHelp(){
    helpDialog.close();
}