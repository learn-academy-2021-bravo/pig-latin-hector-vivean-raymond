import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

      // your code here!
      // Use the starter code 
      // check to see if the current element start with the vowel. 
      // if element start with a vowel add "way" to the end.
      // .map over current word and check if element .indexOf "vowelsArray" at [0] === 0. 
      // Return the elment with "way" added. 
      // Using concat method. 
      // 1. Words that begin with consonant. 
       // Where the placement of the first vowel is. 
        //   Pineapple- if the index of zero is doesn’t begin with a vowel.
        //    Identify the placement of the first vowel, ways to identify, indexOf -built in method. 
        // Consonants
        // We would map through the element and check if the vowels Array against the current words Array and we know the index is greater than [0]
        // then we know thats its not an vowel in the beginning. words that dont begin with a vowel find the index of vowel.
        // we then use a for loop on that element and we can shift and push the first character until we hit a vowel and we  return it immiediately. 
        // "Qu" we find the first non vowel and shift the letters from the "qu" 
        // Shift the letter before the vowel to the end:
        // If we see "QU" if they are first letters -move to the  end. Then whatever the next vowel would be Add “ay” to the end:
        // If we see "SQU" if they are first letters -move to the  end. Then whatever the next vowel would be Add “ay” to the end:
        // If we see "Y" at the frist index,- they are first letters -move to the  end. Then whatever the next vowel would be Add “ay” to the end:
        // If "Y" is at the last index and thier are no other vowels, then "Y" movies to the first index, and then add "ay"
        //

      
        // ineapplep
        // Add “ay” to the end:
        // ineapplepay

        // 5. Everything before the vowel we want to move to the end. 



        let vowelsArray = currentWord.split("").filter(vowel => {
          return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
        })
        let returnArray = [];
  
        let vowels = ["a", "e", "i", "o", "u"];
  
        for (let i = 0; i < currentWord.length; ++i){
          if(vowels.includes(currentWord[0])){
            returnArray.push(currentWord.concat("way"));
          
          }
       // console.log("vowelsArray:", vowelsArray)
       // console.log(currentWord.indexOf(vowelsArray[0]))
  
        // your code here!
  
  
       
        
        const consonantTest = (letter) => {
          let consonant =letter.split("") // everything you put in your parameter and putting it into an array
          consonant.map(letter) 
          console.log(consonant)
          if(letter.charAt(0) !== "a" && letter.charAt(0) !== "e" && letter.charAt(0) !== "i" && letter.charAt(0) !== "o" && letter.charAt(0) !== "u"){
            letter.slice(1)
          }
        
        
        
        }

      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={ butcherPig }
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
        </div>
        <p>{ this.state.phraseTranslated }</p>
        <footer>Coded by ~your name here~</footer>
      </>
    )
  }
}

export default App
