let min, max, pcNumber, attempts;

function startGame() {
    const minRange = document.getElementById("minRange").value;
    const maxRange = document.getElementById("maxRange").value;

    if (minRange === "" || maxRange === "") {
        alert("Please enter both minimum and maximum range!");
        return;
    }

    min = parseInt(minRange, 10);
    max = parseInt(maxRange, 10);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter valid numbers where minimum is less than maximum!");
        return;
    }

    pcNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;

    document.getElementById("gameArea").style.display = "block";
    document.getElementById("resultArea").style.display = "none";
    document.getElementById("hint").innerText = `Guess the number between ${min} and ${max}!`;
    document.getElementById("userGuess").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value, 10);

    if (isNaN(userGuess)) {
        document.getElementById("feedback").innerText = "Please enter a valid number!";
        return;
    }

    attempts++;

    if (userGuess < pcNumber) {
        document.getElementById("feedback").innerText = "Too low! Try again.";
    } else if (userGuess > pcNumber) {
        document.getElementById("feedback").innerText = "Too high! Try again.";
    } else {
        document.getElementById("gameArea").style.display = "none";
        document.getElementById("resultArea").style.display = "block";
        document.getElementById("resultMessage").innerText = `Congratulations! You guessed the number ${pcNumber} in ${attempts} attempts! 🎉`;
    }
}

function resetGame() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("resultArea").style.display = "none";
    document.getElementById("minRange").value = "";
    document.getElementById("maxRange").value = "";
}
