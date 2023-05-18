const formulario = document.getElementById("registro-pacientes-form")
const nombrePaciente = document.getElementById("paciente")
const nombreApellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("phone")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente ={
        nombrePaciente: nombrePaciente.value,
        nombreApellido: nombreApellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: phone.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")
})