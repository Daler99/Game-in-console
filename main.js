// Console Game

(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestion = function(){
        console.log(this.question)
    
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ":" +
                this.answers[i])
        }
    };
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        if(ans === this.correct){
            console.log("Correct answer!");
            sc = callback(true);
        }else{
            console.log('Wrong answer! Try Again:)');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('___________________________________________')
    }
    
    var q1 = new Question('Who is the best football player?',
        ['C.Ronaldo', 'L.Messi'],
        0);
    
    var q2 = new Question('Who is the world\'s richest man now?',
        ['I. Mack', 'J.Bezzos','J, Ma'],
        2);
    
    var q3 = new Question('which programming language is famous in 2020?',
        ['C++','Java','JavaScript','Python'],
        2);
        
    var questions = [q1,q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();



    function nextQuestion(){
        
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
          
        var answer = prompt('Please choose the answer');
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer),keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();
