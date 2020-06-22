//Business Logic
export function wordsToNumber(){
  let totalvowels = 0;
  let vowelArray = convertWordstoStrings()
  for (var i=0; 1 < vowelArray.length; i++){
    if (vowelArray[i] === ["a"||"e"||"i"||"o"||"u"]) {
      totalVowels += 1;
    }
    totalVowels += 1;
  }
}


export function convertWordstoStrings (){
  let userWords = $(("#userInputBody").val()).split(" ")
  userArray = [];
  userWords.forEach(function() {
    userArray.push(userWords)
  })
  return userArray.length; // Return number of words in the userArray...
  
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

    wordsToNumber.totalVowels;
    $("../#outputTitle").text() = userInputTile
  }
});