$(document).ready( function()  {
//functions that push numbers onto the screen and sets them
//to a variable for calculations
var onScreen = ""    
numberClick() 

function numberClick() {
        $("#seven").click(function() {
            onScreen = onScreen + "7"
            $(".screen").text(onScreen);
        })
        $("#eight").click(function() {
            onScreen = onScreen + "8"
            $(".screen").text(onScreen);
        })
        $("#nine").click(function() {
            onScreen = onScreen + "9"
            $(".screen").text(onScreen); 
        })
        $("#four").click(function() {
            onScreen = onScreen + "4"
            $(".screen").text(onScreen);
        })
        $("#five").click(function() {
            onScreen = onScreen + "5"
            $(".screen").text(onScreen);
        })
        $("#six").click(function() {
            onScreen = onScreen + "6"
            $(".screen").text(onScreen);
        })
        $("#one").click(function() {
            onScreen = onScreen + "1"
            $(".screen").text(onScreen);
        })
        $("#two").click(function() {
            onScreen = onScreen + "2"
            $(".screen").text(onScreen);
        })
        $("#three").click(function() {
            onScreen = onScreen + "3"
            $(".screen").text(onScreen);
        })
        $("#zero").click(function() {
            onScreen = onScreen + "0"
            $(".screen").text(onScreen);
        })
        $("#dot").click(function() {
            onScreen = onScreen + "."
            $(".screen").text(onScreen);
        })
    } 
//functions for each of the operators 

//function for clearing the screen

//function for keeping a history of the calculations

//function to clear the history
})