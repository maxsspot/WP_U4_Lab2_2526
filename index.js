phrase = ""
guessed = []
wordbox = document.getElementById("dashArea")
guesses = 5
images = ["./resources/finalWrong.png", "./resources/fifthWrong.png", "./resources/fourthWrong.png", "./resources/thirdWrong.png", "./resources/secondWrong.png", "./resources/firstWrong.png"]

function choosePhrase(){
    const randomIndex = Math.floor(Math.random() * list.length);
    phrases = ["APPLE", "PEAR", "FRIED CHICKEN", "CHICKEN PATTIES", "COMPUTER", "LEMON", "SPORE", "OLD MAN JENKINS", "SKILLET", "SHARK", "MEDICAL", "HOTDOGS","HAMBURGERS","DIVORCE","ADOPTED","AUCTION"]
    user_word = phrases[randomIndex]
    phrase = user_word
    toDashes(phrase)
}

function userGuess(guessed, phrase){
  alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  inform = document.getElementById("alertBox")
  user = document.getElementById("letter")
  inform.textContent = ""
  let guess = user.value.toUpperCase()
      if (alphabet.includes(guess)){
        if(guessed.includes(guess)){
          inform.textContent = "You've already guessed this letter!"
          letter.textContent = ""

        }
      else{
        guessed.append(guess)
        updateGameData(letter,wordbox, phrase, guesses)
      }
        }
      else{
        inform.textContent = "You cannot guess something other than a letter"
        letter.textContent = ""
      }
      
  guessed.append(guess)
  updateGameData(letter,wordbox, phrase, guesses)
}
function updateGameData(guess, dashed, phrase, guesses){
  if(phrase.includes(guess)){
    for(x=0;x<phrase.length();x++){
      if(guess == phrase[x]){
        dashed[x] = guess
      }
    }
  wordbox.textContent = ' '.join(dashed)
  }
  else{
    guesses -= 1
    updateOutput(guesses, guessed)
  }
}

function toDashes(phrase){
  dashed = [""]
  for(i=0;i<phrase.length();i++){
    if(phrase[i] == " "){
      dashed.append(" ")
    }
    else{
      dashed.append("_")
    }

  dashed.remove("")
  }
  wordbox.textContent = ' '.join(dashed) 
}
function updateOutput(guesses, guessed){
  let previousguess = document.getElementById("letterContainer")
  previousguess.textContent = ' '.join(guessed)
  const imagebox = document.getElementById("imgArea")
  imagebox.innerHTML = ''
  let newimage = images[guesses]
  imagebox.appendChild(newimage)
}