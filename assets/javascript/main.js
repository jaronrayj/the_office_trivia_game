// array of questions put into objects, along with the different possible answers and one option that says which answer is correct
// an image into the object also

//Trivia Link https://www.proprofs.com/quiz-school/quizshow.php?title=ultimate-the-office-trivia-challenge&q=1

var arr = [
    q1 = {
        que: "bears, beets, battlestar galactica?",
        ans: ["jim", "dwight", "andy", "michael"],
        cor: 0,
        img: "./assets/images/jim.jpg"
    },
    q2 = {
        que: "bears, beets, battlestar galactica?",
        ans: ["jim", "dwight", "andy", "michael"],
        cor: 3,
        img: "./assets/images/jim.jpg"
    }
]

var curr;
var wins = 0;
var loss = 0;
var ct = 15;

function rdm() {
    // randomly pull the questions out of the length of the array
    random = Math.floor(Math.random() * arr.length);
    curr = arr[random];
}

rdm();
// timer for 15 seconds
setTimeout(function () {
    timeUp();
}, 15000);


function timeup() {
    // move to solution
    // sit for 4 seconds move to next question
    $("#que").empty().append("The correct answer was: " + curr.ans[cor]);
    $("#img").empty().show().append("<img src=" + curr.img + ">");
}

// ** display **

//     function nextQ() {
//         #timer = 15
//         for (i < arr.que.length) {
//             $("#que").empty().append("<h2>" + curr.que)
//             $("#ques").empty().append("li").addClass("wrg").text(curr.que[i])
//             maybe...$("#ques").children(curr.cor).removeClass("wrg").addClass("cor")
//         }

//     }

// $("#cor").on("click", function {

//     $("#que").empty().append("You got it!")
//     wins++;
//     nextQ();
// })

// $("#wrg").on("click", function {

//     $("#que").empty().append("Sorry.... The correct answer was: " + curr.ans[cor])
//     loss++;
//     nextQ();
// })

// if (wins + losses === 10) {

//     $#displayQ.empty()
//     $stats.empty().append(<h3>+wins).append(<h3>+losses)
//     restart button play again?
//     }

// function reset(){

// wins = 0
// loss = 0

//         nextQ();

// }