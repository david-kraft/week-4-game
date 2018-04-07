var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
console.log("Crystal values: " + crystalValues)
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

    // I really wanted to combine these into a single command, but couldn't figure out how.
    $(".crystal").on("click", function (event) {
        if (event.target.id === "crystal1") {
            runningTotal = runningTotal + crystalValues[0];
        } else if (event.target.id === "crystal2") {
            runningTotal = runningTotal + crystalValues[1];
        } else if (event.target.id === "crystal3") {
            runningTotal = runningTotal + crystalValues[2];
        } else if (event.target.id === "crystal4") {
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