function changeBackgroundColor(button, color) {


    const containerTenis = button.closest('.conteinertenis');
    const tenisName = containerTenis.querySelector('h1').textContent;

    containerTenis.style.backgroundColor = color;

    if (containerTenis.style.backgroundColor === 'black') {
        containerTenis.style.color = 'white';
    } else {
        containerTenis.style.color = 'black';
    }
    changeImg(containerTenis, color, tenisName);
}

function changeImg(containerTenis, color, tenisName) {
    const img = containerTenis.querySelector('#tenis');
    if (tenisName === 'Air Jordan') {
        switch (color) {
            case 'black':
                img.setAttribute("src", "./assets/airjordanpreto.png");
                break;
            case '#0A63F0':
                img.setAttribute("src", "./assets/airjordanazul.png");
                break;
            default:
                img.setAttribute("src", "./assets/airjordan.png");
                break;
        }
    }
    if (tenisName === 'Air Max') {
        switch (color) {
            case 'black':
                img.setAttribute("src", "./assets/AirMaxPreto.png");
                break;
            default:
                img.setAttribute("src", "./assets/AirMax.png");
                break;
        }
    }
    if (tenisName === 'Air max plus Tn') {
        switch (color) {
            case 'white':
                img.setAttribute("src", "./assets/tnBranco.png");
                break;
            default:
                img.setAttribute("src", "./assets/tn.png");
                break;
        }
    }
    if (tenisName === 'Nike x Skepta') {
        switch (color) {
            case '#0A63F0':
                img.setAttribute("src", "./assets/skepta_azul.png");
                break;
            default:
                img.setAttribute("src", "./assets/skepta.png");
                break;
        }
    }

}
    function validateForm() {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const submitBtn = document.getElementById("submitBtn");
        if (email !== "" && password !== "") {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

