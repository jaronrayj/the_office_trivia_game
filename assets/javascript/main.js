// array of questions put into objects, along with the different possible answers and one option that says which answer is correct
// an image into the object also

//Trivia Link https://www.proprofs.com/quiz-school/quizshow.php?title=ultimate-the-office-trivia-challenge&q=1

var arr = [
    q1 = {
        que: "bears, beets, battlestar galactica?",
        ans: ["jim", "dwight", "andy", "michael"],
        cor: 0,
        img: "https://media.giphy.com/media/4cuyucPeVWbNS/giphy.gif"
    },
    q2 = {
        que: "In S1E1 'Pilot': Who started their first day at Dunder Mifflin Scranton?",
        ans: ["Jim Halpert", "Ryan Howard", "Michael Scott", "Dwight Schrute"],
        cor: 1,
        img: "https://media.giphy.com/media/5wWf7GR2nhgamhRnEuA/giphy.gif"
    },
    q3 = {
        que: "In S1E3 'Health Care': Which of these is NOT one of Jim and Pam's made up diseases?",
        ans: ["Killer nanorobots", "Hot dog fingers", "Spontaneous dental hydroplosion", "Hair cancer"],
        cor: 3,
        img: ".https://media.giphy.com/media/5wWf7GW1AzV6pF3MaVW/giphy.gif"
    },
    q4 = {
        que: "In S2E10 'Christmas Party': Who ends up with the Video iPod at the end of the episode?",
        ans: ["Dwight", "Pam", "Ryan", "Michael"],
        cor: 0,
        img: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
    },
    q5 = {
        que: "In S2E12 'The Injury': What is Michael's injury?",
        ans: ["He gets his head stuck in a stair railing", "He crashes his car into a telephone pole", "He's run over by a co-worker", "He burns his foot on a George Foreman Grill"],
        cor: 3,
        img: "https://media.giphy.com/media/eKDp7xvUdbCrC/giphy.gif"
    },
    q6 = {
        que: "In S2E17 'Dwight 's Speech': What infamous dictator's speech does Jim trick Dwight into giving at the sales conference?",
        ans: ["Adolf Hitler", "Kim Jong II", "Joseph Stalin", "Benito Mussolini"],
        cor: 0,
        img: "https://media.giphy.com/media/12msOFU8oL1eww/giphy.gif"
    },
    q7 = {
        que: "In S2E19 'Michael's Birthday': Who has a cancer scare?",
        ans: ["Angela", "Dwight", "Kevin", "Michael"],
        cor: 2,
        img: "https://media.giphy.com/media/LKTTAzGboJGzC/giphy.gif"
    },
    q8 = {
        que: "In S2E22 'Casino Night' Who has two dates?",
        ans: ["Michael", "Jim", "Pam", "Creed"],
        cor: 0,
        img: "https://media.giphy.com/media/6cFcUiCG5eONW/giphy.gif"
    },
    q9 = {
        que: "In S3E5 'Initiation' What song does Jim sing to annoy Karen?",
        ans: ["Lovefool by The Cardigans", "Kiss Me by Six Pence None the Richer", "Barbie Girl by Aqua", "Barbie Girl by Aqua"],
        cor: 0,
        img: "https://media.giphy.com/media/3t7RAFhu75Wwg/giphy.gif"
    },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/1xkMucz3jc5AGB4elL/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/d10dMmzqCYqQ0/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/l3Ucl5pIqSaGa82T6/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/elPiadNl05XWg/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/dsKnRuALlWsZG/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/UjCXeFnYcI2R2/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/eEXxfHQJ0dWOrctI55/giphy.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "https://media.giphy.com/media/muGYyrWwxOOMo/giphy.gif"
    // },
]

var curr;
var wins = 0;
var loss = 0;
var time = 15;
var clockRunning = false;

function increment() {
    time--;
    $("#timer").text("Time: " + timeConverter(time));
};

function timeConverter(t) {
    if (t < 10) {
        t = "0" + t;
    }
    return t;
}

function stop() {
    clockRunning = false;
    clearInterval(intervalId);
};

function queText(text) {
    $("#que").empty().append(text)
}


function timeToNextQ(t) {
    $("#ques").empty();
    time = t;
    setTimeout(() => {
        nextQ()
    }, 1000 * t);

}

function stats() {
    $("#stats").empty().show().append("<h3>Correct: " + wins).append("<h3>Wrong: " + loss)
}


// Start the game option!
$("#play").on("click", function () {
    $("#play").hide();
    nextQ();

});

// timer for 15 t
function nextQ() {
    // randomize question
    $("#img").hide();
    curr = arr[Math.floor(Math.random() * arr.length)];
    time = 15;
    $("#timer").text("Time: " + timeConverter(time));
    if (!clockRunning) {
        intervalId = setInterval(increment, 1000);
        clockRunning = true;
    };

    // Add current questions
    queText("<h2>" + curr.que)
    // add the different answers
    for (var i = 0; i < curr.ans.length; i++) {
        // add cor class to the correct answer
        if (curr.ans[i] === curr.ans[curr.cor]) {
            $("#ques").append("<button class='cor list-group-item'>" + curr.ans[i])

            // add wrg class to other elements
        } else {
            $("#ques").append("<button class='wrg list-group-item'>" + curr.ans[i])
        }
    }
    setTimeout(() => {

        timeUp();
    }, 1000 * 15);
}

// If choose a wrong option
$("#ques").on("click", ".wrg", function () {
    queText("Sorry.... The correct answer was: " + curr.ans[curr.cor])
    $("#img").empty().show().append("<img src =" + curr.img + ">");
    loss++;
    stats();
    timeToNextQ(4);
})

// If choose correct option
$("#ques").on("click", ".cor", function () {
    queText("You got it!")
    $("#img").empty().show().append("<img src =" + curr.img + ">");
    wins++;
    stats();
    timeToNextQ(4);
})




// When countdown finishes
function timeUp() {
    // move to solution
    // sit for 4 t move to next question
    queText("<h2>The correct answer was: " + curr.ans[curr.cor]);
    $("#img").empty().show().append("<img src =" + curr.img + ">");
    timeToNextQ(4);

}



// If wins and loss equal 10 start over option
if (wins + loss === 10) {

    // $(#displayQ.empty()
    stats();
    $("#play").empty().text("Play Again?").on("click", function () {
        $("#stats").hide();
        wins = 0;
        loss = 0;
        nextQ();
    });
}


// function reset(){

// wins = 0
// loss = 0

//         nextQ();