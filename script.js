const caroursel = document.querySelector(".caroursel");

let isDragging = false, startX, startScrollLeft;

const dragStart = () => {
    isDragging = true;
    caroursel.classList.add("dragging");
    // Records the ini
    startX = e.pageX;
    startScrollLeft = caroursel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return // si isdragging est faux return depuis ça
    caroursel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    caroursel.classList.remove("dragging");
}
caroursel.addEventListener("mousemove", dragging);
caroursel.addEventListener("mousemove", dragging);
document.addEventListener(mouseup, dragStop);