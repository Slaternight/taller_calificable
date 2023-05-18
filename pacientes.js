function mostrarPeople() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablaMascotas = document.getElementById("tabla-gente")
    const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent = paciente.nombrePaciente

        const celdaApellidoPaciente = fila.insertCell()
        celdaApellidoPaciente.textContent = paciente.nombreApellido
    
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent = paciente.cedula

        const celdaEdades = fila.insertCell();
        celdaEdades.textContent = paciente.edad

        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent = paciente.telefono

        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent = paciente.especialidad

        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent="Por asignar"
    });
}

mostrarPeople()