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
    $(".crystal").on("click", function () {
        if (runningTotal < numberToGuess) {
            $("#crystal1").on("click", function () {
                var runningTotal = runningTotal + crystalValues[1];
            });
            $("#crystal2").on("click", function () {
                var runningTotal = runningTotal + crystalValues[2];
            });
            $("#crystal3").on("click", function () {
                var runningTotal = runningTotal + crystalValues[3];
            });
            $("#crystal4").on("click", function () {
                var runningTotal = runningTotal + crystalValues[4];
            });
            $("#score").text(runningTotal);
        } else if (runningTotal === numberToGuess) {
            var wins = wins++;
            $("wins").text("Wins: " + wins)
            var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
            console.log("Crystal values: " + crystalValues);
            var numberToGuess = Math.ceil(Math.random() * 102 + 18);
            $("#target").text(numberToGuess);
            var runningTotal = 0;
        } else if (runningTotal > numberToGuess) {
            var losses = losses++;
            $("losses").text("Losses: " + losses)
            var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
            console.log("Crystal values: " + crystalValues);
            var numberToGuess = Math.ceil(Math.random() * 102 + 18);
            $("#target").text(numberToGuess);
            var runningTotal = 0;
        };
    });
});