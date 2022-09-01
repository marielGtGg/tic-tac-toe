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
        for (var i=0; i< this.cells.length; i++){
            this.cells[i].classList.remove("o", "x", "empty");
            this.cells[i].classList.add("empty");
        }; 
        this.setEventToGrid();  //retire et recrée les eventlistner   
        this.setActivePlayer(); //redétermine le premier joueur de façon aléatoire
    }

    /*Fonction à placer les event sur tout les cases de la grid*/
    setEventToGrid() {
        //j'ai mis la fonction dans une constante parce que
        //si on la passe en fonction anonyme direment dans le evetListener, 
        //le removeEventListener ne reconnait pas que c'est la même fonction et ne fonctionne pas.
        let self = this //permet de référer à la classe dans la fonction imbriquée
        const onClick = function() {
            playTurn(this);
        }

        for (var i=0; i < this.cells.length; i++){
            this.cells[i].replaceWith(this.cells[i].cloneNode()); //retire tous les eventListeners (pour le cas d'un reset où il reste des eventListener sur certaines cases)
            this.cells[i].addEventListener('click', onClick);
        }

        function playTurn(clickedCell) {
            clickedCell.classList.remove("empty");
            clickedCell.classList.add(self.activePlayer);
            clickedCell.removeEventListener('click', onClick); //empêche de rejouer sur la même case
            self.switchPlayer();
        }   
    }

    setActivePlayer() {
        //pour le moment déternime le premier joueur de façon aléatoire
        this.activePlayer = this.players[Math.floor(Math.random() * 2)];
        this.switchPlayer();
    }
    
    switchPlayer() {
        this.activePlayer = this.activePlayer == this.players[0] ? this.players[1] : this.players[0];
        
        //Pour le hover sur les cases de la grille
        this.board.classList.remove("x", "o"); 
        this.board.classList.add(this.activePlayer);

        //Pour la section des joueurs
        this.host.classList.remove("activePlayer");
        this.guest.classList.remove("activePlayer");
        if (this.activePlayer == "x") {
            this.host.classList.add("activePlayer");
        } else {
            this.guest.classList.add("activePlayer");
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
    




