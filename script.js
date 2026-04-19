/* Validar el formulario */

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || nombre === null) {
        alert("Por favor, introduce tu nombre.");
        document.getElementById("nombre").focus();
        return false;
    }

    if (email === "" || email === null) {
        alert("Por favor, introduce tu correo electrónico.");
        document.getElementById("email").focus();
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("El correo electrónico no tiene un formato válido.");
        document.getElementById("email").focus();
        return false;
    }

    if (mensaje === ""  || mensaje === null) {
        alert("Por favor, escribe un mensaje.");
        document.getElementById("mensaje").focus();
        return false;
    }

    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");
    document.getElementById("formulario-contacto").reset();
    return false;
}

function agregarCarrito() {
    alert("Producto añadido al carrito: Logitech G502 X Plus\nPrecio: 89,99 €");
}