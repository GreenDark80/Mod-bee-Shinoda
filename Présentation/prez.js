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
                        <img class="imgtitle" src="../Assets/titrePrez.png">
                    </div>        
                    <div class="retour">
                        <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                    </div>
                    <p class="number1"> 1/6 </p>`,

                    `<p> <div class="apparence">
                        <p class="label"> 
                            Apparence : 
                            <span>  Joõbachi est 2 fois plus grande qu’un humain adulte et possède une mâchoire avec des dents acérées, 
                                    un dard mortel ainsi que des ailes capables de provoquer d'intenses bourrasques de vent d’un seul battement.
                                    Elle possède également de magnifique poils dorés, de grandes oreilles capables de percevoir
                            </span>
                        </p>
                    </div></p>
                    <div class="flex-box">
                        <p class="number2"> 3/6 </p>
                        <button class="btn1" onclick="Pageprecedente(1)">Page précédente</button>
                    </div>`,

                    `<div class="caractere">
                         <p class="label"> 
                            Caractère : 
                            <span>  
                                Joõbachi, autrefois si bienveillante envers les humains, les considère désormais comme des monstres 
                                sans cœur ne pouvant régler les conflits sans verser du sang. Elle est également très protectrice envers 
                                ses subordonnées abeilles ainsi que ceux qu’elle tient en estime et n'hésitera pas à tuer tous ceux qui 
                                cherchent à s'en prendre à eux. 
                            </span>
                        </p>
                    </div>
                    <div class="flex-box">
                        <p class="number2"> 5/6 </p>
                        <button onclick="Pageprecedente(2)">Page précédente</button>
                    </div>`]
content_page2 = [`  <div class="nom">
                        <p class="label1"> Nom : <span>  Joõbachi </span></p>
                    </div>
                    <hr>
                    <div class="title">
                        <p class="label1"> Titre : <br><span>  Reine des abeilles /</span><br><span> La reine oubliée </span></p>
                    </div>
                    <div class="flex-box">
                        <p class="number2"> 2/6 </p>
                        <button onclick="PageSuivante(2)">Page Suivante</button>
                    </div>`,

                `<p> 
                    <div class="apparence2">
                        <p class="label">
                            <span>  
                                 le moindre son ainsi 
                                que des antennes percevant les vibrations.
                                <img class="imgappar" src="../Assets/reine des abeilles">
                            </span>
                        </p>
                    </div>
                </p>
                <div class="flex-box">
                        <p class="number2"> 4/6 </p>
                        <button onclick="PageSuivante(3)">Page Suivante</button>
                </div>`,
                
                `<div class="caractere2">
                    <p class="label">
                        <span>  
                            Elle ne sort que très peu et ne côtoie personne à part ses subordonnées. 
                        </span>
                    </p>
                </div>
                <div class="retour">
                        <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                </div>
                <p class="number6"> 6/6 </p>`]