$(document).ready(function(){
    
  $("#submit").click(function() {
    option.selections();
 
});
    
    $("#test").append(option.text())
    console.log(option.text())
    console.log(option.splitFirstQuestion)

    $("#firstQuestion0").delay(0).fadeIn(200)
    $("#firstQuestion1").delay(200).fadeIn(200)
    $("#firstQuestion2").delay(600).fadeIn(200)
    $("#firstQuestion3").delay(800).fadeIn(200)
    $("#firstQuestion4").delay(1000).fadeIn(200)

    $("#beverage").delay(1100).fadeIn(200)
  });












function Options(option1,option2,option3,option4, option5){
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.option5 = option5;
    this.counterTotal = 0;
  }
 
  


  var option = new Options()
  

  Options.prototype.text = function(){
        const question = "what is your favorite beverage?"
        
    
      const splitFirstQuestion = question.split(" ")
      console.log(splitFirstQuestion)
    
   this.question1 ="";
   
     for (i=0; i < splitFirstQuestion.length; i++){
       
      this.question1 += "<span id='firstQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp" ;
    
   }
    return this.question1
    
  }       
   
  
 
  Options.prototype.selections= function(){
    
    this.option1 = parseInt($("#beverage").val())
    this.option2 = parseInt($("#movie").val())
    this.option3 = parseInt($("#animal").val())
    this.option4 = parseInt($("#color").val())
    this.option5 = parseInt($("#music").val())     
  
  this.counterTotal = this.option1 + this.option2 + this.option3 + this.option4 + this.option5;
  
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
  }
  

      
        
    

    

