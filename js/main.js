const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let activeIndex = 0; // creo un indice che mi serve per spostare la classe active incrementando o decrementando l'indice - lo inizializzo a zero per partire dalla prima slide

// Creo un ciclo for per la lunghezza dell'array e ad ogni giro dentro l'array:
// - creo un elemento <img> e dentro a ogni img vado ad inserire una delle immagini che recupero usando l'indice dentro array items 
// - ogni elemento img va inserito dentro al container delle thumbnail
for(let i = 0; i < items.length; i++){
    console.log(i);

    const imgElement = ` <img class="thumbnail" src="${items[i]}" alt="">`;
    console.log(imgElement);

    const thumbnailsContainer = document.querySelector(".thumbnails-container");
    console.log(thumbnailsContainer);
    thumbnailsContainer.innerHTML += ` ${imgElement}`;

    // faccio la stessa cosa per le slide grandi
    const imgSlide = ` <img class="slide" src="${items[i]}">`;
    console.log(imgSlide);

    const slideWrapper = document.querySelector('.slide-wrapper');
    slideWrapper.innerHTML += ` ${imgSlide}`;
}

// salvo l'array delle thumbnail e quello delle slide
const thumbnail = [...document.getElementsByClassName("thumbnail")]; // const thumbnail = document.getElementsByClassName("thumbnail"); se avessi fatto così mi ritornava una lista di nodi

const slide = [...document.getElementsByClassName("slide")];
console.log(thumbnail, slide);

// imposto la thumbnail e la slide attiva in base all'indice di partenza
thumbnail[activeIndex].classList.add('active'); // Se avessi fatto imgElement.classlist.add("active"); così non funziona perché imgElement é una stringa quindi mi sono creata l'array per prenderne gli elementi

slide[activeIndex].classList.add('active-slide');
console.log(thumbnail[activeIndex], slide[activeIndex]);

// al click sui bottoni mi sposto su o giù di una immagine
const btnUp = document.getElementById('btn-up');
console.log(btnUp);

const btnDown = document.getElementById('btn-down');
console.log(btnUp);  

btnUp.addEventListener('click', function(){
    console.log('vai sù');

    // devo togliere la classe active dalla slide e dalla thumbnail correnti
    slide[activeIndex].classList.remove('active-slide');
    console.log(slide[activeIndex]);
    thumbnail[activeIndex].classList.remove('active');
    console.log(thumbnail[activeIndex]);

    //incremento l'activeIndex per stabilire la nuova thumbnail e la nuova slide corrente
    activeIndex --;

    // devo aggiungere la classe active dalla slide e dalla thumbnail correnti
    thumbnail[activeIndex].classList.add('active');
    console.log(thumbnail[activeIndex]);
    slide[activeIndex].classList.add('active-slide');
    console.log(slide[activeIndex]);

})

btnDown.addEventListener('click', function(){
    console.log('vai giù');
    
    slide[activeIndex].classList.remove('active-slide');
    thumbnail[activeIndex].classList.remove('active');

    activeIndex ++;

    thumbnail[activeIndex].classList.add('active');
    slide[activeIndex].classList.add('active-slide');
})


