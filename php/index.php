<div id="ticTacToeLudo101">
    <div id="pluginHeader">
        <div id="pluginTitle">
            <img id="title" src="../wp-content/plugins/tic-tac-toe/images/tictactoe.svg" alt="Tic-Tac-Toe">
            <p>QUE LE MEILLEUR GAGNE!</p>
        </div>
        <img id="logo" src="../wp-content/plugins/tic-tac-toe/images/ludo101.svg" alt="Logo">
    </div>
    <div id="pluginBody">
        <section id="pluginPlayers">
            <div id="pluginHostPlayer" class="box-shadow">
                <h2 class="pluginPlayerName" id="pluginHost"><?php echo wp_get_current_user()->display_name; ?></h2>
                <h3 class="pluginPlayerNumber">JOUEUR 1</h3>
                <ul>
                    <li id="pluginHostWon">2 victoires</li>
                    <li id="pluginHostLost">1 défaite </li>
                    <li id="pluginHostTie">1 nulle</li>
                </ul>
            </div>
            <div id="pluginGuestPlayer" class="box-shadow activePlayer">
                <h2 class="pluginPlayerName" id="pluginGuest">Monsieur Tac</h2>
                <h3 class="pluginPlayerNumber">JOUEUR 2</h3>
                <ul>
                    <li id="pluginGuestWon">1 victoire</li>
                    <li id="pluginGuestLost">2 défaites </li>
                    <li id="pluginGuestTie">1 nulle</li>
                </ul>
            </div>
        </section>
       <section id="pluginGameContainer">
            <div id="pluginGameGrid" class="guest">
                <div class="pluginGameCell A1 empty"></div>
                <div class="pluginGameCell A2 empty"></div>
                <div class="pluginGameCell A3 x"></div>
                <div class="pluginGameCell B1 o"></div>
                <div class="pluginGameCell B2 o"></div>
                <div class="pluginGameCell B3 x"></div>
                <div class="pluginGameCell C1 x"></div>
                <div class="pluginGameCell C2 empty"></div>
                <div class="pluginGameCell C3 empty"></div>
            </div>
        </section>
        <section id="pluginParameters">
            <form class="box-shadow">
                <section id="pluginFormFirstPlayer">
                    <h4>Premier joueur</h4>
                    <ul>
                        <li>
                            <input type="radio" id="pluginRandom" name="pluginFirstPlayer" value="formRandom" checked>
                            <label for="pluginRandom">Aléatoire</label>
                        </li>
                        <li>
                            <input type="radio" id="pluginLastWin" name="pluginFirstPlayer" value="formLastWinner">
                            <label for="pluginLastWin">Dernier vainqueur</label>
                        </li>
                        <li>
                            <input type="radio" id="pluginLastLost" name="pluginFirstPlayer" value="formLastLoser">
                            <label for="pluginLastLost">Dernier perdant</label>
                        </li>
                        <li>
                            <input type="radio" id="pluginFirstHost" name="pluginFirstPlayer" value="formPlayerHost">
                            <label for="pluginFirstHost">Joueur 1</label>
                        </li>
                        <li>
                            <input type="radio" id="pluginFirstGuest" name="pluginFirstPlayer" value="formPlayerGuest">
                            <label for="pluginFirstGuest">Joueur 2</label>
                        </li>
                    </ul>
                </section>
                <section id="pluginFormTimeSelection">
                    <h4>Limite de temps</h4>
                    <ul>
                        <li>
                            <input type="radio" id="plugin15s" name="pluginTimeRange" value="form15s" checked>
                            <label for="plugin15s">15 sec.</label>
                        </li>
                        <li>
                            <input type="radio" id="plugin30s" name="pluginTimeRange" value="form30s">
                            <label for="plugin30s">30 sec.</label>
                        </li>
                        <li>
                            <input type="radio" id="pluginTimeless" name="pluginTimeRange" value="formTimeless">
                            <label for="pluginTimeless">Illimité</label>
                        </li>
                    </ul>
                </section>
            </form>
            <div class="button box-shadow">Réinitialiser</div>
            <!-- test -->
        </section>
    </div>
</div>
