

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let consulta = document.getElementById('consulta').value;

    if (nombre === '' || email === '' || telefono === '' || consulta === '') {
        alert('Por favor, completa todos los campos del formulario.');
   
    } else {
        alert('Correo enviado!');
    }
});