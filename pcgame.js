let min, max, pcGuess, mid, guessCount;

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
    guessCount = 0;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("resultArea").style.display = "none";
    makeGuess();
}

function makeGuess() {
    // pcGuess = Math.floor(Math.random() * (max - min + 1)) + min;
    mid = Math.floor(min+(max-min)/2);
    guessCount++;
    document.getElementById("pcGuess").innerText = `Is your number ${mid}?`;
}

function handleResponse(isYes) {
    if (isYes) {
        document.getElementById("gameArea").style.display = "none";
        document.getElementById("resultArea").style.display = "block";
        document.getElementById("resultMessage").innerText = `Pc guessed your number in ${guessCount} attempts! 🎉`;
    } else {
        adjustRange();
        makeGuess();
    }
}

function adjustRange() {
    const userResponse = confirm(`Is your number greater than ${mid}?`);
    if (userResponse) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }

    if (min > max) {
        alert("Wait, something went wrong with the range!");
        resetGame();
    }
}

function resetGame() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("resultArea").style.display = "none";
    document.getElementById("pcGuess").innerText = "";
    document.getElementById("minRange").value = "";
    document.getElementById("maxRange").value = "";
}
