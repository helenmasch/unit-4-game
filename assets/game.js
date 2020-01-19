$(document).ready(function() {

// Create the variables 
//math.ceil(): 1.1 = 2
//math.floor(): 1.8 = 1
var targetNumber ;

var crystalNumberOne ;
var crystalNumberTwo ;
var crystalNumberThree ;
var crystalNumberFour ;

var totalWins = 5
var totalLosses = 0

//thee selctors: id, class, and element name(tag  name)
//id: begins with # id name(ex: #name)
//class: begins with . class name (ex: .number)
//element: body, div, p, img, a


function initializeGame() {
   targetNumber = Math.floor(Math.random() * 101) + 19

   crystalNumberOne = Math.floor(Math.random() * 11) + 1
   crystalNumberTwo = Math.floor(Math.random() * 11) + 1
   crystalNumberThree = Math.floor(Math.random() * 11) + 1
   crystalNumberFour = Math.floor(Math.random() * 11) + 1
    
   //first step call the selector id,class, and element()
   //.text() can't read any tag , .html() outputs one line, 
   //append outputs mulitple lines, start from top to bottom of the called selector 
   console.log(targetNumber)
   $(".target-number").html("<h1 style='color:blue'>"+targetNumber)

   // anything in the carrots are creating dynamic elements
   // the images go into js to be able to create the buttons
   // in html it is only static and just an image
   // no further functions after that
   // the attr is anything before the = 
   var img=$("<img>")
   img.attr("src","./assets/images/blue-crystal.jpg")
   img.attr("class", "images")
   $(".crystal-images").append(img)

   var img=$("<img>")
   img.attr("src","./assets/images/green-crystal.jpg")
   img.attr("class", "images")
   $(".crystal-images").append(img)

   var img=$("<img>")
   img.attr("src","./assets/images/white-crystal.jpg")
   img.attr("class", "images")
   $(".crystal-images").append(img)

   var img=$("<img>")
   img.attr("src","./assets/images/red-crystal.jpg")
   img.attr("class", "images")
   $(".crystal-images").append(img)

}

initializeGame()




// Set onclick funtion 



// Create the function of the variables (if statement)

// Create the else statement of the variables

// Return the values of that variable 

// Reset and restart the game over again
})