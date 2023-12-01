// utiliser fetch avec cette api et récupérer les informations en JS
// https://tyradex.vercel.app/api/v1/pokemon/balign
// je prendre les code de projet cine 
async function afficherCarts() {
    // un nombre par hazard
    let min=1;
    let max=1000;
    let randomNum=Math.floor(Math.random()*(max-min+1))+min;
    console.log(randomNum);
  let url=`https://tyradex.vercel.app/api/v1/pokemon/${randomNum}`;
//   je d'utiliser de cette lien pour toutes les informations si ajouter une chifre il affiche une pokemon
  const reponse = await fetch(url);
  const carts = await reponse.json();
//  le div dans html
  const balise = document.querySelector(".container ");
// pour deplacer les codes ici dans html /si tu veus ajouter il faut poser une+ avant egal
  balise.innerHTML = `
  <h2 class="text fs-1 fw-1 ">${carts.name.fr}</h2>
    <img class="img " src=${carts.sprites.shiny} alt="">
    <h6>category: ${carts.category}</h6>
    <div class="d-flex  flex-row justify-content-around align-items-center">
    <h3 > type : ${carts.types[0].name ? carts.types[0].name : '' } </h3>
    <img src="${carts.types[0].image}" alt="">

   `;
}
// quand clic sur le button, execute la fonction qui s'apple affichercarts et quelque changer
let button = document.querySelector(".btn");
button.addEventListener("click", afficherCarts);
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "pink";
  button.style.color = "black";
});
button.addEventListener("click", () => {
  button.style.backgroundColor = "red";
  button.style.color = "white";

  
});
