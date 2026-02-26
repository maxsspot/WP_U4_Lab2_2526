let phrase = ""
let yourGuesses = []
let wordbox = document.getElementById("dashArea")
let guesses = 6
let images = ["./resources/finalWrong.png", "./resources/fifthWrong.png", "./resources/fourthWrong.png", "./resources/thirdWrong.png", "./resources/secondWrong.png", "./resources/firstWrong.png"]
let newimage = document.createElement("img")
function choosePhrase(){
  const phrases = ["APPLE", "PEAR", "FRIED CHICKEN", "CHICKEN PATTIES", "COMPUTER", "LEMON", "SPORE", "OLD MAN JENKINS", "SKILLET", "SHARK", "MEDICAL", "HOTDOGS","HAMBURGERS","DIVORCE","ADOPTED","AUCTION"]  
  const randomIndex = Math.floor(Math.random() * phrases.length);
    const user_word = phrases[randomIndex]
    phrase = user_word
    toDashes(phrase)
}
choosePhrase()
function restartclick(div){
location.reload(true);
}



function userGuess(yourGuesses, phrase){
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
          yourGuesses.push(guess)
          console.log(yourGuesses)
          updateGameData(letter,wordbox, phrase, yourGuesses, guesses)
        }
      } else{
        inform.textContent = "You cannot guess something other than a letter"
        letter.textContent = ""
      }
      
  updateGameData(letter,wordbox, phrase, yourGuesses, guesses)
}
function updateGameData(guess, dashed, phrase, yourGuesses, guesses){
  if(phrase.includes(guess)){
    for(x=0;x<phrase.length();x++){
      if(guess == phrase[x]){
        dashed[x] = guess
      }
    }
  
  wordbox.textContent = dashed.join(" ")
  }
  else{
    guesses -= 1
    console.log(guesses)
    console.log(yourGuesses)
    updateOutput(guesses, yourGuesses)
  }
}

function toDashes(phrase){
  dashed = [""]
  for(i=0;i<phrase.length();i++){
    if(phrase[i] == " "){
      dashed.push(" ")
    }
    else{
      dashed.push("_")
    }
  }
  
  wordbox.textContent = dashed.join(" ") 
}
function updateOutput(guesses, yourGuesses){
  let previousguess = document.getElementById("letterContainer")
  console.log(yourGuesses)
  previousguess.textContent = yourGuesses.join(" ")
  const imagebox = document.getElementById("imgArea")
  imagebox.innerHTML = ''
  newimage.src = images[guesses]

  imagebox.appendChild(newimage)
}