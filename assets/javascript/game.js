// Sets initial random crystal values in crystalValues array.
var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];

// Logs said values for coders (and cheaters, like me ;-) )
console.log("Crystal values: " + crystalValues)

// Sets numberToGuess to random integer between 19 and 121. In hindsight, I wish I would have used the Random Integers method, but I was most familiar with the random method
var numberToGuess = Math.ceil(Math.random() * 102 + 18);
var runningTotal = 0;
var wins = 0;
var losses = 0;

// Prevents scripts from executing until page is loaded
$(document).ready(function () {

    $("#target").text(numberToGuess);
    $("#score").text(runningTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);

    $(".crystal").on("click", function (event) {
        if (event.target.id === "crystal0") {
            runningTotal = runningTotal + crystalValues[0];
        } else if (event.target.id === "crystal1") {
            runningTotal = runningTotal + crystalValues[1];
        } else if (event.target.id === "crystal2") {
            runningTotal = runningTotal + crystalValues[2];
        } else if (event.target.id === "crystal3") {
            runningTotal = runningTotal + crystalValues[3];
        }
        if (runningTotal === numberToGuess) {
            wins++;
            $("#wins").text(wins)
            crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
            console.log("Crystal values: " + crystalValues);
            numberToGuess = Math.ceil(Math.random() * 102 + 18);
            $("#target").text(numberToGuess);
            runningTotal = 0;
        } else if (runningTotal > numberToGuess) {
            losses++;
            $("#losses").text(losses)
            crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
            console.log("Crystal values: " + crystalValues);
            numberToGuess = Math.ceil(Math.random() * 102 + 18);
            $("#target").text(numberToGuess);
            runningTotal = 0;
        }
        $("#score").text(runningTotal);
    });
});