const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img"); 
const opacity = 0.3;

imgs[0].style.opacity = 0.3;

imgs.forEach(element => {
    element.addEventListener('click', imgClick);
});

function imgClick(el){
    imgs.forEach(img => (img.style.opacity = 1));

    current.src = el.target.src; 

    el.target.style.opacity = opacity;

    current.classList.add("fade-in");

    setTimeout(() => current.classList.remove("fade-in"), 500);
}