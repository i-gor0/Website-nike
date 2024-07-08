function changeBackgroundColor(color) {
    const containerTenis = document.querySelector('.conteinertenis');
    const button = document.querySelector('button');
    containerTenis.style.backgroundColor = color;
    if(color=='white'){
        containerTenis.style.color = 'black';
        containerTenis.style.boxShadow = '1px -1px 10px rgba(0, 0, 0, 0.418)';
    } else {
        containerTenis.style.color = 'white';
        containerTenis.style.boxShadow = '';
    }
}