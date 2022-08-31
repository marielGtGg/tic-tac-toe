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
        this.setActivePlayer() 
    }

    /*Fonction à lier au bouton reset*/
    resetBoard() {;
        for (var i=0; i< gameTicTacToe.cells.length; i++){
            gameTicTacToe.cells[i].classList.remove("o", "x", "empty");
            gameTicTacToe.cells[i].classList.add("empty");
        }; 
        gameTicTacToe.setEventToGrid(this);  //retire et recrée les eventlistner   
        gameTicTacToe.setActivePlayer(); //redétermine le premier joueur de façon aléatoire
    }
/*
    updateScore() {
        console.log(`Host ${this.scoreHost[0]} win`);
        console.log(`Host ${this.scoreHost[1]} lost`);
        console.log(`Host ${this.scoreHost[2]} tie`);
        console.log(`Guest ${this.scoreHost[1]} win`);
        console.log(`Guest ${this.scoreHost[2]} lost`);
        console.log(`Guest ${this.scoreHost[0]} tie`);
    }
*/

    /*Fonction à placer les event sur tout les cases de la grid*/
    setEventToGrid() {
        //j'ai mis la fonction dans une constante parce que
        //si on la passe en fonction anonyme direment dans le evetListener, 
        //le removeEventListener ne reconnait pas que c'est la même fonction et ne fonctionne pas.
        const onClick = function() {
            playTurn(this);
        }

        for (var i=0; i < gameTicTacToe.cells.length; i++){
            gameTicTacToe.cells[i].replaceWith(gameTicTacToe.cells[i].cloneNode()); //retire tous les eventListeners (pour le cas d'un reset où il reste des eventListener sur certaines cases)
            gameTicTacToe.cells[i].addEventListener('click', onClick);
        }

        function playTurn(cell) {
            cell.classList.remove("empty");
            cell.classList.add(gameTicTacToe.activePlayer);
            cell.removeEventListener('click', onClick); //empêche de rejouer sur la même case
            gameTicTacToe.switchPlayer();
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

    setActivePlayer() {
        //pour le moment déternime le premier joueur de façon aléatoire
        this.activePlayer = gameTicTacToe.players[Math.floor(Math.random() * 2)];
        this.switchPlayer();
    }
    
    switchPlayer() {
        gameTicTacToe.activePlayer = gameTicTacToe.activePlayer == gameTicTacToe.players[0] ? gameTicTacToe.players[1] : gameTicTacToe.players[0];
        
        //Pour le hover sur les cases de la grille
        gameTicTacToe.board.classList.remove("x", "o"); 
        gameTicTacToe.board.classList.add(this.activePlayer);

        //Pour la section des joueurs
        gameTicTacToe.host.classList.remove("activePlayer");
        gameTicTacToe.guest.classList.remove("activePlayer");
        if (gameTicTacToe.activePlayer == "x") {
            gameTicTacToe.host.classList.add("activePlayer");
        } else {
            gameTicTacToe.guest.classList.add("activePlayer");
        }
    }
}



window.onload = function(){
    let game = new gameTicTacToe; //Déplacé dans le onLoad car il va chercher des éléments du html donc la page doit être loadée

    document.getElementById("pluginResetGrid").addEventListener("click",function(){
        game.resetBoard();
    })

    game.setEventToGrid();

}
    




