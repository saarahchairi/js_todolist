let nomNouvelleTache = document.querySelector("input");
let boutonAjouter = document.querySelectorAll("button")[0];
let tacheSection = document.querySelectorAll("div")[0];

boutonAjouter.addEventListener("click", function () {
    let nouvelleTache = document.createElement("div");
    let titreTache = document.createElement("h4");

    let fini = document.createElement("i");
    fini.classList.add("fa-solid", "fa-circle-check", "fini");

    let rennomer = document.createElement("i");
    rennomer.classList.add("fa-solid", "fa-pen-to-square", "rennomer");

    let poubelle = document.createElement("i");
    poubelle.classList.add("fa-solid", "fa-trash-can", "poubelle");

    let logo = document.createElement("div");
    logo.append(fini, rennomer, poubelle);

    nouvelleTache.append(titreTache, logo)
    titreTache.innerText = nomNouvelleTache.value
    tacheSection.appendChild(nouvelleTache);
    nouvelleTache.setAttribute("class", "nouvelleTache")
});