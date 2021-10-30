const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false;

//retourner une carte
cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})

function retourneCarte(){

    if(verouillage) return;

    this.childNodes[1].classList.toggle('active');

    //permet de stocker les 2 cartes sur lesquelles on clique
    if(!carteRetournee){
        carteRetournee = true;
        premiereCarte = this;
        return;
    } 
    
    carteRetournee = false;
    secondeCarte = this;

    //console.log(premiereCarte, secondeCarte);

    correspondance();
}

//check la correspondance et fige les cartes valides
function correspondance(){
    if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')){
        premiereCarte.removeEventListener('click', retourneCarte);
        secondeCarte.removeEventListener('click', retourneCarte);
    } 
    
    //ou retourne les cartes fausses
    else {
        verouillage = true;
        setTimeout(() => {
            premiereCarte.childNodes[1].classList.remove('active');
            secondeCarte.childNodes[1].classList.remove('active');

            verouillage = false;
        }, 1500);
    }
}


function aleatoire(){
    cartes.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}

aleatoire();

