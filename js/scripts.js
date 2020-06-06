$(document).ready(function(){
  $("#one").click(function() {
  
    option.firstQuestionInputted();
    $("#form-group1").hide();
    $("#test1").hide();
    $("#one").hide();
    option.secondQuestionFadeOn()

});

$("#two").click(function() {
  
  option.secondQuestionInputted();
  $("#form-group2").hide();
  $("#test2").hide();
  $("#test3").show();
  $("#two").hide();

  
  option.thirdQuestionFadeOn();

});

$("#three").click(function() {
  $("#form-group3").hide();
  $("#test3").hide();
  $("#test4").show();
  $("#three").hide();
  option.thirdQuestionInputted();
  option.fourthQuestionFadeOn();
});

$("#four").click(function() {
 
  option.fourthQuestionInputted();
});

  $("#submit").click(function() {
    option.selections();
    
    

  });
    option.firstQuestionInputted();
    console.log(option.firstQuestionInputted())
    $("#test1").append(option.text1())
    $("#test2").append(option.text2())
    $("#test3").append(option.text3())
    $("#test4").append(option.text4())
    
    console.log(option.text1())
    console.log(option.splitFirstQuestion)

    $("#firstQuestion0").delay(0).fadeIn(200)
    $("#firstQuestion1").delay(200).fadeIn(200)
    $("#firstQuestion2").delay(600).fadeIn(200)
    $("#firstQuestion3").delay(800).fadeIn(200)
    $("#firstQuestion4").delay(1000).fadeIn(200)

    $("#form-group1").delay(1100).fadeIn(200)
    $("#one").delay(1300).fadeIn(200)
   
  });
  
  Options.prototype.secondQuestionFadeOn = function(){
    $("#secondQuestion0").delay(0).fadeIn(200)
    $("#secondQuestion1").delay(200).fadeIn(200)
    $("#secondQuestion2").delay(600).fadeIn(200)
    $("#secondQuestion3").delay(800).fadeIn(200)
    $("#secondQuestion4").delay(1000).fadeIn(200)
  
    $("#form-group2").delay(1100).fadeIn(200)
    $("#two").delay(1300).fadeIn(200)
  
  }
  
Options.prototype.thirdQuestionFadeOn = function(){
  $("#thirdQuestion0").delay(0).fadeIn(200)
  $("#thirdQuestion1").delay(200).fadeIn(200)
  $("#thirdQuestion2").delay(600).fadeIn(200)
  $("#thirdQuestion3").delay(800).fadeIn(200)
  $("#thirdQuestion4").delay(1000).fadeIn(200)

  $("#form-group3").delay(1100).fadeIn(200)
  $("#three").delay(1300).fadeIn(200)

}

Options.prototype.fourthQuestionFadeOn = function(){
  $("#fourthQuestion0").delay(0).fadeIn(200)
  $("#fourthQuestion1").delay(200).fadeIn(200)
  $("#fourthQuestion2").delay(600).fadeIn(200)
  $("#fourthQuestion3").delay(800).fadeIn(200)
  $("#fourthQuestion4").delay(1000).fadeIn(200)

  $("#form-group4").delay(1100).fadeIn(200)
  $("#four").delay(1300).fadeIn(200)

}







function Options(option1,option2,option3,option4, option5){
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.option5 = option5;
    this.counterTotal = 0;
  }
 
 
  Options.prototype.firstQuestionInputted = function(){
  
    this.option1 = parseInt($("#beverage").val())
  
  console.log(this.option1)
}
  

Options.prototype.secondQuestionInputted = function(){
  
  this.option2 = parseInt($("#movie").val())

console.log(this.option2)
}


Options.prototype.thirdQuestionInputted = function(){
  
  this.option3 = parseInt($("#animal").val())

console.log(this.option3)
}

Options.prototype.fourthQuestionInputted = function(){
  
  this.option4 = parseInt($("#color").val())

console.log(this.option4)
}



  var option = new Options()
  

  Options.prototype.text1 = function(){
        const question = "what is your favorite beverage?"
        const splitFirstQuestion = question.split(" ")
        console.log(splitFirstQuestion)
        this.question1 ="";
        
        for (i=0; i < splitFirstQuestion.length; i++){
        this.question1 += "<span id='firstQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp" ;
            }
              return this.question1
              
        } 
        
        
        Options.prototype.text2 = function(){
          const question = "what is your favorite movie?"
          const splitFirstQuestion = question.split(" ")
          console.log(splitFirstQuestion)
          this.question2 ="";
          
          for (i=0; i < splitFirstQuestion.length; i++){
          this.question2 += "<span id='secondQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp" ;
              }
                return this.question2
                
          } 


          Options.prototype.text3 = function(){
            const question = "what is your favorite animal?"
            const splitFirstQuestion = question.split(" ")
            console.log(splitFirstQuestion)
            this.question3 ="";
            
            for (i=0; i < splitFirstQuestion.length; i++){
            this.question3 += "<span id='thirdQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp" ;
                }
                  return this.question3
                  
            } 


            Options.prototype.text4 = function(){
              const question = "what is your favorite color?"
              const splitFirstQuestion = question.split(" ")
              console.log(splitFirstQuestion)
              this.question4 ="";
              
              for (i=0; i < splitFirstQuestion.length; i++){
              this.question4 += "<span id='fourthQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp" ;
                  }
                    return this.question4
                    
              } 
        
          
        
    
        
    
   
  
 
  Options.prototype.selections= function(){
    
    this.option1 = parseInt($("#beverage").val())
    this.option2 = parseInt($("#movie").val())
    this.option3 = parseInt($("#animal").val())
    this.option4 = parseInt($("#color").val())
    this.option5 = parseInt($("#music").val())     
  
  this.counterTotal = this.option1 + this.option2 + this.option3 + this.option4;
  
  if(this.counterTotal <= 5){
    $("#results").text("your language is C#")
  }else if(this.counterTotal > 5 && this.counterTotal <=10){
    $("#results").text("your language is JavaScript")
  }else if(this.counterTotal > 10 && this.counterTotal <=15){
    $("#results").text("your language is Python")
  }else if(this.counterTotal > 15 && this.counterTotal <=20){
    $("#results").text("your language is Ruby")
  }else{
    $("#results").text("please choose one of each option")
    }
  
    console.log(this.counterTotal)
  
  }
  

      
        
    

    

