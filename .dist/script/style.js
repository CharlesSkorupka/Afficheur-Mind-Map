/*Affiche la page avec du style */
export function changeStyle(base = new item()) {
  for (var i = 0; i < 2; i++) {
    // Affiche 20 branches max
    // Ajouter 1 grand titre
    if (base.dependance[0].dependance[i].contenue != undefined) {
      var Niveau1 = document.getElementById("Liste1"); // Récupère la liste principale
      console.log(base.dependance[0].dependance[i].contenue);
      Niveau1.innerHTML +=
        '<li class="Front">' +
        base.dependance[0].dependance[i].contenue +
        "<ul id=Titre" +
        i +
        "></ul></li>"; // Ajoute la liste du premier niveau (for). Ajoute un id pour la récupérer après.
      // .innerText -> écrit directement dans html
      // .innerHTML -> écrit et triate le rendu dans html
      // L'utilisateur pourais injecter du code ? -> plus sécurisé avec : var = document.createElement("li")

      for (var j = 0; j < 2; j++) {
        if (
          base.dependance[0].dependance[i] == null ||
          base.dependance[0].dependance[i].dependance[j] == null
        ) {
          break;
        } // Vérifie que les branches précédente et actuelle ne sont pas vide.
        else {
          // Ajouter 1 sous titre
          var Niveau2 = document.getElementById("Titre" + i);
          Niveau2.innerHTML +=
            '<li id="hid">' +
            base.dependance[0].dependance[i].dependance[j].contenue +
            "<ul id=SousTitre" +
            j +
            "></ul></li>";
        }

        for (var k = 0; k < 2; k++) {
          if (
            base.dependance[0].dependance[i].dependance[j] == null ||
            base.dependance[0].dependance[i].dependance[j].dependance[k] == null
          ) {
            break;
          } else {
            // Ajouter 1 sous sous titre
            var Niveau3 = document.getElementById("SousTitre" + j);
            Niveau3.innerHTML +=
              '<li id="hid">' +
              base.dependance[0].dependance[i].dependance[j].dependance[k]
                .contenue +
              "<ul id=SoussousTitre" +
              k +
              "></ul></li>";
          }

          for (var l = 0; l < 2; l++) {
            if (
              base.dependance[0].dependance[i].dependance[j].dependance[k] ==
                null ||
              base.dependance[0].dependance[i].dependance[j].dependance[k]
                .dependance[l] == null
            ) {
              break;
            } else {
              // Ajouter 1 sous sous sous titre
              var Niveau4 = document.getElementById("SoussousTitre" + k);
              Niveau4.innerHTML +=
                '<li id="hid">' +
                base.dependance[0].dependance[i].dependance[j].dependance[k]
                  .contenue +
                "<ul id=SoussousTitre" +
                l +
                "></ul></li>";
            }
          }
        }
      }
    }
  }
}
class item {
  constructor(contenue) {
    this.contenue = contenue; // Récupère le contenue d'un item
    this.dependance = []; // Permet de gérer les dépendance de l'item
  }
}
