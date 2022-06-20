/*Génère la classe item et permet d'afficher la page complète (faible style)*/
export function GestionDepandance(objmap, objFinal, level) {
  //On Crée un object
  var child = new item(objmap.TEXT); //conversion TEXT(xml) vers JS(contenue)
  // On check ces dépendances
  if (objmap.node != undefined) {
    // Détecte s'il a des enfants
    for (var i = 0; i < objmap.node.length; i++) {
      //On parcours nos enfants
      level++;
      GestionDepandance(objmap.node[i], child, level);
      level--;
    }
    objFinal.dependance.push(child);

    createBalise(level, child);
  } else {
    //On a bien un enfant
    // On stocke l'enfant dans le parent
    objFinal.dependance.push(child);
    createBalise(level, child);
  }

  return objFinal;
}

class item {
  constructor(contenue) {
    this.contenue = contenue; // Récupère le contenue d'un item
    this.dependance = []; // Permet de gérer les dépendance de l'item
  }
}

function createBalise(level, child) {
  /* Affichage des éléments en créant */
  var tiny = document.createElement("h1");
  tiny.classList.add(`Block${level}`);
  tiny.textContent = child.contenue;
  var parent = document.getElementById("Corps");
  var previous = document.getElementById("repaire");
  parent.insertBefore(tiny, previous);
  /*Fin de l'affichage*/
}