let nomNouvelleTache = document.querySelector("input");
let boutonAjouter = document.querySelectorAll("button")[0];
let boutonTermine = document.querySelectorAll("button")[2];
let boutonTout = document.querySelectorAll("button")[3];
let boutonAFaire = document.querySelectorAll("button")[1];
let tacheSection = document.querySelectorAll("div")[3];
let tache = []; 

//Création de nouvelle tâche lorsque l'utilisateur clique sur le bouton "Ajouter"
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

    nouvelleTache.append(titreTache, logo);
    titreTache.innerText = nomNouvelleTache.value;
    tacheSection.appendChild(nouvelleTache);
    nouvelleTache.setAttribute("class", "nouvelleTache");

    //Déclarer une tâche comme étant terminée
    fini.addEventListener("click", function () {
        fini.style.color = "#60C5FF";
        nouvelleTache.style.backgroundColor = "#bdffcc"
        fini.addEventListener("click", function () {
            fini.style.color = "grey";
            nouvelleTache.style.backgroundColor = "#E4E4E4"
        });
    });

    //Permettre de filter les tâches en affichant juste les éléments terminé
    boutonTermine.addEventListener("click", function () {
        if (nouvelleTache.style.backgroundColor == "") {
            nouvelleTache.style.display = "none";
        } 
    });

    //Permettre de filter les tâches en affichant juste les éléments à faire
    boutonAFaire.addEventListener("click", function () {
        if (nouvelleTache.style.backgroundColor == "rgb(189, 255, 204)") {
            nouvelleTache.style.display = "none";
        } 
    });
    
    //Permettre à l'utilisateur de pouvoir rennomer la tâche
    rennomer.addEventListener("click", function () {
        rennomer.classList.replace("fa-pen-to-square", "fa-floppy-disk");
        fini.style.visibility = "hidden";
        poubelle.style.visibility = "hidden";
        titreTache.contentEditable = true;

        rennomer.addEventListener("click", function () {
            rennomer.classList.replace("fa-floppy-disk", "fa-pen-to-square");
            fini.style.visibility = "visible";
            poubelle.style.visibility = "visible";
            titreTache.contentEditable = false;
        });
    });

    //Permet de supprimer la tâche
    poubelle.addEventListener("click", function () {
        nouvelleTache.remove();
    });

    //Permet d'afficher toutes les tâches
    boutonTout.addEventListener("click", function () {
        nouvelleTache.style.display = "flex";
    });
});