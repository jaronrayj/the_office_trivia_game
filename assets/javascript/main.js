// array of questions put into objects, along with the different possible answers and one option that says which answer is correct
// an image into the object also

//Trivia Link https://www.proprofs.com/quiz-school/quizshow.php?title=ultimate-the-office-trivia-challenge&q=1

var arr = [
    q1 = {
        que: "bears, beets, battlestar galactica?",
        ans: ["jim", "dwight", "andy", "michael"],
        cor: 0,
        img: "./assets/images/bbbg.gif"
    },
    q2 = {
        que: "In S1E1 'Pilot': Who started their first day at Dunder Mifflin Scranton?",
        ans: ["Jim Halpert", "Ryan Howard", "Michael Scott", "Dwight Schrute"],
        cor: 1,
        img: "./assets/images/bbbg.gif"
    },
    q3 = {
        que: "In S1E3 'Health Care': Which of these is NOT one of Jim and Pam's made up diseases?",
        ans: ["Killer nanorobots", "Hot dog fingers", "Spontaneous dental hydroplosion", "Hair cancer"],
        cor: 3,
        img: "./assets/images/bbbg.gif"
    },
    q4 = {
        que: "In S2E10 'Christmas Party': Who ends up with the Video iPod at the end of the episode?",
        ans: ["Dwight", "Pam", "Ryan", "Michael"],
        cor: 0,
        img: "./assets/images/bbbg.gif"
    },
    q5 = {
        que: "In S2E12 'The Injury': What is Michael's injury?",
        ans: ["He gets his head stuck in a stair railing", "He crashes his car into a telephone pole", "He's run over by a co-worker", "He burns his foot on a George Foreman Grill"],
        cor: 3,
        img: "./assets/images/bbbg.gif"
    },
    q6 = {
        que: "In S2E17 'Dwight 's Speech': What infamous dictator's speech does Jim trick Dwight into giving at the sales conference?",
        ans: ["Adolf Hitler", "Kim Jong II", "Joseph Stalin", "Benito Mussolini"],
        cor: 0,
        img: "./assets/images/bbbg.gif"
    },
    q7 = {
        que: "In S2E19 'Michael's Birthday': Who has a cancer scare?",
        ans: ["Angela", "Dwight", "Kevin", "Michael"],
        cor: 2,
        img: "./assets/images/bbbg.gif"
    },
    q8 = {
        que: "In S2E22 'Casino Night' Who has two dates?",
        ans: ["Michael", "Jim", "Pam", "Creed"],
        cor: 0,
        img: "./assets/images/bbbg.gif"
    },
    q9 = {
        que: "In S3E5 'Initiation' What song does Jim sing to annoy Karen?",
        ans: ["Lovefool by The Cardigans", "Kiss Me by Six Pence None the Richer", "Barbie Girl by Aqua", "Barbie Girl by Aqua"],
        cor: 0,
        img: "./assets/images/bbbg.gif"
    },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
    // q10 = {
    //     que: "que",
    //     ans: ["JimHalpert", "RyanHoward", "Michaelcott", "DwightSchrute"],
    //     cor: 1,
    //     img: "./assets/images/bbbg.gif"
    // },
]

var curr;
var wins = 0;
var loss = 0;
// var ct = 15;


// Start the game option!
$("#play").on("click", function () {
    $("#play").hide();
    nextQ();


});

// timer for 15 seconds
function nextQ() {
    // randomize question
    curr = arr[Math.floor(Math.random() * arr.length)];
    $("#img").hide();
    // Add current questions
    $("#que").empty().append("<h2>" + curr.que)
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
    setTimeout(function () {
        $("#ques").empty();
        timeUp();
    }, 1000 * 10);


}

// If choose a wrong option
$("#ques").on("click", ".wrg", function () {

    $("#que").empty().append("Sorry.... The correct answer was: " + curr.ans[cor])
    $("#ques").empty();
    loss++;
    nextQ();
})

// If choose correct option
$("#ques").on("click", ".cor", function () {

    $("#que").empty().append("You got it!")
    // $("#img").empty().show().append("<img src =" + curr.img + ">");
    $("#ques").empty();
    wins++;
    setTimeout(() => {
        nextQ();

    }, 1000 * 3);
})




// When countdown finishes
function timeUp() {
    // move to solution
    // sit for 4 seconds move to next question
    $("#que").empty().append("<h2>The correct answer was: " + curr.ans[curr.cor]);
    $("#img").empty().show().append("<img src=" + curr.img + ">");
    setTimeout(function () {
        nextQ();
    }, 1000 * 3);
}





// If wins and losses equal 10 start over option
if (wins + loss === 10) {

    // $(#displayQ.empty()
    $("#stats").empty().show().append("<h3>" + wins).append("<h3>" + losses)
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