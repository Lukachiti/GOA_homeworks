let player1 = document.getElementById("id").value
let player2 = document.getElementById("id2").value
function funcc() {
    if (player1 == Rock && player2 == Papper) {
        alert("Player2 Wins")
    }
    else if (player1 == Rock && player2 == Cissors) {
        alert("Player1 Wins")
    }
    else if (player1 == Rock && player2 == Rock) {
        alert("Draw")
    }
    else if (player1 == Papper && player2 == Rock) {
        alert("Player1 Wins")
    }
    else if (player1 == Papper && player2 == Cissors) {
        alert("Player2 Wins")
    }
    else if (player1 == Papper && player2 == Papper) {
        alert("Draw")
    }
    else if (player1 == Cissors && player2 == Rock) {
        alert("Player2 Wins")
    }
    else if (player1 == Cissors && player2 == Papper) {
        alert("Player1 Wins")
    }
    else if (player1 == Cissors && player2 == Cissors) {
        alert("Draw")
    }
    else {
        alert("bozo")
    }
}