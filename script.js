const caroursel = document.querySelector(".caroursel");

let isDragging = false;

const dragStart = () => {
    isDragging = true;
    caroursel.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDragging) return // si isdragging est faux return depuis ça
    caroursel.scrollLeft = e.pageX;
}

caroursel.addEventListener("mousemove", dragging);
caroursel.addEventListener("mousemove", dragging);