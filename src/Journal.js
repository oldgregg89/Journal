//Buiness Logic
export function wordsToNumber(){
  let totalWords = 0;
  for (var i=0; 1 < Wordcount.length; i++){
    if (String(i) === " ") {
      totalWords = +1;
    }
    totalWords += 1;
  }
}


export function convertSentencestoStrings (){
  let userWords = userInputBody.split(" ")
  userSentenceArray = [];
  userWords.forEach(function(word) {
    userSentenceArray.push(word)
  })

}

export function convertWordstoStrings() {
let outputSentence = userWords.split("")

}

export function isVowels(){
  let vowels = ["a", "e", "i", "o", "u"]
  let isVowels;
  for (v = 0; v < vowels.length; v++) {
    if (vowels[v] === inputBody)
   isVowels === true;
  }
}

export function vowelsToConsonants(){


}


export function getTeaser(){

}

//UI logic
$(document).ready(function(){
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    let userInputTile = $("input#inputTitle").val();
    let userInputBody = $("input#inputBody").val();

  }
});