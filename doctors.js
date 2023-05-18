function mostrarMedicos() {
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if(localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    const tablaMedicos = document.getElementById("tabla-doctores")
    const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0]
    doctores.forEach(doctor => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreDoctor = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaPacientes = fila.insertCell()

        celdaNombreDoctor.textContent = doctor.nombre
        celdaApellido.textContent = doctor.apellido
        celdaNumeroCedula.textContent = doctor.cedula
        celdaConsultorio.textContent = doctor.consultorio
        celdaCorreo.textContent = doctor.correo
        celdaEspecialidad.textContent = doctor.especialidad
        celdaPacientes.textContent = "Sin asignar"
    });
}

mostrarMedicos()