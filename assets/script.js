const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// EventListener sur les flèches via manipulation du DOM

//Initialisation des variables pour différencier les flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

	// Controle fleche gauche
	arrowLeft.addEventListener("click", () => {
		console.log("FLECHE GAUCHE");
		changeSlider(-1);
	  });
	
	  // Controle fleche droite
	  arrowRight.addEventListener("click", () => {
		console.log("FLECHE DROITE");
		changeSlider(1);
	  });


// Insertion des dots
const dotsContainer = document.querySelector(".dots"); //création var container récup la div dots
for (let i = 0; i < slides.length; i++) { // boucle pour definir le nbr de nvlle div a créer
  const dot = document.createElement("div"); //création variable dot
  dot.className = "dot";
  dot.addEventListener("click", () => {
    console.log("Clic sur le point indicatif " + i);
    //logique pr changer le dit cliqué
  });
  dotsContainer.appendChild(dot);
}


// Initialisation Index Slider via son index tableau
let indexNum = 0;

// Fonction Slider modifications via les param tableau slides, accès via l'index
function changeSlider(sens) {
	indexNum += sens;
	if (indexNum > slides.length -1) 
		indexNum = 0;
	if (indexNum < 0)
		indexNum = slides.length - 1;
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[indexNum]['image'];
	document.querySelector(".banner-text").innerHTML = slides[indexNum]['tagLine'];
	{console.log(sens)}
}
