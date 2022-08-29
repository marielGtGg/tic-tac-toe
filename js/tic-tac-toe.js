/*
alert("Base fonctionnelle");

$(function() {
    alert("JQuery fonctionnel");
});
*/

class gameTicTacToe {
    constructor() {
        this.name = "";
        this.board = document.getElementsByClassName("pluginGameCell");
        this.scoreHost = [0, 0, 0]; /* Win/Lost/Tie */
        this.scoreGuest = [0, 0, 0]; /* Win/Lost/Tie */
        this.players = ["X", "O"];
        this.winCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [3, 4, 6]
        ]
    }

    /*Fonction à lier au bouton reset*/
    resetBoard() {
        console.log("resetBoard!!");
        for (var i=0; i< document.getElementsByClassName("pluginGameCell").length; i++){
            console.log(i);
            document.getElementsByClassName("pluginGameCell")[i].classList.remove("o");
            document.getElementsByClassName("pluginGameCell")[i].classList.remove("x");
            document.getElementsByClassName("pluginGameCell")[i].classList.remove("empty");
            document.getElementsByClassName("pluginGameCell")[i].classList.add("empty");
        };      
    }

    updateScore() {
        console.log(`Host ${this.scoreHost[0]} win`);
        console.log(`Host ${this.scoreHost[1]} lost`);
        console.log(`Host ${this.scoreHost[2]} tie`);
        console.log(`Guest ${this.scoreHost[1]} win`);
        console.log(`Guest ${this.scoreHost[2]} lost`);
        console.log(`Guest ${this.scoreHost[0]} tie`);
    }


    /*winVerif() {
        for (let i = 0; i < this.winCondition.length; i++) {
            if (this.winCondition[i][0] === this.winCondition[i][1] === this.winCondition[i][2]) {
                console.log("It's a win!");
            } else {
                console.log("No wins for now!")
            }
        }
    }
    askContinue() {
        let continueGame = prompt("On continue? (y or n)");
        console.log(continueGame);
        if (continueGame == "n" || continueGame == "") {
            console.log("NO")
            return false;
        }
        return true;
    }*/
}

var board = new gameTicTacToe;
window.onload = function(){
    document.getElementById("pluginResetGrid").addEventListener("click",function(){
        board.resetBoard();
    })
}
    




