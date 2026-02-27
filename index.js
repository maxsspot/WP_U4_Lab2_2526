let phrase = ""
let yourGuesses = []
let wordbox = document.getElementById("dashArea")
var guesses = 6
let images = ["./resources/finalWrong.png", "./resources/fifthWrong.png", "./resources/fourthWrong.png", "./resources/thirdWrong.png", "./resources/secondWrong.png", "./resources/firstWrong.png"]
let newimage = document.createElement("img")
function choosePhrase(){
  const phrases = ["APPLE", "PEAR", "COMPUTER", "LEMON", "SPORE", "SKILLET", "SHARK", "MEDICAL", "HOTDOGS","HAMBURGERS","DIVORCE","ADOPTED","AUCTION"]  
  const randomIndex = Math.floor(Math.random() * phrases.length);
    const user_word = phrases[randomIndex]
    phrase = user_word
    toDashes(phrase)
}
choosePhrase()
function restartclick(){
location.reload(true);
}

console.log(phrase)

function userGuess(){
  const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  const inform = document.getElementById("alertBox")
  const user = document.getElementById("letter")
  inform.textContent = ""
  let guess = user.value.toUpperCase()
      if (alphabet.includes(guess)){
        if(yourGuesses.includes(guess)){
          inform.textContent = "You've already guessed this letter!"
          letter.textContent = ""
        } else{
          if(phrase.includes(guess)){
          updateGameData(guess,wordbox.textContent)
        }
        else{
          yourGuesses.push(guess)
          updateGameData(guess,wordbox.textContent)
        }
        }
      } else{
        inform.textContent = "You cannot guess something other than a letter"
        letter.textContent = ""
      }
}
function updateGameData(guess, dashed){
  console.log(dashed)
  let dashes = dashed.split(" ")
  console.log(dashes)
  if(phrase.includes(guess)){
    for(x=0;x<phrase.length;x++){
      if(String(guess) == String(phrase[x])){
        dashes[x] = guess
      }
    }
    console.log(dashes)
  dashed = dashes.join(" ")
  wordbox.textContent = dashed
  }
  else{
    guesses-- 
    updateOutput()
  }
}

function toDashes(){
  dashed = []
  for(i=0;i<phrase.length;i++){
      dashed.push("_")
    }
  wordbox.textContent = dashed.join(" ") 
}
function updateOutput(){
  let previousguess = document.getElementById("letterContainer")
  previousguess.textContent = yourGuesses.join(" ")
  const imagebox = document.getElementById("imgArea")
  imagebox.innerHTML = ''
  newimage.src = images[guesses]
  imagebox.appendChild(newimage)
  if(guesses == 0){
    wordbox.textContent = `YOU LOST, PRESS RESTART. THE CORRECT WORD WAS ${phrase}`
    document.getElementById("guessLetter").style.pointerEvents="none"
  }

}