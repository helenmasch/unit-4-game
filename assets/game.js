$(document).ready(function() {

// Creates the variables 
// What components do I need for this game to function?
//math.ceil(): 1.1 = 2
//math.floor(): 1.8 = 1
var targetNumber ;

var crystalNumberOne ;
var crystalNumberTwo ;
var crystalNumberThree ;
var crystalNumberFour ;

var totalWins = 0
var totalLosses = 0

var userTotal = 0

// Puts 4 crystal images on the page (make sure it is
// outside the initialize game function or else
// 4 more crystal images will load to the page everytime
// the game is restarted. (Had to debug this)

// Setting these variables are setting the images to the webpage
// these are static images and will not be changed throughout
// the game
var img=$("<img>")
   img.attr("src","./assets/images/blue-crystal.jpg")
   img.attr("class", "blue-crystal")
   $(".crystal-images").append(img)

   var img=$("<img>")
   img.attr("src","./assets/images/dark-purple-crystal.jpg")
   img.attr("class", "dark-purple-crystal")
   $(".crystal-images").append(img)

   var img=$("<img>")
   img.attr("src","./assets/images/white-crystal.jpg")
   img.attr("class", "white-crystal")
   $(".crystal-images").append(img)

   var img=$("<img>")
   img.attr("src","./assets/images/red-crystal.jpg")
   img.attr("class", "red-crystal")
   $(".crystal-images").append(img)

//the selctors: id, class, and element name(tag name)
//id: begins with # id name(ex: #name)
//class: begins with . class name (ex: .number)
//element: body, div, p, img, a

// this function is setting up the game to restart each time
function initializeGame() {

   //Game generates a random (whole) number between 19-120
   targetNumber = Math.floor(Math.random() * 101) + 19

   //Creates a hidden value for each crystal
   //Sets a number to each crystal randomly
   crystalNumberOne = Math.floor(Math.random() * 11) + 1
   crystalNumberTwo = Math.floor(Math.random() * 11) + 1
   crystalNumberThree = Math.floor(Math.random() * 11) + 1
   crystalNumberFour = Math.floor(Math.random() * 11) + 1
    
   //first step call the selector id, class, and element()
   //.text() can't read any tag , .html() outputs one line, 
   //append outputs mulitple lines, start from top to bottom of the called selector 
   console.log(targetNumber)
   $(".target-number").html("<h1 style='color:blue'>"+targetNumber)

   // anything in the carrots are creating dynamic elements
   // the images go into js to be able to create the buttons
   // in html it is only static and just an image
   // no further functions after that
   // the attr is anything before the = 
   
}
    // function is creating the alert to the user whether
    // they win or lose 
    function winner() {
        alert("You Win!");
        // adds 1 to the win everytime its called 
        totalWins++; 
        $("#wins").text(totalWins);
        userTotal = 0;
        $(".total-score").text(userTotal);
        initializeGame();
    }

    function loser() {
        alert("You Lose");
        // adds 1 to losses everytime its called
        totalLosses++;
        $("#losses").text(totalLosses);
        userTotal = 0; 
        $(".total-score").text(userTotal);
        initializeGame();
    }
    
// this is reseting the game and initializing a new game
initializeGame()

// Sets click funtion to each of the 4 crystals,
// then, sets the crystal number to the user total
// and adding them together to create the new user total
// finally sets the class to display the users total each
// time the image is being clicked
    $(".blue-crystal").click(function() {
    userTotal = userTotal + crystalNumberOne;
    console.log("New userTotal " + userTotal);
    $(".total-score").text(userTotal);

    if (userTotal === targetNumber) {
        winner()
    }

    else if (userTotal > targetNumber) {
        loser()
    }
    // why is the ) here? -- but 
}) 

$(".dark-purple-crystal").click(function() {
    userTotal = userTotal + crystalNumberTwo;
    console.log("New userTotal " + userTotal);
    $(".total-score").text(userTotal);

    if (userTotal === targetNumber) {
        winner()
    }

    else if (userTotal > targetNumber) {
        loser()
    }
    // why is the ) here? -- but 
}) 

$(".white-crystal").click(function() {
    userTotal = userTotal + crystalNumberThree;
    console.log("New userTotal " + userTotal);
    $(".total-score").text(userTotal);

    if (userTotal === targetNumber) {
        winner()
    }

    else if (userTotal > targetNumber) {
        loser()
    }
    // why is the ) here? -- but 
}) 

$(".red-crystal").click(function() {
    userTotal = userTotal + crystalNumberFour;
    console.log("New userTotal " + userTotal);
    $(".total-score").text(userTotal);

    if (userTotal === targetNumber) {
        winner()
    }

    else if (userTotal > targetNumber) {
        loser()
    }

}); 
// almost forgot the final }) REMEMBER THAT
})
// Remember to close ALL out 
