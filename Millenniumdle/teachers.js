
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
        name:"Mr.Stivers",hair:"black",teachesGrades:[9,12],teachesSubjects:["Science","Research"]
    }),
    new Teacher({
        name:"Mr.Robinson",hair:"gray",teachesGrades:[10,12],teachesSubjects:["Art"]
    }),
    new Teacher({
        name:"Mr.Haiber",hair:"black",teachesGrades:[11,12],teachesSubjects:["Science","Research"]
    }),
    new Teacher({
        name:"Ms.Eichel",hair:"black",teachesGrades:[12],teachesSubjects:["Misc"]
    }),
    new Teacher({
        name:"Ms.Preissel",hair:"red",teachesGrades:[12],teachesSubjects:["Math"]
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
        name:"Ms.Joslin", hair:"brown", teachesGrades:[9], teachesSubjects:["Research"]
    }),
    new Teacher({
        name:"Ms.Kalick", hair:"brown", teachesGrades:[10], teachesSubjects:["History", "English"]
    }),
    new Teacher({
        name:"Ms.Male", hair:"black", teachesGrades:[11,12], teachesSubjects:["History"]
    }),
    new Teacher({
        name:"Mr.McDonough", hair:"brown", teachesGrades:[10], teachesSubjects:["Math"]
    }),
    new Teacher({
        name:"Mr.Michealson", hair:"gray", teachesGrades:[10], teachesSubjects:["Math"]
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
    })
//     new Teacher({
//         name:"Mr.Arvai"
//     }),
//     new Teacher({
//         name:"Ms.Baerga"
//     }),
//     new Teacher({
//         name:"Ms.Bendon"
//     }),
//     new Teacher({
//         name:"Ms.Bennett"
//     }),
//     new Teacher({
//         name:"Mr.Blair"
//     }),
//     new Teacher({
//         name:"Ms.Bognar"
//     }),
//     new Teacher({
//         name:"Ms.Castronovo"
//     }),
//     new Teacher({
//         name:"Ms.Cornibe"
//     }),
//     new Teacher({
//         name:"Mr.Deegan"
//     }),
//     new Teacher({
//         name:"Ms.Duffy"
//     }),
//     new Teacher({
//         name:"Ms.Feirsen"
//     }),
//     new Teacher({
//         name:"Ms.Fortier"
//     }),
//     new Teacher({
//         name:"Ms.Goldsmith"
//     }),
//     new Teacher({
//         name:"Ms.Hochstatter"
//     }),
//     new Teacher({
//         name:"Ms.Klein"
//     }),
//     new Teacher({
//         name:"Ms.McBrien"
//     }),
//     new Teacher({
//         name:"Ms.Middleton"
//     }),
//     new Teacher({
//         name:"Ms.Moverman"
//     }),
//     new Teacher({
//         name:"Ms.Murdock"
//     }),
//     new Teacher({
//         name:"Ms.O'Neal"
//     }),
//     new Teacher({
//         name:"Mr.Pollard"
//     }),
//     new Teacher({
//         name:"Mr.Post"
//     }),
//     new Teacher({
//         name:"Ms.Roberts"
//     }),
//     new Teacher({
//         name:"Ms.Scrivner"
//     }),
//     new Teacher({
//         name:"Mr.Smith"
//     }),
//     new Teacher({
//         name:"Ms.Sulthana"
//     }),
//     new Teacher({
//         name:"Ms.Tannis"
//     }),
//     new Teacher({
//         name:"Ms.Valencia"
//     }),
//     new Teacher({
//         name:"Mr.Wachter"
//     }),
//     new Teacher({
//         name:"Mr.Wallin"
//     }),
//     new Teacher({
//         name:"Ms.Wentz"
//     })



]