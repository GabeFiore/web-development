/*function teste(agr1, agr2){
    console.log(agr1 + agr2);
}
teste(7, 1);

function imprimeNome(name){
    console.log(`Meu nome é ${name}`)
}
imprimeNome("Gabriel");
imprimeNome("Mike");

function cliqueAqui(){
    alert("Óla")
}*/

//CRIANDO VARIÁVEL
const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

tirarDiv.addEventListener("click", function(){
    card.style.display = "none";
});
voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
});
