let c = 0;
let md = 0;
let sy = 0;
let nge = 0;
let t2 = 0;
let cr = 0;

const quizData = [
    {
        question: "By the end of this quiz u will know FOR SURE what color best represents u!!!! I pinky pinky promise with a cherry on top!!!! XD",
        answers: [
            "Let's go!!!!"
        ],
        a: "Yellow (gross)",
        b: "Black (like my soul...)",
        c: "Pink (too preppy :P)",
        d: "Dogs!! lol",
        correct: "d"
    },
    {
        question: "Whats ur favorite color?",
        answers: [
            "Yellow (gross)",
            "Black (like my soul...)",
            "Pink (too preppy :P)",
            "Dogs!! lol"
        ],
        tally: [
            "sy",
            "nge",
            "2t",
            "md"
        ],
        a: "Yellow (gross)",
        b: "Black (like my soul...)",
        c: "Pink (too preppy :P)",
        d: "Dogs!! lol",
        correct: "d",
    },
    {
        question: "Whats ur zodiac sign??",
        answers: [
            "Aries",
            "Taurus",
            "Pisces",
            "Ophiuchus (if u know u know)",
            "Sagittarius",
            "Scorpio (ick!!)",
            "Libra (yayyyyy :D)",
            "Gemini",
            "Cancer",
            "Virgo",
            "Aquarius",
            "Leo :3",
            "Capricorn"
        ],
        actualSigns: [
            "n aries",
            " taurus",
            " pisces",
            "n ophiuchus",
            " sagittarius",
            " scorpio",
            " libra",
            " gemini",
            " cancer",
            " virgo",
            "n aquarius",
            " leo",
            " capricorn"
        ],
        tally: [
            "nge",
            "md",
            "cr",
            "sy",
            "2t",
            "c",
            "c",
            "sy",
            "nge",
            "nge",
            "2t",
            "cr",
            "md"
        ],
        a: "Aries",
        b: "Taurus",
        c: "Ophiucus (if u know u know)",
        d: "Sagittarius",
        correct: "a",
        signQuestion: "yeah",
    },
    {
        question: "OK...what would u do if ur BEST FRIEND was about to get SHOVED INTO A LOCKER by ur worst enemy!!!!",
        answers: [
            "Destroy them!!!",
            "Forget",
            "Walk away...too scary...",
            "Shove ur friend into the locker first!!",
            "Try and distract ur enemy wit hthe power of DANCE!!"
        ],
        tally: [
            "md",
            "sy",
            "cr",
            "nge",
            "2t"
        ],
        a: "please",
        b: "please",
        c: "no",
        d: "please",
        correct: "c"
    },
    {
        question: "That is such a you thing to say",
        answers: [
            "Thanks! I know",
            "Um, no it's not?",
            "This isn't a question"
        ],
        tally: [
            "cr",
            "2t",
            "c"
        ],
        a: "Teeth",
        b: "Sand",
        c: "Ochre",
        d: "Chimichurri",
        correct: "d",
        signQuestion2: "yeah"
    },
    {
        question: "zOMG! I got distracted...How about...<br>Who does Katrina have a crush on??",
        answers: [
            "Ben Harrison",
            "Ben Harrison",
            "Ben Harrison",
            "Ben Harrison"
        ],
        correct: "d",
    },
    {
        question: "lol u know it. She's gonna be SO mad when she sees this!!! XD",
        answers: [
            "That's not very nice",
            "That's pretty cool",
            "What?"
        ],
        tally: [
            "2t",
            "sy",
            "c"
        ],
        correct: "d",
    },
    {
        question: "She TOTALLY deserves it!!!! She knew that I had a crush on Ben Harrison, but then SHE asked him out first!!!",
        answers: [
            "That's not very nice",
            "That's pretty cool",
            "What?"
        ],
        tally: [
            "cr",
            "sy",
            "c"
        ],
        correct: "d",
    },
    {
        question: "lmaoooooo I keep getting distracted!!!! Time for the important questions",
        answers: [
            "Ok",
            "Ok",
            "What?"
        ],
        tally: [
            "md",
            "md",
            "c"
        ],
        correct: "d",
    },
    {
        question: "What is ur dream house??",
        answers: [
            "Big mansion with a giant library!!!",
            "Beach house so every weekend is a partayyy!",
            "The Hole",
            "A cabin in the woods for forever smores and stargazing!"
        ],
        tally: [
            "nge",
            "cr",
            "sy",
            "2t"
        ],
        houseanswers: [
            "ur library mansion",
            "ur beach house",
            "The Hole",
            "ur cabin in the woods"

        ],
        houseQuestion: "yeah",
        correct: "d",
        spooky: "yeah"
    },
    {
        question: "did you hear that sound",
        answers: [
            "",
            "",
            "",
            ""
        ],
        correct: "d",
        unspooky: "yeah"
    },
    {
        question: "ur at ur whatever the heck",
        answers: [
            "Hide!",
            "Look for a weapon!",
            "Answer it!!! Its obviously the man of ur dreams!!!!",
            "tell them to go away and put up ur middle finger at them"
        ],
        tally: [
            "cr",
            "nge",
            "2t",
            "sy"
        ],
        correct: "d",
        houseQuestion2: "yeah",
    },
    {
        question: "Its OBVIOUSLY the man of ur dreams!!! Don't u want to meet ur own Ben Harrison??",
        answers: [
            "zOMG of course!!",
            "Yes",
            "100% I do!!",
            "No!! XD jk of course I do!!"
        ],
        tally: [
            "md",
            "c",
            "nge",
            "2t"
        ],
        correct: "d"
    },
    {
        question: "Let's try again...there's a knock at the door!! What do you do!!",
        answers: [
            "Let in Ben Harrison",
            "Let in Ben Harrison",
            "Let in Ben Harrison",
            "Let in Ben Harrison"
        ],
        correct: "d"
    },
    {
        question: "Good choice!!",
        answers: [
            "Yes",
            "Yes (xtreme)"
        ],
        correct: "d"
    },
    {
        question: "What us ur ideal date?",
        answers: [
            "Longggggg walks in the woods",
            "Holding lots of hands...owo",
            "Dreaming Of Dying Stars",
            "Ice cream!!! Yessss!!!!"
        ],
        tally: [
            "2t",
            "nge",
            "sy",
            "md"
        ],
        dateanswers: [
            "I would go on long walks in the woods too.",
            "I would hold lots and lots of hands too...uwu<br>",
            "I would dream of dying stars too...wow...look at us...so edgy<br>",
            "I would have so much ice cream too!!! XD so randommmm<br>"
        ],
        dateQuestion: "yeah",
        correct: "d"
    },
    {
        question: "I would do that too.",
        answers: [
            "Totally!!!!!",
            "lol, ur too slow!!",
            "Katrina sucks!!!!"
        ],
        tally: [
            "cr",
            "sy",
            "2t"
        ],
        correct: "d"
    },
    {
        question: "What about this: you and your BEST FRIEND go to the library and find a SUPER COOL old book. Who should get to take it home and read it first?",
        answers: [
            "Me",
            "Me, totally!",
            "Definitely not Katrina"
        ],
        tally: [
            "c",
            "md",
            "nge"
        ],
        correct: "d"
    },
    {
        question: "Right??? She said it g ave her a headache, but I read the whole thing in one night. It made me feel like this",
        answers: [
            "Like what?"
        ],
        wavy: "yeah",
        correct: "d"
    },
    {
        question: "Whoaaaa!!!!!! So DIZZY *~* I got distracted again!",
        answers: [
            "Yes???",
            "Are u okay",
            "What did Katrina do next?"
        ],
        tally: [
            "cr",
            "nge",
            "c"
        ],
        correct: "d"
    },
    {
        question: "You can't distract me again!!! Back to important questions. What is ur favorite thing about Ben Harrison?",
        answers: [
            "His smile (so elusive...)",
            "His eyes (there are so many....o.O)",
            "The way he makes you laugh until you cry and cry and cry and cry and cry and",
            "His sensitive soul (you can hold it in the palm of your hand!!! Very prickly)"
        ],
        tally: [
            "2t",
            "cr",
            "sy",
            "nge"
        ],
        correct: "d"
    },
    {
        question: "When did you last see Katrina?",
        answers: [
            "Yesterday",
            "Last Week",
            "Last Year",
            "During The Ritual"
        ],
        correct: "d",
        spooky: "yeah"
    },
    {
        question: "she left",
        answers: [
            "",
            "",
            "",
            ""
        ],
        correct: "d",
        
    },
    {
        question: "If your friend asked out Ben Harrison, what would happen next?",
        answers: [
            ""
        ],
        correct: "d"
    },
    {
        question: "",
        answers: [
            "Reality Would Unfold",
            "A Many-Fingered Hand Would",
            "Emerge From The Spatial Rend",
            "Would Fold Itself Around",
            "Her Own Hand",
            "Gently As A Kiss",
            "She Stepped Across The",
            "Threshold",
            "Leaving You Alone",
            "With The Knowledge",
            "The Knowledge",
            "Alone",
            "Alone",
            "Alone",
            "Alone",
            "",
            "....maybe we'd kiss???? ///u_u///"
        ],
        correct: "d"
    },
    {
        question: "What will you do?",
        answers: [
            "Leave",
            "Stay",
        ],
        tally: [
            "nge",
            "cr",
        ],
        correct: "d",
        unspooky: "yeah"
    },
    {
        question: "lol, that is such a thing to say!!!!",
        answers: [
            "What will you do now?",
        ],
        correct: "d",
        
    },
    {
        question: "Okies!!!! I think I can tell u what color is ur favorite now :D",
        answers: [
            "What will you do now?",
            "What will you do now?",
        ],
        correct: "d",
        spooky: "yeah"
    },
    {
        question: "I'll survive",
        answers: [
            "Yes",
        ],
        correct: "d",
        unspooky: "yeah"
    },
    {
        question: "Thankies for taking my quiz!!!!!!! Share it with ur friends, dont be a hater!!!",
        answers: [
            "Thanks, u 2!",
            "This was so fun!!!!",
            "The Knowledge"
        ],
        correct: "d"
    },
    {
        question: "And if you see Katrina...",
        answers: [
            "Put ur middle finger up at her!!!!!",
        ],
        correct: "d"
    },
]

//quiz = document.getElementByID("quiz");
//answerElements = document.querySelectorAll("answer");
//questionElement = document.getElementById("question");
//submitButton = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;
let spookyActive = false;
let urColor = undefined;

function deselectAnswers() {
    document.getElementsByName("answer").forEach((answer) => { answer.checked = false });
}
function getSelected() {
    let normalanswer;
    const options = document.getElementsByName("answer");
    options.forEach((option) => {
        if (option.checked) {
            normalanswer = option.id;
        }
    })
    return normalanswer;
}

function incrementTally(theAnswer) {
    if (quizData[currentQuiz].tally) {
        if (quizData[currentQuiz].tally[theAnswer] == "c") {
            c += 1;
        }
        if (quizData[currentQuiz].tally[theAnswer] == "md") {
            md += 1;
        }
        if (quizData[currentQuiz].tally[theAnswer] == "sy") {
            sy += 1;
        }
        if (quizData[currentQuiz].tally[theAnswer] == "nge") {
            nge += 1;
        }
        if (quizData[currentQuiz].tally[theAnswer] == "2t") {
            t2 += 1;
        }
        if (quizData[currentQuiz].tally[theAnswer] == "cr") {
            cr += 1;
        }
    }
}

function tallyTotal() {
    let theScore = Math.max(c, md, sy, nge, t2, cr);
    if (theScore == c) {
        return "Cerulean";
    }
    if (theScore == md) {
        return "Microwave Darf";
    }
    if (theScore == sy) {
        return "Secret Yellow";
    }
    if (theScore == nge) {
        return "Neon Genesis Evangelion";
    }
    if (theScore == t2) {
        return "2 Tracksuits";
    }
    if (theScore == cr) {
        return "Crab Rangoon";
    }
}
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    document.getElementById("question").innerHTML = currentQuizData.question;
    let questionID = "a" + 1 + "-text";
    
    for (let i = 1; i <= 20; i++)
    {
        let questionTextID = ('a' + i + '-text');
        let questionID = ('a' + i);
        if (currentQuizData.answers[i - 1] != undefined) {
            document.getElementById(questionID).hidden = false;
            document.getElementById(questionTextID).hidden = false;
            document.getElementById(questionTextID).innerHTML = currentQuizData.answers[i - 1];
        }
        else {
            document.getElementById(questionID).hidden = true;
            document.getElementById(questionID).hidden = true;
            document.getElementById(questionTextID).hidden = true;
        }
    }
}


function adjustQuestion(i, adjustment) {
    quizData[i].question = adjustment;
}

function helpMe() {
    document.getElementById('a-text').innerHTML = "skill issue";
}

function submitButtonFunc() {
    answer = getSelected();

    incrementTally(parseInt(answer.substring(1)) - 1);

    if (answer) {
        if (quizData[currentQuiz].signQuestion === "yeah") {
            let theSign = parseInt(answer.substring(1)) - 1;
            adjustQuestion(4, "that is such a" + quizData[currentQuiz].actualSigns[theSign] + " thing to say.");
            adjustQuestion(26, "lol, that is such a" + quizData[currentQuiz].actualSigns[theSign] + " thing to say!!!!!");
        }
        if (quizData[currentQuiz].houseQuestion === "yeah") {
            let theHouse = parseInt(answer.substring(1)) - 1;
            adjustQuestion(11, "Ur at " + quizData[currentQuiz].houseanswers[theHouse] + " and there's a knock at the door!!! What do you do?");
        }
        if (quizData[currentQuiz].dateQuestion === "yeah") {
            let theDate = parseInt(answer.substring(1)) - 1;
            adjustQuestion(16, quizData[currentQuiz].dateanswers[theDate] + "It's soooooo unfair that Katrina asked out Ben Harrison first");
        }

        if (quizData[currentQuiz].wavy === "yeah") {
            document.getElementById("allofit").classList.add("getdizzywithit");
        }

        if (quizData[currentQuiz].unspooky === "yeah") {
            spookyActive = false;
            document.getElementById("allofit").classList.remove("bodyspooky");
            document.getElementById("allofit").classList.add("the-fucking-all-of-it");
            document.getElementById("quiz").classList.remove("quiz-container-spooky");
            document.getElementById("quiz").classList.add("quiz-container");
            document.getElementById("quizheader").classList.remove("quiz-header-spooky");
            document.getElementById("quizheader").classList.add("quiz-header");
            document.getElementById("siteheader").hidden = false;
            document.getElementById("sitefooter").hidden = false;
            document.getElementById("quiz-header-above").hidden = false;
            document.getElementById("clawimage").hidden = false;
        }

        if (quizData[currentQuiz].spooky === "yeah") {
            document.getElementById("allofit").classList.add("bodyspooky");
            document.getElementById("allofit").classList.remove("the-fucking-all-of-it");
            document.getElementById("quiz").classList.add("quiz-container-spooky");
            document.getElementById("quiz").classList.remove("quiz-container");
            document.getElementById("quizheader").classList.add("quiz-header-spooky");
            document.getElementById("quizheader").classList.remove("quiz-header");
            document.getElementById("siteheader").hidden = true;
            document.getElementById("sitefooter").hidden = true;
            document.getElementById("quiz-header-above").hidden = true;
            document.getElementById("clawimage").hidden = true;
        }
        
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) { loadQuiz(); }
        else {
            theResult = tallyTotal();
            if (score < 4) {
                document.getElementById("quizheader").innerHTML = `
                <h2> you answered ` + theResult + `/` + quizData.length + ` questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
            `;
            }
            else if (score === 4) {
                document.getElementById("quizheader").innerHTML = `
                <h2> you answered ` + score + `/` + quizData.length + ` questions correctly. Brag about it I guess lol</h2>
            <button onclick="history.go(0)">Play Again</button>
            `;
            }
        }
    }
}

//submitButton.addEventListener("click", submitButtonFunc());