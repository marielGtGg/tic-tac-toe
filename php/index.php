<div id="ticTacToeLudo101">
    <div id="pluginHeader">
        <img src="#" alt="Logo">
        <h1 id="pluginTitle">Tic-Tac-Toe</h1>
        <p id="pluginTitleSub">Que le meilleur gagne!</p>
    </div>
    <div id="pluginBody">
        <section id="pluginPlayers">
            <div id="pluginHostPlayer">
                <h3 class="pluginPlayerName" id="pluginHost"><?php echo wp_get_current_user()->display_name; ?></h3>
                <h4 class="pluginPlayerNumber">Joueur 1</h4>
                <ul>
                    <li id="pluginHostWon">2 victoires</li>
                    <li id="pluginHostLost">1 défaite </li>
                    <li id="pluginHostTie">1 nulle</li>
                </ul>
            </div>
            <div id="pluginGuestPlayer">
                <h3 class="pluginPlayerName" id="pluginGuest">Monsieur Tac</h3>
                <h4 class="pluginPlayerNumber">Joueur 2</h4>
                <ul>
                    <li id="pluginGuestWon">1 victoire</li>
                    <li id="pluginGuestLost">2 défaites </li>
                    <li id="pluginGuestTie">1 nulle</li>
                </ul>
            </div>
        </section>
       <section id="pluginGameContainer">
            <div id="pluginGameGrid">
                <div class="pluginGameMatrix H1"></div>
                <div class="pluginGameMatrix H2"></div>
                <div class="pluginGameMatrix V1"></div>
                <div class="pluginGameMatrix V2"></div>
                <div class="pluginGameCell A1"></div>
                <div class="pluginGameCell A2"></div>
                <div class="pluginGameCell A3"></div>
                <div class="pluginGameCell B1"></div>
                <div class="pluginGameCell B2"></div>
                <div class="pluginGameCell B3"></div>
                <div class="pluginGameCell C1"></div>
                <div class="pluginGameCell C2"></div>
                <div class="pluginGameCell C3"></div>
            </div>
        </section>
        <!-- <section id="pluginGameGrid">
            <div id="case1"></div>
            <div id="case2"></div>
            <div id="case3"></div>
            <div id="case4"></div>
            <div id="case5"></div>
            <div id="case6"></div>
            <div id="case7"></div>
            <div id="case8"></div>
            <div id="case9"></div>
        </section> -->
        <section id="pluginParameters">
            <form>
                <section id="pluginFormFirstPlayer">
                    <h5>Premier joueur</h5>
                    <div>
                      <input type="radio" id="pluginRandom"
                       name="pluginFirstPlayer" value="formRandom" checked>
                      <label for="pluginRandom">Aléatoire</label>
                      <input type="radio" id="pluginLastWin"
                       name="pluginFirstPlayer" value="formLastWinner">
                      <label for="pluginLastWin">Dernier vainqueur</label>
                      <input type="radio" id="pluginLastLost"
                       name="pluginFirstPlayer" value="formLastLoser">
                      <label for="pluginLastLost">Dernier perdant</label>
                      <input type="radio" id="pluginFirstHost"
                       name="pluginFirstPlayer" value="formPlayerHost">
                      <label for="pluginFirstHost">Joueur 1</label>
                      <input type="radio" id="pluginFirstGuest"
                       name="pluginFirstPlayer" value="formPlayerGuest">
                      <label for="pluginFirstGuest">Joueur 2</label>
                    </div>
                </section>
                <section id="pluginFormTimeSelection">
                    <h5>Limite de temps</h5>
                    <div>
                      <input type="radio" id="plugin15s"
                       name="pluginTimeRange" value="form15s" checked>
                      <label for="plugin15s">15 sec.</label>
                      <input type="radio" id="plugin30s"
                       name="pluginTimeRange" value="form30s">
                      <label for="plugin30s">30 sec.</label>
                      <input type="radio" id="pluginTimeless"
                      name="pluginTimeRange" value="formTimeless">
                     <label for="pluginTimeless">Illimité</label>
                    </div>
                </section>
                <div>
                  <p class="button">Réinitialiser</p>
                </div>
              </form>
              <!-- test -->
        </section>
    </div>
</div>
