const toggle = document.getElementById('ball');

toggle.addEventListener('click', () => {
    const link = document.getElementById('tema');

    link.href = (link.href.endsWith("style.css")) ? "style2.css" : "style.css";
    

});

const buscar = document.getElementById('buscar');

buscar.addEventListener('input', (value) => {
    const valor = format(value.target.value);
    
    

    document.querySelectorAll('.item').forEach(item => {
       if (format(item.textContent).indexOf(valor) !== -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

function format(value) {
    return value.toLowerCase().trim();
}
