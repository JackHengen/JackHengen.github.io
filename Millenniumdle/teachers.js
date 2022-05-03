
const teachers=[
    new Teacher({
        name:"Mr.Conway", hair:"brown",teachesGrades:["N/A"],teachesSubjects:["N/A"]
    }),
    new Teacher({
        name:"Mr.Otto", hair:"black",teachesGrades:["N/A"],teachesSubjects:["N/A"]
    }),
    new Teacher({
        name:"Mr.Franklyn", hair:"bald",teachesGrades:["N/A"],teachesSubjects:["N/A"]
    }),
    new Teacher({
        name:"Ms.Baumgarten", hair:"black",teachesGrades:["N/A"],teachesSubjects:["N/A"]
    }),
    new Teacher({
        name:"Mr.Kodila",hair:"black",teachesGrades:[10,12],teachesSubjects:["English"]
    }),
    new Teacher({
        name:"Mr.Hines",hair:"black",teachesGrades:[11,12],teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Mr.Simpson",hair:"bald",teachesGrades:[12],teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Mr.Stivers",hair:"brown",teachesGrades:[9,12],teachesSubjects:["Science","Research"]
    }),
    new Teacher({
        name:"Mr.Robinson",hair:"brown",teachesGrades:[10,12],teachesSubjects:["Art"]
    }),
    new Teacher({
        name:"Mr.Haiber",hair:"black",teachesGrades:[11,12],teachesSubjects:["Science","Research"]
    }),
    new Teacher({
        name:"Ms.Eichel",hair:"brown",teachesGrades:[12],teachesSubjects:["History"]
    }),
    new Teacher({
        name:"Ms.Preissel",hair:"brown",teachesGrades:[12],teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Ms.Sasson",hair:"black",teachesGrades:[9,12],teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Coach Friedman",hair:"bald",teachesGrades:[9,10,11,12],teachesSubjects:["Gym"]
    }),
    new Teacher({
        name:"Coach Zhu", hair:"black",teachesGrades:[9,10,11,12], teachesSubjects:["Gym"]
    }),
    new Teacher({
        name:"Coach McCarthy", hair:"bald",teachesGrades:[9,10,11,12], teachesSubjects:["Gym"]
    }),
    new Teacher({
        name:"Ms.Barclay", hair:"brown",teachesGrades:[10],teachesSubjects:["Research"]
    }),
    new Teacher({
        name:"Ms.Beato", hair:"black",teachesGrades:[10,11],teachesSubjects:["Language"]
    }),
    new Teacher({
        name:"Ms.Budhraja", hair:"black", teachesGrades:[9,10], teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Ms.Davidson", hair:"black", teachesGrades:[9,12], teachesSubjects:["Art"]
    }),
    new Teacher({
        name:"Ms.Greenman", hair:"black", teachesGrades:[11], teachesSubjects:["English"]
    }),
    new Teacher({
        name:"Mr.Hamilton", hair:"bald", teachesGrades:[11,12],teachesSubjects:["History"]
    }),
    new Teacher({
        name:"Ms.Joslin", hair:"blonde", teachesGrades:[9], teachesSubjects:["Research"]
    }),
    new Teacher({
        name:"Ms.Kalick", hair:"brown", teachesGrades:[10], teachesSubjects:["History", "English"]
    }),
    new Teacher({
        name:"Ms.Male", hair:"black", teachesGrades:[11,12], teachesSubjects:["History"]
    }),
    new Teacher({
        name:"Mr.Michaelson", hair:"gray", teachesGrades:[10], teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Mr.Petrone", hair:"bald", teachesGrades:[10], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Mr.Pontillo", hair:"gray", teachesGrades:[10], teachesSubjects:["History", "English"]
    }),    
    new Teacher({
        name:"Ms.Fletcher", hair:"gray", teachesGrades:[10,11], teachesSubjects:["Language"]
    }),
    new Teacher({
        name:"Mr.Quizon", hair:"black", teachesGrades:[11,12], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Dr.Rippeteau", hair:"blonde", teachesGrades:[9], teachesSubjects:["English", "History"]
    }),
    new Teacher({
        name:"Mr.Scott", hair:"bald", teachesGrades:[11], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Syetta", hair:"black", teachesGrades:[12], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Thompson", hair:"brown", teachesGrades:[9,10], teachesSubjects:["Spanish"]
    }),
    new Teacher({
        name:"Ms.Wen", hair:"black", teachesGrades:[10,11], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Williams", hair:"blonde", teachesGrades:[10], teachesSubjects:["Research"]
    }),
    new Teacher({
        name:"Mr.Smith", hair:"red", teachesGrades:[11], teachesSubjects:["Research"]
    }),
    new Teacher({
        name:"Mr.Wallin", hair:"grey", teachesGrades:[11,12], teachesSubjects:["Language"]
    }),
    new Teacher({
        name:"Ms.Wentz", hair:"grey", teachesGrades:[11,12], teachesSubjects:["English"]
    }),
    new Teacher({
        name:"Ms.Goldsmith", hair:'black', teachesGrades:[9,10], teachesSubjects:["Language"]
    }),
    new Teacher({
        name:"Ms.Hochstatter", hair:"brown", teachesGrades:[11], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Klein", hair:"brown", teachesGrades:[10,11], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Murdock", hair:"brown", teachesGrades:[11,12], teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Ms.Bendon", hair:"brown", teachesGrades:[9,10], teachesSubjects:["Math"]
    }),
    // new Teacher({
    //     name:"Ms.O'Neal", hair:"black", teachesGrades:[9,10], teachesSubjects:["Math"]
    // }),
    new Teacher({
        name:"Mr.Pollard", hair:"brown", teachesGrades:[9], teachesSubjects:["Research"]
    }),
    new Teacher({
        name:"Ms.Sulthana", hair:"black", teachesGrades:[10], teachesSubjects:["English", "History"]
    }),
    new Teacher({
        name:"Ms.Valencia", hair:"brown", teachesGrades:[11,12], teachesSubjects:["Language"]
    }),
    new Teacher({
        name:"Ms.Baerga", hair:"black", teachesGrades:[11], teachesSubjects:["Science", "Research"]
    }),
    new Teacher({
        name:"Mr.Blair", hair:"brown", teachesGrades:[11], teachesSubjects:["English"]
    }),
    new Teacher({
        name:"Ms.Cornibe", hair:"brown", teachesGrades:[11,12], teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Ms.Middleton", hair:"black", teachesGrades: [9], teachesSubjects:[""]
    }),
    new Teacher({
        name:"Ms.Moverman", hair:"brown", teachesGrades:[11], teachesSubjects:["History"]
    }),
    new Teacher({
        name:"Mr.Post", hair:"", teachesGrades:[9], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Roberts", hair:"blonde", teachesGrades:[9], teachesSubjects:["English","History"]
    }),
    new Teacher({
        name:"Mr.Wachter", hair:"black", teachesGrades:[10], teachesSubjects:["Science"]
    }),
    new Teacher({
        name:"Ms.Bennet", hair:"black", teachesGrades:[9], teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Ms.McBrien", hair:"red", teachesGrades:[12], teachesSubjects:["English"]
    })
]