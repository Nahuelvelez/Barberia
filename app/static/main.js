<script src="js/main.js"></script>
// Esperamos a que el DOM se cargue antes de ejecutar cualquier código
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el formulario
    const form = document.getElementById("form-turno");

    // Agregamos un evento de envío para cuando el usuario presiona "Agendar Turno"
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir que el formulario se envíe inmediatamente

        // Validamos los campos
        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const fecha = document.getElementById("fecha").value;
        const horario = document.getElementById("horario").value;

        // Validar campos obligatorios
        if (nombre === "" || telefono === "" || fecha === "" || horario === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        // Validar número de teléfono (debe tener 10 dígitos)
      //  if (!/^\d{10}$/.test(telefono))
        if(telefono.length <= 10) {
            alert("El número de teléfono debe contener al menos 10 dígitos.");
            return;
        }

        // Confirmación del turno
        const mensajeConfirmacion = `¡Gracias, ${nombre}!\nTu turno ha sido agendado para el ${fecha} a las ${horario}.\nNos contactaremos a tu número: ${telefono}${email ? " y te enviaremos una confirmación a: " + email : ""}.`;

        // Mostrar confirmación
        alert(mensajeConfirmacion);

        // Puedes hacer lo que desees después de esta confirmación, como enviar los datos a un servidor.
    });
});