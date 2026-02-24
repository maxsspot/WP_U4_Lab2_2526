function choosePhrase(){
    const randomIndex = Math.floor(Math.random() * list.length);
    phrases = ["APPLE", "PEAR", "FRIED CHICKEN", "CHICKEN PATTIES", "COMPUTER", "LEMON", "SPORE", "OLD MAN JENKINS", "SKILLET", "SHARK", "MEDICAL", "HOTDOGS","HAMBURGERS","DIVORCE","ADOPTED","AUCTION"]
    user_word = phrases[randomIndex]
    return user_word
}

function userGuess(user, guessed){
  let done = False
  let guess = user.toUpperCase()
  while(done == False){
    if (guess.length() == 1){
      if (ord(guess) >= 65 && ord(guess) <= 90){
        while(guess in guessed){
          print("Your guess must be a new one. Please try a new letter.")
          guess = input("What letter would you like to try? ").upper()
        }
          done = True
        }
      else{
        print("Your input must be a single letter. Please try again.\n")
        guess = input("What letter do you want to try? ").upper()
      }
      }
    
    else{
      print("Your input must be a single letter. Please try again.\n")
      guess = input("What letter would you like to try? ").upper()
    }
    }
  
  guessed += guess.upper()
  return guess.upper(), guessed
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
  return dashed    
}
function updateOutput(guesses_left, dashed, used){
  guessedLetters = ' '.join(used)
  phraseSoFar = ' '.join(dashed)
  //print(f"\n{phraseSoFar}")
  //print(f"\nYou have already guessed: {guessedLetters}")
  //print(f"You have {guesses_left} guesses left!")
}