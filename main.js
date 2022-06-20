import { loadFile } from "./.dist/script/getXml";
import { xmlSort } from "./.dist/script/xml2js";
import { GestionDepandance } from "./.dist/script/object";
import { changeStyle } from "./.dist/script/style";
import { changeFormat } from "./.dist/script/changeFormat";
/*
Permet d'executer une à une les fonctions nécessaires à la conversion.
Démarrer le server dans le dossierxmlToJs : npm run dev
*/

document.getElementById("input").onchange = function () {
  console.log(document.getElementById("input").files[0]);
  document.getElementById("textInsert").textContent = `${
    document.getElementById("input").files[0].name
  } est chargé`;
  document.getElementById("imgFile").setAttribute("src", ".dist/pic/check.svg");
};

document.getElementById("boutonValider").onclick =
  async function transformXml() {
    //On check s'il y a un cahngement au niveau de l'input des fichiers
    var file = document.getElementById("input").files[0]; //Save the input file
    console.log(file);

    //Charge le fichier et le transforme en string
    var text = loadFile(file);
    console.log(text);

    //Tentative de normaliser le string pour éviter les problèmes de caractères spéciaux
    // text.normalize("NFD").replace(/\p{Diacritic}/gu, "")

    //Transformation string vers objet
    var jObjet = await xmlSort(text);

    //On enlève la page précédente
    document.getElementById("insertPage").style.display = "none";
    var Main = document.getElementById("noteTitle");
    var pathOpbjet = jObjet.map.node;

    //On change le titre
    Main.innerHTML = pathOpbjet.TEXT;

    // On adapte notre objet
    var myLastObject = GestionDepandance(
      pathOpbjet,
      new item(pathOpbjet.TEXT),
      0
    );

    //On execute le css par dessus les élément sque l'on vient d'afficher
    var lien_css = document.createElement("link");
    lien_css.href = ".dist/styles/style.css";
    lien_css.rel = "stylesheet";
    lien_css.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(lien_css);

    // On enlève la liste pour la remplacer par une stylisée
    document.getElementById("Corps").style.display = "none";

    //On affiche le bouton de switch
    document.getElementById("toogle").style.display = "flex";

    //On affiche le deuxième design
    await changeStyle(myLastObject);
  };
// //Switch pour changer de style 
// document.getElementById("toogle").onclick = changeFormat();


//classe contenant les valeurs de la mind map
class item {
  constructor(contenue) {
    this.contenue = contenue; // Récupère le contenue d'un item
    this.dependance = []; // Permet de gérer les dépendance de l'item
  }
}
