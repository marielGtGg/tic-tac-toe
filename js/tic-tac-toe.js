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

        this.timeParam = document.querySelectorAll('input[name="pluginTimeRange"]')
        /*[
            document.getElementById("plugin15s"),
            document.getElementById("plugin30s"),
            document.getElementById("pluginTimeless")            
        ];*/
        this.runningTimer;



        this.winConditions = [
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

    winVerif() {
        let roundWon = false;
        for (let i = 0; i < this.winConditions.length; i++) {
            //this.winCondition = winningConditions[i];
            //this.winCondition[i][0] nous donne la classe pour chaque condition de victoire
            //this.winCondition[i][1] nous donne accès au array qui contient les 3 cases à vérifier
            //ici on va chercher le statut des trois cases à vérifier
            const a = this.boardStatus[this.winConditions[i][1][0]];
            const b = this.boardStatus[this.winConditions[i][1][1]];
            const c = this.boardStatus[this.winConditions[i][1][2]];
            /*if (a === "" || b === "" || c === "") {
                continue;
            }*/ //pas nécessaire, si la condition de victoire plus bas n'est pas vraie, la loop va continuer toute seule
             //if (a === b && b === c) { cette véréfication ne fonctionne par parce que quand les trois cases sont "empty", ça devient vrai...
            if (a === this.activePlayer && b === this.activePlayer && c === this.activePlayer) {
                roundWon = true; //peut-être que ce n'est plus nécessaire?
                console.log(this.winConditions[i][0]) // en attendant pour voir que ça fonctionne
               //TODO Mettre la classe de victoire sur this.board. On a déjà accès à la bonne classe avec this.winConditions[i][0].
               //(comme on est toujours à l'intérieur de la loop on est sur le [i] de la victoire)
               //TODO enlever les classes "x" et "o" sur this.board pour désactiver le hover
               //TODO enlever les eventlistner qui reste pour ne plus pouvoir cliquer sur les cases "empty"
               this.updateScore() // fonction à faire
               //break;
                return true; //retourne vrai si on a trouvé une victoire et met fin à la loop
            }  
        }
        return false; //si on est passé au travers de la boucle sans trouver de victoire on retourne faux

        /*if (roundWon) {
            ajouter les lignes sur la victoire ?
        }*/ //Je pense que c'est plus simple de le faire dans la loop précédente au moment où on trouve la victoire et simplement de mettre fin à la loop

    }
    updateScore() {
    }



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
            self.stopTimer();
            if (self.winVerif() === false) { //vérifie s'il faut continuer le jeu ou non
                self.switchPlayer();
                self.decrementTime();    
            }; 
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
    getActiveTimeParam() {
        return document.querySelector('input[name="pluginTimeRange"]:checked').value
    }
    /*
    timeParameterActive(){
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
    */
   /*
    setTimeParamListener() {
        let self = this
        this.timeParam.forEach(function(radioButton) {
            radioButton.addEventListener('click', self.getActiveTimeParam)
        })
    }
*/
    showTime(actualTime) {
        if (actualTime < 10){
            document.getElementById("pluginTimeShow").innerHTML = "00:0"+actualTime;
        }else {
            document.getElementById("pluginTimeShow").innerHTML = "00:"+actualTime;
        }
    }

    decrementTime() {
        let time = this.getActiveTimeParam();
        let self = this;

        document.getElementById("pluginTimeShow").innerHTML = "Le " + this.activePlayer + " joue!";

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
    




