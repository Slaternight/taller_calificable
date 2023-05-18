// Se obtienen los campos del formulario
const formularioRegistro = document.getElementById("registro-doctores-form")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const numeroConsultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")
// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const doctor = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: numeroConsultorio.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if (localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    doctores.push(doctor)
    localStorage.setItem("doctores", JSON.stringify(doctores))
    formularioRegistro.reset()
    alert("Medico registrado con exito")

    window.location.href="doctores.html"
})
