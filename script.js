let nombreAllumettes = 50;
let allumettesChoisies
let arrayAllum = []
const CONTAINER = document.getElementById('image-container');

function afficherImageAllumettes() {
    for (const IMG of CONTAINER.children) {
        IMG.remove()
    }
    for (let i = 0; i < nombreAllumettes; i++) {
        let imageAllumettes = document.createElement('img');
        imageAllumettes.src = "allumette.png"; 
        imageAllumettes.style.width="14px"
        imageAllumettes.style.height="130px"
        CONTAINER.appendChild(imageAllumettes)
        arrayAllum.push(imageAllumettes)
    }
    console.log(arrayAllum)
}

function calculerAllumettes (allumettesARetirer) {
    nombreAllumettes = (nombreAllumettes - allumettesARetirer)
    return nombreAllumettes
}

function game() {
    calculerAllumettes(allumettesChoisies)
    enleverImageAllumette()
    messageFin()
}

function messageFin() {
    if (nombreAllumettes == 0 || nombreAllumettes < 0) {
        alert("tu as gagné !")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    afficherImageAllumettes()
    let jouer = document.getElementById('submitButton')
    jouer.addEventListener('click', () => {
        allumettesChoisies = document.querySelector('#nombrePropose').value
        game()
    });
});    

function enleverImageAllumette() {
    for (const IMG of CONTAINER.children){
        IMG.remove()
        break
    }
}