let reverseString = (word) => {
  let result = '';
  wordArray = word.split("");
  wordArray.forEach((letter) => {
    result = letter + result;
  });
  return result;
}

// Test the reverseString function, and print results to the console.
let words = ['racecar', 'Andy', 'boolean', 'redrum'];

words.forEach((currentWord) => {
    let reversedWord = reverseString(currentWord);
    let result = (reversedWord === currentWord);
    let outputString = `The reverse of ${currentWord} is:  ${reversedWord}. \n${result}\n\n`;
    console.log(outputString);
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = outputString;
});
