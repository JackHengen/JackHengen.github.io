class Teacher{
    constructor({name,hair,teachesGrades,teachesSubjects})
    {
        this.name=name;
        this.hair=hair;
        this.teachesGrades=teachesGrades;
        this.teachesSubjects=teachesSubjects;
    }
}

class Game{
    constructor()
    {
        this.answer = getRandomTeacher();
        this.won = false;      //
        this.lost = false;     //
        this.guesses =0;       //
        this.guessHistory =[]; // make all readonly
    }
    AddGuess =function(guess){
        if(this.won || this.lost)
            return;
        const userGuess = getTeacher(guess);
        if(userGuess && !this.guessHistory.includes(userGuess))
        {
            this.guesses++;
            this.guessHistory.push(userGuess);
            if(userGuess ===this.answer)
            {
                this.won =true;
                //update stats
            }
            const result = this.#calculateResultString(userGuess);
            return [true,result]; 
        }
        else{
            if(!userGuess)
            {
                return [false,"That isn't a teacher!"];
            }
            else if(this.guessHistory.includes(guess))
            {
                return [false,"That teacher was already guessed!"];
            }
            else
            {
                return [false,"Unknown Error :("];
            }
        }
    }
    forfeit(){
        this.lost=true;
    }

    #calculateResultString(guess){
        let nameCheck="❌";
        let hairCheck="❌";
        let gradeCheck="❌";
        let subjectCheck="❌";
    
        if(guess.name===this.answer.name)
        {
            nameCheck="✅";
        }
        if(guess.hair===this.answer.hair)
        {
            hairCheck="✅";
        }
        for(let i=0; i<this.answer.teachesSubjects.length; i++)
        {
            for(let j=0; j<guess.teachesSubjects.length; j++)
            {
                if(guess.teachesSubjects[j]===this.answer.teachesSubjects[i])
                {
                    subjectCheck="✅";
                }
            }
        }
        for(let i=0; i<this.answer.teachesGrades.length; i++)
        {
            for(let j=0; j<guess.teachesGrades.length; j++)
            {
                if(guess.teachesGrades[j]===this.answer.teachesGrades[i])
                {
                    gradeCheck="✅";
                }
            }
        }
        return `<p class="result">Name: ${guess.name} ${nameCheck}</p><p  class="result">Hair: ${guess.hair}${hairCheck}</p><p class="result">Grades Taught: ${guess.teachesGrades} ${gradeCheck}</p><p  class="result">Subjects Taught: ${guess.teachesSubjects} ${subjectCheck}</p>`;
        //return a p tag with highlighted text for right and wrong
    }
}