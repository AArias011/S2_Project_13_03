"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Anthony Arias
   Date:   3-26-19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

var allLetters;

var currentLetter;

var wordLetters;

var acrossClue;

var downClue;

var typeDirection;

window.onload = init;

//this Initializes the puzzle, setting up the event handlers and the variable values
function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataset.clueA;
      var downID = currentLetter.dataset.clueD
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      downClue = document.getElementById(currentLetter.dataset.clueD);
      acrossClue = document.getElementById("acroosID");
      downClue = document.getElementById("downID");

      function formatPuzzle(currentLetter) {
            for (var i = 0; i < allLetters.length; i++) {
                  allLetters[i].style.cursor = "pointer";

            }
      }

}

// This formats the colors of the crossword table cells and the clues in the clues list based on the letter that is selected by user
function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
      }
      acrossClue.style.color = "";
      downClue.style.color = "";

      if (currentLetter.dataset.clueA !== undefined) {
            acrossClue = document.getElementById("currentLetter.dataset.clueA");
            acrossClue[i].style.color = "blue";
            wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
            wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }

      if (currentLetter.dataset.clueD !== undefined) {
            acrossClue = document.getElementById("currentLetter.dataset.clueD");
            acrossClue[i].style.color = "red";
            wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
            wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }

      if (typeDirection === "right") {
            currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
      } else {
            currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
      }

}








/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}