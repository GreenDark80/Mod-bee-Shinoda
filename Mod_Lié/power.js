function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};
function Pageprecedente(nb) {
    document.getElementById("page1").innerHTML = content_page1[(nb - 1)];
    document.getElementById("page2").innerHTML = content_page2[(nb - 1)];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
content_page1 =  [` <div class="title">
                        <img class="imgtitle" src="../Assets/titrePower.png">
                    </div>        
                    <div class="retour">
                        <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                    </div>
                    <p class="number1"> 1/6 </p>`,

                    `<p>
                        <div class="powertell2">
                            <div>
                                <span class="Jutsuname"> Bénédiction de la reine :</span> 
                                Une énergie régénératrice apparaît dans le corps et permet à l'utilisateur de régénérer 
                                ses blessures et son chakra.
                            </div>
                            <div>
                                <span class="effects">Effets sur l'adversaire :</span>
                                Aucun
                                <br>
                                <span class="effects">Effets sur l'utilisateur :</span>
                                Regen
                            </div>
                        </div>
                    </p>
                    <div class="flex-box">
                        <p class="number3"> 3/6 </p>
                        <button class="but2" onclick="Pageprecedente(1)">Page précédente</button>
                    </div>`,

                    `<p>
                        <div class="powertell">
                            <span class="category"> Jutsu level 3 :</span>
                            <div>
                                <span class="Jutsuname"> Jugement de la reine mère :</span> 
                                Joõbachi envoie une grande quantité de chakra à la personne qui retrouve toutes ses compétences 
                                grandement décuplées et le rend invulnérable.
                            </div>
                            <div>
                                <span class="effects">Effets sur l'adversaire :</span>
                                Aucun
                                <br>
                                <span class="effects">Effets sur l'utilisateur :</span>
                                Speed + Strength + Jump boost + Regen
                            </div>
                        </div>
                    </p>
                    <div class="flex-box">
                        <p class="number5"> 5/6 </p>
                        <button class="but4" onclick="Pageprecedente(2)">Page précédente</button>
                    </div>`]
content_page2 = [`<p>
                    <div class="powertell">
                        <span class="category"> Jutsu level 1 :</span>
                        <div>
                            <span class="Jutsuname"> Jet de miel :</span> 
                            La personne utilise le chakra de Joõbachi afin de concentrer une quantité de miel depuis sa bouche pour ensuite 
                            le cracher devant lui pour emprisonner l'ennemi dans un cocon. 
                        </div>
                        <div>
                            <span class="effects">Effets sur l'adversaire :</span>
                            Slowness 
                            <br>
                            <span class="effects">Effets sur l'utilisateur :</span>
                            Aucun
                        </div>
                    </div>

                    <div class="powertell">
                        <div>
                            <span class="Jutsuname"> Marée de miel :</span> 
                            La personne utilise le chakra de Joõbachi afin de concentrer une énorme quantité de miel 
                            depuis sa bouche pour ensuite le cracher autour de lui pour submerger l'ennemi et lui faire des dégâts.
                        </div>
                        <div>
                            <span class="effects">Effets sur l'adversaire :</span>
                            Aucun
                            <br>
                            <span class="effects">Effets sur l'utilisateur :</span>
                            Aucun
                        </div>
                    </div>
                </p>
                <div class="flex-box">
                    <p class="number2"> 2/6 </p>
                    <button class="but1" onclick="PageSuivante(2)">Page Suivante</button>
                </div>`,

                `<p>
                    <div class="powertell">
                        <span class="category"> Jutsu level 2 :</span>
                        <div>
                            <span class="Jutsuname"> Percée transcendantale :</span> 
                            Utilise la puissance des ailes donné par le mod ermite pour se projeter très rapidement en avant 
                            afin d’asséner un puissant coup à l'adversaire renforcé par la vitesse qui lui fera des dégâts et l’éloignera.
                        </div>
                        <div>
                            <span class="effects">Effets sur l'adversaire :</span>
                            Aucun
                            <br>
                            <span class="effects">Effets sur l'utilisateur :</span>
                            Aucun
                        </div>
                    </div>

                    <div class="powertell">
                        <div>
                            <span class="Jutsuname"> Capture épineuse : </span> 
                            Invoque des abeilles qui ralentit l’ennemi, lui obstrue la vue et l’empoisonne.
                        </div>
                        <div>
                            <span class="effects">Effets sur l'adversaire :</span>
                            Slowness et Poison
                            <br>
                            <span class="effects">Effets sur l'utilisateur :</span>
                            Aucun
                        </div>
                    </div>
                </p>
                <div class="flex-box">
                    <p class="number4"> 4/6 </p>
                    <button class="but3" onclick="PageSuivante(3)">Page Suivante</button>
                </div>`,
                
                `<p class="powertell">   
                    <span class="endword"> Voici tout les jutsu qu'elle pourrait permettre d'avoir, a bientôt ! </span>
                    <div class="retour">
                        <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                    </div>
                </p>
                <div class="flex-box">
                    <p class="number6"> 16/16 </p>
                </div>`]