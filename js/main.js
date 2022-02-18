// ###############################################################################################
// Responsive button
// ###############################################################################################

const btn = document.querySelector('.heading__responsive-btn');
const list = document.querySelector('.navigation');
const items = document.querySelectorAll('.menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    list.classList.toggle('active-menu');
})

items.forEach(menu => {
    menu.addEventListener('click', () => {
        btn.classList.remove('active');
        list.classList.remove('active-menu');
    })
})

// ###############################################################################################
// Smooth scroll
// ###############################################################################################

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// ###############################################################################################
// Carousel
// ###############################################################################################

let currentlySelected = 0;
const nodes = document.querySelectorAll(".carousel__figure");
const reNodes = document.querySelectorAll(".carousel__navigation-title");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
    nextBtn.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    reNodes[currentlySelected].classList.remove("active");
    currentlySelected--;
    nodes[currentlySelected].classList.add("active");
    reNodes[currentlySelected].classList.add("active");

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
}

function next() {
    prevBtn.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    reNodes[currentlySelected].classList.remove("active");
    currentlySelected++;
    nodes[currentlySelected].classList.add("active");
    reNodes[currentlySelected].classList.remove("active");
    reNodes[currentlySelected].classList.add("active");

    if (currentlySelected + 1 === nodes.length) {
        nextBtn.disabled = true;
    }
}

function init() {
    prevBtn.addEventListener("click", () => {
        previous();
    })

    nextBtn.addEventListener("click", () => {
        next();
    })
}

init();


// ###############################################################################################
// Modal
// ###############################################################################################

const modalButtons = document.querySelectorAll(".modal-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");


for (let i = 0; i < 3; i++) {
    modalButtons[i].onclick = () => {
        modal.style.display = "block";
    };
}

closeButton.onclick = () => {
   modal.style.display = "none";
}
