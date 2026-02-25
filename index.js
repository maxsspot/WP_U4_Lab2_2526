phrase = ""
guessed = []
wordbox = document.getElementById("")



function choosePhrase(){
    const randomIndex = Math.floor(Math.random() * list.length);
    phrases = ["APPLE", "PEAR", "FRIED CHICKEN", "CHICKEN PATTIES", "COMPUTER", "LEMON", "SPORE", "OLD MAN JENKINS", "SKILLET", "SHARK", "MEDICAL", "HOTDOGS","HAMBURGERS","DIVORCE","ADOPTED","AUCTION"]
    user_word = phrases[randomIndex]
    phrase = user
    toDashes(phrase)
}

function userGuess(guessed, phrase){
  inform = document.getElementById("")
  letter = document.getElementById("letter")
  inform.textContent = ""
  let done = False
  let guess = user.toUpperCase()
  while(done == False){
      if (ord(guess) >= 65 && ord(guess) <= 90){
        if(guess in guessed){
          inform.textContent = "You've already guessed this letter!"
          letter.textContent = ""

        }
          done = True
        }
      else{
        inform.textContent = "You cannot guess something other than a letter"
        letter.textContent = ""
      }
      }
  guessed.append(guess)
  updateGameData(letter, )
}
function updateGameData(guess, dashed, phrase, guesses_left){
  if(guess in phrase){
    for(x=0;x<phrase.length();x++){
      if(guess == phrase[x]){
        dashed[x] = guess
      }
    }
  }
  else{
    guesses_left -= 1
  }
  return dashed, guesses_left
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
function updateOutput(guesses_left, dashed, used){
  guessedLetters = ' '.join(used)
  phraseSoFar = ' '.join(dashed)
  //print(f"\n{phraseSoFar}")
  //print(f"\nYou have already guessed: {guessedLetters}")
  //print(f"You have {guesses_left} guesses left!")
}