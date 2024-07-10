function changeBackgroundColor(color) {
    const conteinerimg = document.querySelector('.conteinerimg');
    const btnpreto = document.querySelector('#preto');
    const btnazul = document.querySelector('#azul');
    const btnverde = document.querySelector('#verde');
    const btnbranco = document.querySelector('#branco');
    const img = document.querySelector('#jordan');
    const containerTenis = document.querySelector('.conteinertenis');
    containerTenis.style.backgroundColor = color;
   
    switch (color) {
        case 'black':
            containerTenis.style.color = 'white';
            conteinerimg.style.width = '150px';
            conteinerimg.style.height = '150px';
            img.setAttribute("src", "./assets/airjordanpreto.png");
            btnpreto.style.border = '2px solid black';
            btnpreto.style.boxShadow = '0px 0px 3px rgb(255, 255, 255)';
            btnbranco.style.border = '2px solid white';
            btnazul.style.border = '2px solid white';
            btnverde.style.border = '2px solid white';
            break;
        case 'blue':
            conteinerimg.style.width = '150px';
            conteinerimg.style.height = '150px';
            containerTenis.style.boxShadow = '1px -1px 10px rgba(0, 0, 0, 0.418)';
            img.setAttribute("src", "./assets/airjordanazul.png");
            btnazul.style.border = '2px solid black';
            btnpreto.style.border = '2px solid white';
            btnbranco.style.border = '2px solid white';
            btnverde.style.border = '2px solid white';
            break;
        case 'green':
            img.setAttribute("src", "./assets/airjordanverde.png");
            btnverde.style.border = '2px solid black';
            btnbranco.style.border = '2px solid white';
            btnazul.style.border = '2px solid white';
            btnpreto.style.border = '2px solid white';
            break;
        case 'white':
            containerTenis.style.color = 'black';
            conteinerimg.style.width = '150px';
            conteinerimg.style.height = '150px';
            containerTenis.style.boxShadow = '1px -1px 10px rgba(0, 0, 0, 0.418)';
            img.setAttribute("src", "./assets/airjordan.png");
            btnbranco.style.border = '2px solid black';
            btnazul.style.border = '2px solid white';
            btnpreto.style.border = '2px solid white';
            btnverde.style.border = '2px solid white';
            break;
        default:
            containerTenis.style.color = 'white';
            break;
    }
    
}