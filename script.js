function changeBackgroundColor(color) {
    const containerTenis = document.querySelector('.conteinertenis');
    containerTenis.style.backgroundColor = color;
    containerTenis.classList.add('gradient-animation');
    setTimeout(() => {
        containerTenis.classList.remove('gradient-animation');
    }, 500);
}