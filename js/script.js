// forge the array
const imagesArray = [
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

// generate the elements

let items ='';

for (let i = 0; i < imagesArray.length; i++){
    items += `
    <div class="anfitrione">
           <img src="${imagesArray[i]}" alt="${title[i]}">
    </div>
    `;
}

console.log(items);

// let's put this elements inside the html

const sx = document.querySelector('.sx');
sx.innerHTML = items;

const anfitrione = document.getElementsByClassName('anfitrione');
console.log(anfitrione[0]);
let deanfrit = 0 ;
anfitrione[deanfrit].classList.add('deact');

const up = document.querySelector('.up');
const down = document.querySelector('.down');





// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]
