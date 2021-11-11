const imgArray = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg',
];

console.log(imgArray);

let ItemsContent = '';

for (let i = 0; i < imgArray.length; i++){
    ItemsContent += `
    <div class="photo">
                <img src="${imgArray[i]}" alt="">
            </div>
    `
};

console.log(ItemsContent);

const photo = document.querySelector('.canvas');