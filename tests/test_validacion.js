// Versión 1.1 - Validación de teléfono (Ticket #101)
function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

function guardarCliente() {
    const telInput = document.getElementById("telefono") ? document.getElementById("telefono").value : "";
    if (!validarTelefono(telInput)) {
        alert("El teléfono solo debe contener números.");
        return false;
    }
    console.log("Cliente guardado exitosamente.");
    return true;
}