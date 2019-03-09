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
        cor: 0,
        img: "./assets/images/jim.jpg"
    }
]

var curr;
var wins = 0;
var loss = 0;
var ct = 15;

$("#play").on("click", function () {
    $("#play").hide();
    nextQ();


});

// timer for 15 seconds
function nextQ() {
    // randomize question
    curr = arr[Math.floor(Math.random() * arr.length)];
    // Add current questions
    $("#que").empty().append("<h2>" + curr.que)
    // add the different answers
    for (var i = 0; i < curr.ans.length; i++) {
        // add cor class to the correct answer
        if (curr.ans[i] === curr.ans[curr.cor]) {
            $("#ques").append("<li class='cor'>" + curr.ans[i])

            // add wrg class to other elements
        } else {
            $("#ques").append("<li class='wrg'>" + curr.ans[i])
        }

    }



    // setTimeout(function () {
    //     $("#ques").empty();
    //     timeUp();
    // }, 1000 * 3);

}



function timeUp() {
    // move to solution
    // sit for 4 seconds move to next question
    $("#que").empty().append("<h2>The correct answer was: " + curr.ans[curr.cor]);
    $("#img").empty().show().append("<img src=" + curr.img + ">");
    setTimeout(function () {
        nextQ();
    }, 1000 * 3);
}

// ** display **

// $(".cor").click(function () {
//     // e.preventDefault();
//     wins++;
//     setTimeout(() => {
//         nextQ();

//     }, 1000 * 3);
// });

$(".cor").on("click", function () {

    alert("you clicked it")
    $("#que").empty().append("You got it!")
    wins++;
    setTimeout(() => {
        nextQ();

    }, 1000 * 3);
})

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