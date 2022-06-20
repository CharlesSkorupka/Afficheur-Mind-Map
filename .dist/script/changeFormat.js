/*Permet de changer D'affichage entre l'affichage avec css et celui permettant de tout afficher */
export function changeFormat() {
  console.log("coucou")
  if (document.getElementById("Titre").style.display="none") {
    document.getElementById("Corps").style.display = "flex";
    document.getElementById("Titre").style.display = "none";
  } else {
    document.getElementById("Corps").style.display = "none";
    document.getElementById("Titre").style.display = "flex";
  }
}
