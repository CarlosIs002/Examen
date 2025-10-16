const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('Email');
const inputEdad = document.getElementById('Edad');
const inputPais = document.getElementById('Pais');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('Lista');

const mensajeError = document.getElementById('mensajeError');

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
        mensajeError.textContent = '';
    } else if(textoNombre == '') {
        mensajeError.textContent = 'Completa el campo nombre';
    } else if(textoEmail == ''){
        mensajeError.textContent = 'Completa el campo email';
    } else if(textoEdad == ''){
        mensajeError.textContent = 'Completa el campo edad';
    } else if(textoPais == ''){
        mensajeError.textContent = 'Completa el campo pais';
    }else{
        mensajeError.textContent = 'Completa los campos.';
    }
});