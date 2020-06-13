function Options(option1, option2, option3, option4, option5, optionTotal, language, grandTotal) {
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.option5 = option5;
  this.optionTotal = optionTotal;
  this.grandTotal = grandTotal;
  this.language = language;
}
 
const option = new Options();

Options.prototype.text1 = function () {
  const question = "what is your favorite beverage?"
  const splitFirstQuestion = question.split(" ")
  this.question1 = "";

  for (i = 0; i < splitFirstQuestion.length; i++) {
    this.question1 += "<span id='firstQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp";
  }
    return this.question1
}

Options.prototype.text2 = function () {
  const question = "what is your favorite movie?"
  const splitFirstQuestion = question.split(" ")
  this.question2 = "";

  for (i = 0; i < splitFirstQuestion.length; i++) {
    this.question2 += "<span id='secondQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp";
  }
    return this.question2
}

Options.prototype.text3 = function () {
  const question = "what is your favorite animal?"
  const splitFirstQuestion = question.split(" ")
  this.question3 = "";

  for (i = 0; i < splitFirstQuestion.length; i++) {
    this.question3 += "<span id='thirdQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp";
  }
    return this.question3
}

Options.prototype.text4 = function () {
  const question = "what is your favorite color?"
  const splitFirstQuestion = question.split(" ")
  this.question4 = "";

  for (i = 0; i < splitFirstQuestion.length; i++) {
    this.question4 += "<span id='fourthQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp";
  }
    return this.question4
}

Options.prototype.text5 = function () {
  const question = "what is your favorite music?"
  const splitFirstQuestion = question.split(" ")
  this.question5 = "";

  for (i = 0; i < splitFirstQuestion.length; i++) {
    this.question5 += "<span id='fifthQuestion" + i + "'>" + splitFirstQuestion[i] + "</span>" + "&nbsp";
  }
    return this.question5
}

Options.prototype.selections = function () {
  if (option.grandTotal <= 5) {
      option.language ="your language is C#!"          
    } else if (option.grandTotal > 5 && option.grandTotal <= 10) {
      option.language ="your language is JavaScript!"     
    } else if (option.grandTotal > 10 && option.grandTotal <= 15) {
      option.language ="your language is Python!"    
    } else if (option.grandTotal > 15 && option.grandTotal <= 20) {
      option.language ="your language is Ruby!"   
    } else {
      option.language ="please choose one of each option"
    }
      return option.language
}

$(document).ready(function () {
  $("#form1-go-back").click(function () {
    $("#first-form").show();
    $("#form-group1").show();
    $("#question1").show();
    $("#one").show();
    $("#form1-go-back").hide()
    $("#warning").hide()
  });
  
  $("#one").click(function () {
    option.optionTotal = parseInt($("#beverage").val())
    $("#first-form").hide();
    $("#form-group1").hide();
    $("#question1").hide();
    $("#question2").show();
    $("#one").hide();
    $("#secondQuestion0").delay(0).fadeIn(200)
    $("#secondQuestion1").delay(200).fadeIn(200)
    $("#secondQuestion2").delay(600).fadeIn(200)
    $("#secondQuestion3").delay(800).fadeIn(200)
    $("#secondQuestion4").delay(1000).fadeIn(200)
    $("#form-group2").delay(1100).fadeIn(200)
    $("#two").delay(1300).fadeIn(200)
  });

  $("#two").click(function () {
    $("#second-form").hide();
    $("#form-group2").hide();
    $("#question2").hide();
    $("#question3").show();
    $("#two").hide();
    $("#thirdQuestion0").delay(0).fadeIn(200)
    $("#thirdQuestion1").delay(200).fadeIn(200)
    $("#thirdQuestion2").delay(600).fadeIn(200)
    $("#thirdQuestion3").delay(800).fadeIn(200)
    $("#thirdQuestion4").delay(1000).fadeIn(200)
    $("#form-group3").delay(1100).fadeIn(200)
    $("#three").delay(1300).fadeIn(200)
    option.optionTotal += parseInt($("#movie").val())
    
  });

  $("#three").click(function () {
    $("#third-form").hide();
    $("#form-group3").hide();
    $("#question3").hide();
    $("#question4").show();
    $("#three").hide();
    $("#fourthQuestion0").delay(0).fadeIn(200)
    $("#fourthQuestion1").delay(200).fadeIn(200)
    $("#fourthQuestion2").delay(600).fadeIn(200)
    $("#fourthQuestion3").delay(800).fadeIn(200)
    $("#fourthQuestion4").delay(1000).fadeIn(200)
    $("#form-group4").delay(1100).fadeIn(200)
    $("#four").delay(1300).fadeIn(200)
    option.optionTotal += parseInt($("#animal").val())
    
  });

  $("#four").click(function () {
    $("#fourth-form").hide();
    $("#form-group4").hide();
    $("#question4").hide();
    $("#question5").show();
    $("#four").hide();
    $("#fifthQuestion0").delay(0).fadeIn(200)
    $("#fifthQuestion1").delay(200).fadeIn(200)
    $("#fifthQuestion2").delay(600).fadeIn(200)
    $("#fifthQuestion3").delay(800).fadeIn(200)
    $("#fifthQuestion4").delay(1000).fadeIn(200)
    $("#form-group5").delay(1100).fadeIn(200)
    $("#five").delay(1300).fadeIn(200)
    option.optionTotal += parseInt($("#color").val())
    
  });

  $("#five").click(function () {
    $("#fifth-form").hide();
    $("#form-group5").hide();
    $("#question5").hide();
    $("#five").hide();
    option.optionTotal += parseInt($("#color").val())
    $("#submit").show();
    $("#youPicked").append("<ul id=leftList> You picked: </ul>" + "<li>" + "Favorite beverage:" + " " + $("#beverage option:selected").text() + "</li>"
    + "<li>" + "Favorite movie:" + " " + $("#movie option:selected").text() + "</li>"
    + "<li>" + "Favorite animal:" + " " + $("#animal option:selected").text() + "</li>"
    + "<li>" + "Favorite color:" + " " + $("#color option:selected").text() + "</li>"
    + "<li>" + "Favorite music:" + " " + $("#music option:selected").text() + "</li>")
  });

  $("#submit").click(function () {
    $(".btn btn-primary").removeClass("")
    $("#try").show();
    $("#submit").hide();
    $("#youPicked").hide();
    option.grandTotal = option.optionTotal
    $("#results").text(option.selections())
  });
  
  $("#try").click(function () {
    location.reload();
  
  });
    $("#question1").append(option.text1())
    $("#question2").append(option.text2())
    $("#question3").append(option.text3())
    $("#question4").append(option.text4())
    $("#question5").append(option.text5())
    $("#firstQuestion0").delay(0).fadeIn(200)
    $("#firstQuestion1").delay(200).fadeIn(200)
    $("#firstQuestion2").delay(600).fadeIn(200)
    $("#firstQuestion3").delay(800).fadeIn(200)
    $("#firstQuestion4").delay(1000).fadeIn(200)
    $("#question1").show();
    $("#form-group1").delay(1100).fadeIn(200)
    $("#one").delay(1300).fadeIn(200)
});