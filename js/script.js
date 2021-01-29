AOS.init({
    duration: 800,
    mirror: true,
});

const modal = document.getElementById("modal-image");
const imgs = document.querySelectorAll(".portfolio .grid-item img");
const modalImg = document.getElementById("img-modal");

imgs.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

const span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}