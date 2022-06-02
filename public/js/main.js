let nomNouvelleTache = document.querySelector("input");
let boutonAjouter = document.querySelectorAll("button")[0];
let boutonTermine = document.querySelectorAll("button")[2];
let boutonTout = document.querySelectorAll("button")[3];
let tacheSection = document.querySelectorAll("div")[3];

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

    nouvelleTache.append(titreTache, logo)
    titreTache.innerText = nomNouvelleTache.value
    tacheSection.appendChild(nouvelleTache);
    nouvelleTache.setAttribute("class", "nouvelleTache");
    //Déclarer une tâche comme étant terminée
    let terminer = [];
    fini.addEventListener("click", function () {
        // terminer.push(nouvelleTache);
        nouvelleTache.classList.add("done");
        fini.style.color = "#60C5FF";
        console.log(tacheSection);
    });
    
    //Permettre de filter les tâches en affichant juste les éléments terminé
    boutonTermine.addEventListener("click", function () {
        tacheSection.removeChild(nouvelleTache)
        // forEach(element => {
        //     if (element.classList != "done"){
        //         nouvelleTache.style.display = "none"
        //     }
        // });
    })

    //Permet d'afficher toutes les tâches
    boutonTout.addEventListener("click", function () {
        tacheSection.appendChild(nouvelleTache);
    })

    //Permettre à l'utilisateur de pouvoir rennomer la tâche
    rennomer.addEventListener("click", function () {
        rennomer.classList.replace("fa-pen-to-square", "fa-floppy-disk");
        fini.style.visibility = "hidden";
        poubelle.style.visibility = "hidden";
        titreTache.replaceWith(document.createElement("input"));
        
        rennomer.addEventListener("click", function () {
            rennomer.classList.replace("fa-floppy-disk", "fa-pen-to-square");
            fini.style.visibility = "visible";
            poubelle.style.visibility = "visible";
            // let newTitre = titreTache.value;
            titreTache.replaceWith(document.createElement("h4"));
            // titreTache.innerText = newTitre;
            // console.log(newTitre);
        })
    });
    //Permet de supprimer la tâche
    poubelle.addEventListener("click", function () {
        nouvelleTache.remove(titreTache);
    })
});
