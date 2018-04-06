// Prevents scripts from executing until page is loaded
$(document).ready(function () {

    var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
    console.log("Crystal values: " + crystalValues)
    var numberToGuess = Math.ceil(Math.random() * 102 + 18);
    $("#target").text("Target: " + numberToGuess);
    var runningTotal = 0;
    $("#score").text("Score: " + runningTotal);
    var wins = 0;
    $("#wins").text("Wins: " + wins);
    var losses = 0;
    $("#losses").text("Losses: " + losses);

    // I really wanted to combine these into a single command, but couldn't figure out how.
    if (runningTotal < numberToGuess) {
        $("#crystalRow").on("");
        $("#crystalRow").on("click", "#crystal1", function () {
            var runningTotal += crystalValues[1];
        });
        $("#crystalRow").on("click", "#crystal2", function () {
            var runningTotal += crystalValues[2];
        });
        $("#crystalRow").on("click", "#crystal3", function () {
            var runningTotal += crystalValues[3];
        });
        $("#crystalRow").on("click", "#crystal4", function () {
            var runningTotal += crystalValues[4];
        });
        $("#score").text("Score: " + runningTotal)
        else if (runningTotal === numberToGuess) {
            var wins = wins++;
            $("wins").text("Wins: " + wins)
            var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
            console.log("Crystal values: " + crystalValues);
            var numberToGuess = Math.ceil(Math.random() * 102 + 18);
            $("#target").text("Target: " + numberToGuess);
            var runningTotal = 0;
        };
        else if (runningTotal > numberToGuess) {
            var losses = losses++;
            $("losses").text("Losses: " + losses)
            var crystalValues = [Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)];
            console.log("Crystal values: " + crystalValues);
            var numberToGuess = Math.ceil(Math.random() * 102 + 18);
            $("#target").text("Target: " + numberToGuess);
            var runningTotal = 0;
        };
    };
};