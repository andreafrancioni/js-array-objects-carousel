imagesPath = [
                `../img/01.webp`,
                `../img/02.webp`,
                `../img/03.webp`,
                `../img/04.webp`,
                `../img/05.webp`,
];

let immaginiDaInserire = "";
for (let i = 0; i < imagesPath.length; i++) {
    const percorsoImmagine = imagesPath[i];
    immaginiDaInserire += `<img src="${percorsoImmagine}">`;
}
document.getElementById("images").innerHTML = immaginiDaInserire;

let currentImg = 0;
const images = document.querySelectorAll(".images img");
images[currentImg].classList.add("active");

document.getElementById("btn-next").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }
    if(currentImg == images.length - 1){
        images[currentImg].classList.add("active");
        currentImg=0;

    }
});

document.getElementById("btn-back").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});