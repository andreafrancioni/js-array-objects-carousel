const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let immaginiDaInserire = "";
let titoloDaInserire ="";
let descDaInserire ="";

for (let i = 0; i < images.length; i++) {
    const immagine = images[i].image;
    const titolo = images[i].title;
    const desc = images[i].text;

    immaginiDaInserire += `<img src="${immagine}">
                        <p id="imageTitle">${titolo}</p>
                        <p id="imageDesc">${desc}</p>
                    `;}
document.getElementById("images").innerHTML = immaginiDaInserire;

let currentImg = 0;
const newImage = document.querySelectorAll(".images img");
const newTitle = document.querySelectorAll("#imageTitle");
const newDesc = document.querySelectorAll("#imageDesc");

newImage[currentImg].classList.add("active");
newTitle[currentImg].classList.add("active");
newDesc[currentImg].classList.add("active");


document.getElementById("btn-next").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < images.length - 1) {
        newImage[currentImg].classList.remove("active");
        newTitle[currentImg].classList.remove("active");
        newDesc[currentImg].classList.remove("active");
        currentImg++;
        newImage[currentImg].classList.add("active");
        newTitle[currentImg].classList.add("active");
        newDesc[currentImg].classList.add("active");
    }else if (currentImg == images.length - 1) {
        newImage[currentImg].classList.remove("active");
        newTitle[currentImg].classList.remove("active");
        newDesc[currentImg].classList.remove("active");
        currentImg = 0;
        newImage[currentImg].classList.add("active");
        newTitle[currentImg].classList.add("active");
        newDesc[currentImg].classList.add("active");
    }
});

document.getElementById("btn-back").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        newImage[currentImg].classList.remove("active");
        newTitle[currentImg].classList.remove("active");
        newDesc[currentImg].classList.remove("active");
        currentImg--;
        newImage[currentImg].classList.add("active");
        newTitle[currentImg].classList.add("active");
        newDesc[currentImg].classList.add("active");
    }else if (currentImg == 0) {
        newImage[currentImg].classList.remove("active");
        newTitle[currentImg].classList.remove("active");
        newDesc[currentImg].classList.remove("active");
        currentImg = images.length - 1;
        newImage[currentImg].classList.add("active");
        newTitle[currentImg].classList.add("active");
        newDesc[currentImg].classList.add("active");
    }
});


