// Tableau slides
// Contient des objets représentant chaque diapo
// -> Chaque objet a 2 propriétés : 
//			- "image" (nom du fichier image de la diapo dans les assets img slideshow) 
//			- "tagLine" (texte associé à la diapo)
const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];

  // Création des variables pour référencer les éléments de la bannière à manipuler
  // Elements : Image, Texte et la div contenant les dots
  const bannerImg = document.querySelector(".banner-img"); 
  const bannerText = document.querySelector(".banner-text");
  const dotsContainer = document.querySelector(".dots");
  
  // Fonction pour modifier les éléments du DOM
  function updateSlider(index) {
	// MAJ image et texte de la bannière
	bannerImg.src = './assets/images/slideshow/' + slides[index]['image'];
	bannerText.innerHTML = slides[index]['tagLine'];
  
	// MAJ points indicateurs (dots)
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, dotIndex) => {
	  if (dotIndex === index) {
		// Ajouter la class pour le dot actif
		dot.classList.add('dot_selected');
	  } else {
		// Enlever la class des autres dots
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  // Initialisation Slider via son index tableau
  let indexNum = 0;
  
  // EventListener sur les flèches
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  
  // EventListener pour la flèche gauche
  arrowLeft.addEventListener("click", () => {
	// Changer l'index pour passer à la diapositive précédente
	indexNum = (indexNum - 1 + slides.length) % slides.length;
	updateSlider(indexNum);
  });
  
  // EventListener pour la flèche droite
  arrowRight.addEventListener("click", () => {
	// Changer l'index pour passer à la diapositive suivante
	indexNum = (indexNum + 1) % slides.length;
	updateSlider(indexNum);
  });
  
  // Création des points indicateurs (dots) et ajout d'un EventListener
  if (dotsContainer) {
	dotsContainer.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement('div');
	  dot.className = 'dot';
	  dotsContainer.appendChild(dot);
  
	  // Ajout EventListener pour passer à la diapositive correspondante lorsqu'on clique sur un point indicateur
	  dot.addEventListener('click', () => {
		indexNum = i;
		updateSlider(indexNum);
	  });
	}
  }
  
  // MAJ START slider une fois pour sélectionner le premier point indicateur (dot)
  updateSlider(indexNum);
  