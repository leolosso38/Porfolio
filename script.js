function enviarCorreo() {
  // Obtiene los valores del formulario
  function enviarCorreo() {
    const nombre = document.getElementById("name").value;
    const mensaje = document.querySelector("[name='message']").value;

    if (!nombre || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const destinatario = "tu_email@example.com";
    const asunto = encodeURIComponent("Mensaje de contacto: " + nombre);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nMensaje: ${mensaje}`);
    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

    window.location.href = mailtoLink;
  }
}
