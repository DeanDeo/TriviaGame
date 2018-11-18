var quiz = $("#quiz-area");
var countStartNumber = 30;


//need to make click events

$(document).on('click', '#start-over', function(e) {
    game.reset();
  });
  
  $(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
  });
  
  $(document).on('click', '#start', function(e) {
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    game.loadQuestion();
  });



//questions

var questions = [{
    question: "What team did the Chicago Cubs beat when they won the 2016 World Series?",
    answers:["Chicago White Sox", "Los Angeles Angels", "Texas Rangers", "Cleveland Indians"],
    correctAnswer: "Cleveland Indians",
    image:"assets/images/cubs.gif"
}, {
    question: "Which of these former Indiana Hoosier basketball players is NOT on an NBA roster?",
    answers:["Cody Zeller", "Victor Oladipo", "James Blackmon Jr", "O.G. Anunoby"],
    correctAnswer: "James Blackmon Jr",
    image:"assets/images/jbj.jpeg"
},{
    question: "Which one of these cities is not in the United States?",
    answers:["Chicago", "Tulsa", "Florence", "Tampa Bay"],
    correctAnswer: "Florence",
    image:"assets/images/florence.jpg"
}, {
    question: "Which team won the most NBA titles in the 90s?",
    answers: ["Portland Trail Blazers", "Chicago Bulls", "New York Knicks", "Brooklyn Nets"],
    correctAnswer: "Chicago Bulls",
    image:"assets/images/mj.gif"
},{
    question: "Which of these school is NOT in the Big Ten Conference?",
    answers: ["Indiana University", "Northwestern University", "University of Kentucky", "University of Michigan"],
    correctAnswer: "University of Kentucky",
    image:"assets/images/kentucky.png"
},{
    question: "Which artist sings the song Sexy Back?",
    answers: ["Justin Timberlake", "Drake", "Cardi B", "Adam Levine"],
    correctAnswer: "Justin Timberlake",
    image:"assets/images/jt.gif",
},{
    question: 'Which popular Disney movie featured the song, "Circle of Life"?',
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King",
    image:"assets/images/lionking.gif"
},{
    question: "Which one of these actors plays Batman in the Dark Knight Series?",
    answers: ["Tom Cruise", "Chris Hemsworth", "Christian Bale", "Robert Downey Jr"],
    correctAnswer: "Christian Bale",
    image: "assets/images/bale.jpg"
    
}];



var game = {
    questions:questions,
    currentQuestion:0,
    counter:countStartNumber,
    correct:0,
    incorrect:0,
    countdown: function(){
      game.counter--;
      $('#counter-number').html(game.counter);
  
      if (game.counter === 0){
        console.log('TIME UP');
        game.timeUp();
      }
    },
    loadQuestion: function(){
      timer = setInterval(game.countdown, 1000);
      quiz.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
      for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
        quiz.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
      }
    },
    nextQuestion: function(){
      game.counter = countStartNumber;
      $('#counter-number').html(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
    },
    timeUp: function (){
      clearInterval(timer);
      $('#counter-number').html(game.counter);
  
      quiz.html('<h2>Out of Time!</h2>');
      quiz.append('<h3>The Correct Answer is: ' + questions[this.currentQuestion].correctAnswer);
      quiz.append('<img src="' + questions[this.currentQuestion].image + '" />');
  
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 1000 * 3);
      } else {
        setTimeout(game.nextQuestion, 1000 * 3);
      }
    },
    results: function() {
      clearInterval(timer);
  
      quiz.html('<h2>Your Results</h2>');
      $('#counter-number').html(game.counter);
      quiz.append('<h3>Correct Answers: ' + game.correct + '</h3>');
      quiz.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
      quiz.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
      quiz.append('<br><button id="start-over">Start Over</button>');
    },
    clicked: function(e) {
      clearInterval(timer);
  
      if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
        this.answeredCorrectly();
      } else {
        this.answeredIncorrectly();
      }
    },
    answeredIncorrectly: function() {
      game.incorrect++;
      clearInterval(timer);
      quiz.html('<h2>Nope!</h2>');
      quiz.append('<h3>The Correct Answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
      quiz.append('<img src="' + questions[game.currentQuestion].image + '" />');
  
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 1000 * 3);
      } else {
        setTimeout(game.nextQuestion, 1000 * 3);
      }
    },
    answeredCorrectly: function(){
      clearInterval(timer);
      game.correct++;
      quiz.html('<h2>Correct!</h2>');
      quiz.append('<img src="' + questions[game.currentQuestion].image + '" />');
  
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 1000 * 3);
      } else {
        setTimeout(game.nextQuestion, 1000 *3 );
      }
    },
    reset: function(){
      this.currentQuestion = 0;
      this.counter = countStartNumber;
      this.correct = 0;
      this.incorrect = 0;
      this.loadQuestion();
    }
  };
        
    




