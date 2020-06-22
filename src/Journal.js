//Buiness Logic
function wordsToNumber(){
  let totalWords = 0;
  for (var i=0; 1< Wordcount.length; i++){
    if (String(i)) === " ") {
      totalWords = +1;
    }
    totalWords += 1;
  }
}

function vowelsToConsonants(){

}

function getTeaser(){

}

//UI logic
$(document).ready(function(){
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    let userInputTile = $("input#inputTitle").val();
    let userInputBody = $("input#inputBody").val();

  }
});