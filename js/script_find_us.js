function validarFormulario() {

    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var comentario = document.getElementById('msg').value;

    if (nombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)) {
        alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }

    if (!(/\S+@\S+\.\S+/.test(correo))) {
        alert('ERROR: Debe escribir un correo válido');
        return false;
    }
    if (comentario == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)) {
        alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }
    return true;
}