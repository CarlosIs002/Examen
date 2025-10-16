const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('Email');
const inputEdad = document.getElementById('Edad');
const inputPais = document.getElementById('Pais');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('Lista');

listaTareas.innerHTML = localStorage.getItem('listaTareas') || '';

btnAgregar.addEventListener('click', () => {
    const textoNombre = inputNombre.value.trim();
    const textoEmail = inputEmail.value.trim();
    const textoEdad = inputEdad.value.trim();
    const textoPais = inputPais.value.trim();
    
    if (textoNombre !== '' && textoEmail !== '' && textoEdad !== '' && textoPais !== '') {
        const infoCompleta = `Nombre: ${textoNombre}, Email: ${textoEmail}, Edad: ${textoEdad}, País: ${textoPais}`;

        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = infoCompleta;
        listaTareas.appendChild(nuevaTarea);

        inputNombre.value = '';
        inputEmail.value = '';
        inputEdad.value = '';
        inputPais.value = '';

        localStorage.setItem('listaTareas', listaTareas.innerHTML);
    } else {
        respuesta.innerHTML('Por favor, completa todos los campos.');
    }
});