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
                        <img class="imgtitle" src="../Assets/titreHistory.png">
                    </div>
                    <div class="retour">
                        <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                    </div>
                    <p class="number1"> 1/16 </p>`,

                    `<p class="historytell">
                        Mais ce garçon, au lieu de rentrer chez lui, observa le comportement étrange des abeilles.
                        En effet, celles-ci, au lieu de rentrer dans leurs ruches respectives, sorientaient tous dans un seul et même endroit se situant au fin fond de la forêt, un lieu dont on lui avait interdit l’accès. 
                        Curieux comme il était et malgré les restrictions qui lui avaient été donnés, le garçon outrepassa l’interdiction et suivit les abeilles. 
                        Après une longue marche, il fut étonné de voir toutes les abeilles qu’il avait suivies jusque-là, converger vers l’entrée d’une grotte et disparaître dans l’obscurité. Craignant de ne plus jamais pouvoir jouer avec eux dans la forêt, il prit son courage à deux mains et entra dans la grotte. Dès lors, qu’il pénétra dans la grotte, il se sentit aspiré par le sol. Bien qu’il se débattait, il sombrait de plus en plus dans celui-ci. 
                        Lorsqu’il fut enseveli jusqu'à la taille, il commença à penser à ses parents, à qui il n’avait pas pu dire au revoir.
                    </p>    
                    <div class="flex-box">
                        <p class="number3"> 3/16 </p>
                        <button class="but2" onclick="Pageprecedente(1)">Page précédente</button>
                    </div>`,

                    `<p class="historytell"><span class="titlehistory">LA RENCONTRE :</span> Dans un coin reculé de la forêt dense et rocheuse de la région, vivait une reine abeille ermite nommée Joõbachi. 
                        Celui-ci, au début réticent, se laissa tout de même faire et laissa les abeilles le guider le long de ces dédales. 
                        Et, plus le jeune homme avançait dans la grotte, plus une odeur distincte s’échappait des murs. 
                        Le garçon fut immédiatement surpris par cette odeur, si familière pour lui, qu’il sentait tout le temps lorsqu’il se promenait dans son clan : l’odeur du miel. 
                        A ce moment, il compris que cette grotte n'était pas comme les autres : celle ci était une ruche géante. 
                        Alors qu’il était toujours porté toujours plus profondément dans la grotte par les abeilles, le jeune garçon vit peu à peu les parties se durcir jusqu’à créer une sorte de cristal doré transparent. 
                        Peu après avoir constaté ce changement, Shisei vit une grande salle apparaître sous ses yeux.

                    </p> 
                    <div class="flex-box">
                        <p class="number5"> 5/16 </p>
                        <button  class="but4" onclick="Pageprecedente(2)">Page précédente</button>
                    </div>`,

                    `<p class="historytell">
                        Shisei, encore un peu déconcerté, mais également émerveillé, lui demanda « Et comment vous appelez vous ? ». 
                        La reine, déstabilisé par sa demande, hésita quelques secondes avant de lui répondre « Je n’ai aucun nom, il n’est pas coutume de se donner des noms chez les abeilles, tout le monde m’appelle par mon grade.» 
                        puis continua en ajoutant « Mais si tu tiens tant que ca a me nommer, alors je t’autorise à me donner un nom ». 
                        Shisei, quand a lui, n'hésita pas une seule seconde et rétorqua « Dès lorsque je vous ai vu, j’ai cru que c’était vous, la divinité protectrice des abeilles. 
                        Je vous nommerai donc “Joõbachi”. ». Après un instant de flottement, qui parut une éternité pour le jeune Shisei, la Reine annonça : « Joõbachi… bien, désormais, tel est mon nom ». 
                        Ces paroles remplissaient de bonheur le jeune garçon qui se tenait la. 
                        Cette nuit-là, à cause de l’orage incessant, Shisei n’a pas pu rentrer chez lui et a été obligé de rester dormir dans la ruche, néanmoins, il ne put s'empêcher de discuter toute la nuit avec sa nouvelle amie.
                    </p> 
                    <div class="flex-box">
                        <p class="number7"> 7/16 </p>
                        <button  class="but6" onclick="Pageprecedente(3)">Page précédente</button>
                    </div>`,

                    `<p class="historytell">
                        <span class="titlehistory">LE SACRIFICE :</span>
                        Le jeune homme se cacha et écouta les braconniers interroger les habitants du village kamizuru. 
                        Lorsqu’il entendit le braconnier dire « Ou est la reine des abeilles, ne jouez pas a ca avec moi, je sait qu’elle est proche d’ici », son sang de fit qu’un tour, les braconniers en avaient après Joõbachi. 
                        En voyant les têtes effrayées de tous ses compagnons, il prit la décision de retourner le plus rapidement à la ruche prévenir son amie. 
                        Le jeune Shisei couru de toutes ses forces afin de prévenir au plus vite Joõbachi. Une fois sur place, l’imposante abeille se tenait là, devant la grotte. 
                        Elle savait ce qu’il se passait, et que le jeune homme reviendrait la prévenir. Elle avait donc décidé d’attendre son retour pour aider le village. 
                    </p> 
                    <div class="flex-box">
                        <p class="number9"> 9/16 </p>
                        <button  class="but8" onclick="Pageprecedente(4)">Page précédente</button>
                    </div>`,

                    `<p class="historytell">
                        Dès lors, un combat acharné commença entre les braconniers et la reine. 
                        Durant ce combat, Joõbachi du s’aider de toutes les abeilles afin de pouvoir rivaliser avec les braconniers. 
                        Malheureusement, de lourdes pertes ont été à déplorer dans les 2 camps. 
                        Quelques semaines plus tard, alors que la tribu des kamizuru, ayant perdu tout espoir de retrouver leur vie d’avant, ont décidé, à l'unanimité, de devenir vagabond et de vendre leur miel dans tout le monde ninja. 
                        Suite à cette décision beaucoup des kamizurus restants ont décidé de mener une vie ailleurs, pour au final, qu’il ne reste qu’une petite poignée de quelques individus, dont Shisei, toujours en vadrouille.
                        <span class="suivre2"> A SUIVRE... </span>
                    </p> 
                    <div class="flex-box">
                        <p class="number11"> 11/16 </p>
                        <button  class="but10" onclick="Pageprecedente(5)">Page précédente</button>
                    </div>`,

                    `<p class="historytell">
                        Suivant leurs instinct, et, en prenant en compte que ce village était à bonne distance des autres village, ce qui est utile pour le commerce, cette tribu a immédiatement pensé à s'installer ici. 
                        Voici comment le clan kamizuru a vu le jour à iwa. Mais ce n’est pas ici que notre histoire se termine.
                        <span class="suivre2"> A SUIVRE... </span>
                    </p> 
                    <div class="flex-box">
                        <p class="number13"> 13/16 </p>
                        <button  class="but12" onclick="Pageprecedente(6)">Page précédente</button>
                    </div>`,

                    `<p class="historytell">
                        Impatiente de le retrouver, elle fonça sans se détourner vers cet espoir, pour au final le retrouver, heureux, en train de jouer avec les autres enfants du village. 
                        Certain qu’il l'avait oublié, elle prit la décision de ne plus faire confiance aux humains, et de se retirer dans la forêt de pic de pierre. 
                        Depuis ce jour, personne ne l’a jamais revu.
                        C’est ainsi que se termine l’histoire de la reine oubliée, Joõbachi.
                        <span class="fin">FIN</span>
                    </p> 
                    <div class="flex-box">
                        <p class="number15"> 15/16 </p>
                        <button  class="but14" onclick="Pageprecedente(7)">Page précédente</button>
                    </div>`]

content_page2 = [`<p class="historytell">
                    <span class="titlehistory">Introduction :</span> Dans un coin reculé de la forêt dense et rocheuse de la région, vivait une reine abeille ermite nommée Joõbachi. 
                    Elle était facilement reconnaissable grâce à sa taille gigantesque et faisait autrefois partie du clan kamizuru, 
                    clan qu’elle a totalement renié après qu’elle fut oubliée, peu après l’arrivée du clan kamizuru à Iwa.
                    Tout commença lorsqu’une tribu eut l’idée d’élever des abeilles afin de faire une production de miel plus facile. 
                    Dans cette tribu, appelée kamizuru, en référence à leur culte, du dieu des abeilles Joõbachi, habitait un jeune homme, 
                    très curieux et désireux d'aventure, nommé Shisei. Shisei, fasciné par les abeilles, allait souvent jouer dans la forêt à côté de la tribu, 
                    forêt qui était l’abri de nombreuses variétés d’abeilles, plus incroyables les unes que les autres. Un jour, en allant jouer dans cette forêt, un orage éclata sans crier gare. 
                </p>
                <div class="flex-box">
                    <p class="number2"> 2/16 </p>
                    <button class="but1" onclick="PageSuivante(2)">Page Suivante</button>
                </div>`,

                `<p class="historytell">
                    Le garçon, euphorique à l’idée d’avoir été sauvé par ses amies, les remercia de tout cœur. Mais, bien que le garçon évoqua le fait de vouloir sortir, les abeilles l'emmènent au plus profond de la grotte. 
                    Soudain, alors qu’il était enseveli jusqu’au torse et qu’il avait perdu espoir, il pria Joõbachi, la divinité du clan, quand tout a coup, toutes les abeilles réapparurent et travaillèrent ensemble pour le sortir de la. 
                    Le garçon, euphorique à l’idée d’avoir été sauvé par ses amies, les remercia de tout cœur. Mais, bien que le garçon évoqua le fait de vouloir sortir, les abeilles l'emmènent au plus profond de la grotte. 
                    <span class="suivre"> A SUIVRE... </span>
                </p>  
                <div class="flex-box">
                    <p class="number4"> 4/16 </p>
                    <button class="but3" onclick="PageSuivante(3)">Page Suivante</button>
                </div>`,

                `<p class="historytell">
                    Le garçon fut directement fasciné, de voir que celle qu’il avait sous ses yeux était une abeille gigantesque, 
                    plus grande que toutes celles qu’il avait pu croiser dans la forêt. 
                    Néanmoins, lorsque l’abeille se redressa sur ses pattes, il fut autrement déconcerté d’entendre un voix résonner dans sa petite tête. 
                    En effet, cette abeille monstrueuse possédait, entre autres, le pouvoir de lire et de transmettre les pensées aux gens qu’elle souhaitait.
                    Alors que le garçon était toujours sous le choc, l’abeille s’exprima «Bonjour Shisei,  j’attendais ta venue, les abeilles de la forêt m’ont beaucoup parlé de toi, et je dois dire que je commençais à m’impatienter de te rencontrer. ».
                    Sans aucune réponse du garçon, toujours bouché bée de ce qu’il était en train de vivre, l’abeille continua « Je vois que tu est surpris, c’est vrai que ce n’est pas tous les jours qu’on croise une abeille géante télépathe. Pour tout te dire, je suis leur reine » dit-elle en désignant toutes les abeilles qui s'étaient rassemblées derrière celle ci.
                </p>  
                <div class="flex-box">
                    <p class="number6"> 6/16 </p>
                    <button class="but5" onclick="PageSuivante(4)">Page Suivante</button>
                </div>`,

                `<p class="historytell">                   
                    Au petit matin, Shisei rentra chez lui grâce aux abeilles qui le guidèrent jusqu'à son village. 
                    Ses parents, tellement inquiet de ne pas l’avoir vu rentrer la nuit précédente, lui passèrent un savon et 
                    lui dirent de ne plus jamais refaire cela, mais évidemment, les mois suivant, Shisei allait tout les jours voir Joõbachi, 
                    bien sur sans en parler à ses parents, il allait même jusqu'à passer quelques nuits la bas, en mentant à ses parents pour ne 
                    pas qu’ils s'inquiètent. Il y allait tellement souvent que Shisei la considérait comme un membre de la tribu kamizuru et 
                    l’avait rebaptisé Joõbachi Kamizuru. Ils étaient heureux de pouvoir se voir, mais un jour, alors qu’il rentrait de la ruche, 
                    il vit de la fumée s’élever au-dessus du village. Pris de panique, Shisei couru et, lorsqu’il arriva au village, un spectacle de désolation 
                    s’offrait à lui, les maisons étaient en train de brûler et des braconniers avaient l’air de chercher quelque chose.
                    <span class="suivre2"> A SUIVRE... </span>
                </p>  
                <div class="flex-box">
                    <p class="number8"> 8/16 </p>
                    <button class="but7" onclick="PageSuivante(5)">Page Suivante</button>
                </div>`,

                `<p class="historytell">   
                    Dès qu’elle aperçut Shisei, elle déploya pour la première fois devant lui ses grandes ailes et, en une fraction de seconde, l'attrapa de ses pattes et l'emmena dans les airs. 
                    Malgré l’urgence de la situation, Shisei n’a pas pu s’empêcher d’apprécier cette sensation qu’il n'avait jamais ressenti auparavant. 
                    Dès le départ, Joõbachi avait l’intention de confronter les braconniers, pour laisser le temps a Shisei et sa tribu de s’enfuir. 
                    Lorsqu’ils arrivèrent le village était presque totalement détruit et peu de personnes de la tribu était encore en vie.    
                    Alors que le jeune homme pensait pouvoir s’enfuir avec les membres de la tribu restant et Joõbari, celle-ci le déposa auprès de ce qu’il restait de sa tribu puis fut face aux braconniers.            
                    Shisei n’eut même pas le temps de réagir qu’il était déjà emporté par les quelques villageois restants. 
                    Bien qu’il espérait qu’elle s’en sorte, Shisei avait une part de doute quant à sa capacité à gérer un grand groupe d’ennemis. 
                </p>  
                <div class="flex-box">
                    <p class="number10"> 10/16 </p>
                    <button class="but9" onclick="PageSuivante(6)">Page Suivante</button>
                </div>`,

                `<p class="historytell">   
                        <span class="titlehistory">L'OASIS :</span>
                        Après une longue marche dans le pays de la terre, la troupe a décidé de passer séjour dans une forêt de pics de pierre. 
                        Forêt de pierre où Shisei, du haut d’un grand pic de pierre, a tenté d’envoyer une abeille rechercher Joõbachi. 
                        Néanmoins, avant que celle-ci puisse revenir, Shisei fut traîné de force hors de cette forêt de pics de pierre afin de rejoindre un village, non loin de la. 
                        Puis, au détour d’une montagne, après une longue journée de marche, ils tombèrent sur le village très récent et prospère dont ils avaient tant entendu parler : Iwa. 
                        Dès leur entrée dans ce village, ils ont senti l’atmosphère bienveillante de ce village, regroupant toutes sortes de personnes aux capacités différentes.               
                </p>
                <div class="flex-box">
                    <p class="number12"> 12/16 </p>
                    <button class="but11" onclick="PageSuivante(7)">Page Suivante</button>
                </div>`,

                `<p class="historytell">   
                    <span class="titlehistory">L'OUBLI :</span>
                    En effet, à quelques kilomètres de là, Joõbachi, ayant réussi à remporter la bataille, 
                    et ayant reçu l’abeille de Shisei, arriva difficilement jusqu'à l'endroit où Shisei avait envoyé cette abeille: la forêt de pics de pierre. 
                    Ne trouvant pas son ami, Joõbachi pensa tout d’abord qu’il lui était arrivé quelque chose. 
                    Puis, lorsqu'elle trouva iwa, elle prit la décision de se miniaturiser afin de passer inaperçue. 
                    Une fois dans ce village, elle vit d'innombrables personnes dans les rues.
                    Et, bien qu’elle n’aimait pas du tout être entourée de beaucoups de gens, elle fait un effort et chercha son ami parmi la foule. 
                    Après de longues minutes sans résultat, et alors qu’elle allait abandonner, elle entendit la voix de Shisei.
                </p>
                <div class="flex-box">
                    <p class="number12"> 14/16 </p>
                    <button class="but11" onclick="PageSuivante(8)">Page Suivante</button>
                </div>`,

                `<p class="historytell">   
                <span class="endword"> Merci d'avoir lu cette histoire, a bientôt ! </span>
                <div class="retour">
                    <a href="../index.html"><input type="submit" value="Accueil" class="button-leave"/></a>
                </div>
                </p>
                <div class="flex-box">
                    <p class="number16"> 16/16 </p>
                </div>`]