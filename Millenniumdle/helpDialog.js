const helpDialog = document.getElementById("howToPlay");

const gameExampleDiv =document.getElementById("gameExamples");
let guessedTeacher;
let mysteryTeacher;
updateGameExample();

function updateGameExample(){
    const g = new Game()
    const guess =getRandomTeacher()
    const result = g.AddGuess(guess.name);
    gameExampleDiv.innerHTML =
    `
    For example: if you guess <b>"${guess.name}"</b> and the mystery teacher is actually: <b>${g.answer.name}</b>
        <br>The result will be:
        <br>${result[1]}
    `
}

function showHelp(){
    helpDialog.showModal();
}

function closeHelp(){
    helpDialog.close();
}