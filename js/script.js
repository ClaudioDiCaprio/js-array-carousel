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

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// generate the elements

let items ='';
let texts ='';

for (let i = 0; i < imagesArray.length; i++){
    items += `
    <div class="anfitrione">
           <img src="${imagesArray[i]}" alt="${title[i]}">
    </div>
    `;

    texts += `
    <div class = "inner">
      <h2>${title[i]}</h2>
      <span>${text[i]}</span>
    </div>  
    `
}

// console.log(items);

// let's put this elements inside the html

const sx = document.querySelector('.sx');
sx.innerHTML = items;
const writ = document.querySelector('.written')
writ.innerHTML = texts;
console.log(writ)

const anfitrione = document.getElementsByClassName('anfitrione');
const object = document.getElementsByClassName('object');
const written = document.getElementsByClassName('inner')
// console.log(anfitrione[0]);
let deanfrit = 0 ;
anfitrione[deanfrit].classList.add('deact');
object[deanfrit].classList.add('active-object');
written[deanfrit].classList.add('deact');

// image goes

const up = document.querySelector('.up');
const down = document.querySelector('.down');

// let's create an event , when it happens we'll make a change
down.addEventListener("click", function(){

if(deanfrit < imagesArray.length - 1){
    
    // let\'s remove the class wich gaves visibility
    anfitrione[deanfrit].classList.remove('deact');
    object[deanfrit].classList.remove('active-object');
    written[deanfrit].classList.remove('deact');

    // in order to first change the photo first and then add to the new hptoto the class, let's increment our declared variable wich is acting as a deact class's counter

    deanfrit++;
    //add deact to next element
    anfitrione[deanfrit].classList.add('deact');
    object[deanfrit].classList.add('active-object');
    written[deanfrit].classList.add('deact');

    // console.log(deanfrit);
}
});

up.addEventListener("click" , function(){
    if(deanfrit > 0){
        anfitrione[deanfrit].classList.remove('deact');
        object[deanfrit].classList.remove('active-object');
        written[deanfrit].classList.remove('deact');

        deanfrit--;
    
        anfitrione[deanfrit].classList.add('deact');
        object[deanfrit].classList.add('active-object');
        written[deanfrit].classList.add('deact');
    }
    
})





// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]
