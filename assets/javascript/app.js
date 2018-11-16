var quiz = $("#quiz-area");
var timerStart = 30;


//need to make click events

$(document).on("click", "#start-over", function(e){
    Gamepad.reset();
});

$(document).on("click", "#answer-button", function(e){
    Gamepad.clicked(e);
});



//questions

var questions = [{
    question: "What year did the Chicago Cubs most recently win the World Series?",
    answers:["2010", "1997", "2016", "1978"],
    correctAnswer: "2016",
    image:""
}, {
    question: "Which of these former Indiana Hoosier basketball players is NOT on an NBA roster?",
    answers:["Cody Zeller", "Victor Oladipo", "James Blackmon Jr", "O.G. Anunoby"],
    correctAnswer: "James Blackmon Jr",
    image:""
},{
    question: "Which one of these cities is not in the United States?",
    answers:["Chicago", "Tulsa", "Florence", "Tampa Bay"],
    correctAnswer: "Florence",
    image:""
}, {
    question: "Which team won the most NBA titles in the 90s?",
    answers: ["Portland Trail Blazers", "Chicago Bulls", "New York Knicks", "Brooklyn Nets"],
    correctAnswer: "Chicago Bulls",
    image:""
},{
    question: "Which of these school is NOT in the Big Ten Conference?",
    answers: ["Indiana University", "Northwestern University", "University of Kentucky", "University of Michigan"],
    correctAnswer: "University of Kentucky",
    image:""
},{
    question: "Which artist sings the song Sexy Back?",
    answers: ["Justin Timberlake", "Drake", "Cardi B", "Adam Levine"],
    correctAnswer: "Justin Timberlake",
    image:"",
},{
    question: 'Which popular Disney movie featured the song, "Circle of Life"?',
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King",
    image:"assets/images/lionking.gif"
},{
    question: "Which one of these actors plays BatMan in the Dark Knight Series?",
    answers: ["Tom Cruise", "Chris Hemsworth", "Christian Bale", "Robert Downey Jr"],
    correctAnswer: "Christain Bale",
    image: ""
}]

