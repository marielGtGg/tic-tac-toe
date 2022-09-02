/*
alert("Base fonctionnelle");

$(function() {
    alert("JQuery fonctionnel");
});
*/

class gameTicTacToe {
    constructor() {
        this.name = "";
        this.board = document.querySelector("#pluginGameBoard");
        this.cells = document.getElementsByClassName("pluginGameCell");
        this.scores = {
            X: 0,
            O: 0,
        };
        this.scoreHost = [0, 0, 0]; /* Win/Lost/Tie */
        this.scoreGuest = [0, 0, 0]; /* Win/Lost/Tie */
        this.players = ["x", "o"];
        this.host = document.querySelector("#pluginHostPlayer");
        this.guest = document.querySelector("#pluginGuestPlayer");
        this.winCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.boardStatus = [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty"
        ];
        this.setActivePlayer() 
    }
/*
function updateScores(X, O) {
	document.querySelector("#pluginGuestPlayer #pluginGuestWon").innerHTML = X;
	document.querySelector("#pluginGuestPlayer #pluginHostWon").innerHTML = O;	
}
    updateScore() {
        console.log(`Host ${this.scoreHost[0]} win`);
        console.log(`Host ${this.scoreHost[1]} lost`);
        console.log(`Host ${this.scoreHost[2]} tie`);
        console.log(`Guest ${this.scoreHost[1]} win`);
        console.log(`Guest ${this.scoreHost[2]} lost`);
        console.log(`Guest ${this.scoreHost[0]} tie`);
    }
*/
/*winVerif() {
        for (let i = 0; i < this.winCondition.length; i++) {
            if (this.winCondition[i][0] === this.winCondition[i][1] === this.winCondition[i][2]) {
                this.board.classList.add("");
            } else {
                this.board.classList.add("null");
            }
        }
    }
*/
/*var placeholder = document.getElementById("placeholder");

var tictactoe = new TicTacToe(placeholder, 1, onResult);

function onResult(result, scores) {
	if(result == 'draw') {
		alert("It's a draw !");
	} else {
		alert(result + " has won");
		updateScores(scores.X, scores.O);
	}
	tictactoe.empty();
}


    
    }
*/
    /*Fonction à lier au bouton reset*/
    resetBoard() {;
        for (var i=0; i< this.cells.length; i++){
            this.cells[i].classList.remove("o", "x", "empty");
            this.cells[i].classList.add("empty");
        }; 
        this.setEventToGrid(this);  //retire et recrée les eventlistner   
        this.setActivePlayer(); //redétermine le premier joueur de façon aléatoire
    }

    /*Fonction à placer les event sur tout les cases de la grid*/
    setEventToGrid(game) {
        //j'ai mis la fonction dans une constante parce que
        //si on la passe en fonction anonyme direment dans le evetListener, 
        //le removeEventListener ne reconnait pas que c'est la même fonction et ne fonctionne pas.
        const onClick = function() {
            playTurn(this, game);
        }

        for (var i=0; i < game.cells.length; i++){
            game.cells[i].replaceWith(game.cells[i].cloneNode()); //retire tous les eventListeners (pour le cas d'un reset où il reste des eventListener sur certaines cases)
            game.cells[i].addEventListener('click', onClick);
        }

        function playTurn(cell, game) {
            cell.classList.remove("empty");
            cell.classList.add(game.activePlayer);
            cell.removeEventListener('click', onClick); //empêche de rejouer sur la même case
            game.switchPlayer(game);
        }
    }

    setActivePlayer() {
        //pour le moment déternime le premier joueur de façon aléatoire
        this.activePlayer = this.players[Math.floor(Math.random() * 2)];
        this.switchPlayer(this);
    }
    
    switchPlayer(game) {
        game.activePlayer = game.activePlayer == game.players[0] ? game.players[1] : game.players[0];
        
        //Pour le hover sur les cases de la grille
        game.board.classList.remove("x", "o"); 
        game.board.classList.add(this.activePlayer);

        //Pour la section des joueurs
        game.host.classList.remove("activePlayer");
        game.guest.classList.remove("activePlayer");
        if (game.activePlayer == "x") {
            game.host.classList.add("activePlayer");
        } else {
            game.guest.classList.add("activePlayer");
        }
    }
}



window.onload = function(){
    let game = new gameTicTacToe; //Déplacé dans le onLoad car il va chercher des éléments du html donc la page doit être loadée

    document.getElementById("pluginResetGrid").addEventListener("click",function(){
        game.resetBoard(game);
    })

    game.setEventToGrid(game);

}
    




