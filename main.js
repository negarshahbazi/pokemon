// utiliser fetch avec cette api et récupérer les informations en JS
// https://tyradex.vercel.app/api/v1/pokemon/balign
async function afficherCarts() {
    let min=1;
    let max=1000;
    let randomNum=Math.floor(Math.random()*(max-min+1))+min;
    console.log(randomNum);
  let url=`https://tyradex.vercel.app/api/v1/pokemon/${randomNum}`;
  const reponse = await fetch(url);
  const carts = await reponse.json();
 
  const balise = document.querySelector(".container ");

  balise.innerHTML = `

    <img class="img " src=${carts.sprites.shiny} alt="">
    <h2 class="text-danger fs-1 fw-1 p-5">${carts.name.fr}</h2>
    <h3>category: ${carts.category}</h3>
  
    <div class="d-flex  flex-row justify-content-around align-items-center">
    <h3 > type: ${carts.types[0].name ? carts.types[0].name : '' } </h3>
    <img src="${carts.types[0].image}" alt="">

   `;
}
let button = document.querySelector(".btn");
// console.log(button);

button.addEventListener("click", afficherCarts);
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "pink";
  button.style.color = "black";
});

button.addEventListener("click", () => {
  button.style.backgroundColor = "red";
  button.style.color = "white";

  
});
