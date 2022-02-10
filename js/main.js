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
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Creo un ciclo for per la lunghezza dell'array e ad ogni giro dentro l'array:
// - creo un elemento <img> e dentro a ogni img vado ad inserire una delle immagini che recupero usando l'indice dentro array items 
// - ogni elemento img va inserito dentro al container

for(let i = 0; i < items.length; i++){
    console.log(i);
    const imgElement = ` <img src="${items[i]}" alt="">`;
    console.log(imgElement);
    const figureElement = document.getElementsByClassName("thumbnail")[i];
    console.log(figureElement);
    figureElement.innerHTML += ` ${imgElement}`;
}
