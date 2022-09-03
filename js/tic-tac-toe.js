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

        this.timeParam = [
            document.getElementById("plugin15s"),
            document.getElementById("plugin30s"),
            document.getElementById("pluginTimeless")            
        ];
        this.runningTimer;



        this.winCondition = [
            ["r1", [0, 1, 2]],
            ["r2", [3, 4, 5]],
            ["r3", [6, 7, 8]],
            ["c1", [0, 3, 6]],
            ["c2", [1, 4, 7]],
            ["c3", [2, 5, 8]],
            ["d1", [0, 4, 8]],
            ["d2", [2, 4, 6]]
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

    /*Fonction à lier au bouton reset*/
    resetBoard() {;
        for (var i=0; i< this.cells.length; i++){
            this.cells[i].classList.remove("o", "x", "empty");
            this.cells[i].classList.add("empty");
        }; 
        this.setEventToGrid();  //retire et recrée les eventlistner   
        this.setActivePlayer(); //redétermine le premier joueur de façon aléatoire
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
        ]; //il y a probablement une meilleure façon de faire...
        this.resetTimer(); //remet le timer à 00:00
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
            self.disableParameters();
            clickedCell.classList.remove("empty");
            clickedCell.classList.add(self.activePlayer);
            clickedCell.removeEventListener('click', onClick); //empêche de rejouer sur la même case
            self.boardStatus[clickedCell.id.substring(5)] = self.activePlayer;
            console.log(self.boardStatus) //à enlever par la suite
            self.switchPlayer();
            self.stopTimer();
            self.decrementTime();
        }   
    }

    setActivePlayer() {
        //pour le moment déternime le premier joueur de façon aléatoire
        this.activePlayer = this.players[Math.floor(Math.random() * 2)];
        this.switchPlayer(this);
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
    //DEBUT Fonctions liées au timer
    getActiveTimeParameter(){
        if (document.getElementById("plugin15s").checked == true){
            return 15
        }
        if (document.getElementById("plugin30s").checked){
            return 30
        }
        if (document.getElementById("pluginTimeless").checked){
            return null
        }
    }

    showTime(actualTime) {
        if (actualTime < 10){
            document.getElementById("pluginTimeShow").innerHTML = "00:0"+actualTime;
        }else {
            document.getElementById("pluginTimeShow").innerHTML = "00:"+actualTime;
        }
    }

    decrementTime() {
        let time = this.getActiveTimeParameter();
        let self = this;

        if (!time){
            return false;
        }

        this.runningTimer = setInterval(() => {
            if (time > 0) {
                this.showTime(time);
                time--;
            } else {
                this.selectRandomCell();
                //clearInterval(this.runningTimer);
            }
        }, 1000);
    }
    
    stopTimer(){
        clearInterval(this.runningTimer);
        document.getElementById("pluginTimeShow").innerHTML = "Le " + this.activePlayer + " joue!";
    }

    resetTimer(){
        clearInterval(this.runningTimer);
        this.enableParameters();
        document.getElementById("pluginTimeShow").innerHTML = "00:00";
    }

    selectRandomCell(){
        let emptyCells = document.getElementsByClassName("empty");
        emptyCells[Math.floor(Math.random() * emptyCells.length)].click();
    }

    //FIN Fonctions liées au timer

    disableParameters(){
        for(let i=0; i< this.timeParam.length; i++){
            this.timeParam[i].disabled=true;
        }
    }

    enableParameters(){
        for(let i=0; i< this.timeParam.length; i++){
            this.timeParam[i].disabled=false;
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
    




