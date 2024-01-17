
function validarFormulario() {
	// Obtener los datos del formulario

    let nombre = document.getElementById('nombre').value;
	let apellido = document.getElementById('apellido').value;
	let edad = document.getElementById('edad').value;
	let dni = document.getElementById('dni').value;
	let email = document.getElementById('email').value;


	// Validaciones

	if (nombre.length < 3 || nombre.length > 20) {
		alert('El nombre es inválido. Debe tener más de 3 caracteres.');
		return false;
	}

	if (apellido.length < 3 || apellido.length > 25) {
		alert('El apellido es inválido. Debe tener más de 3 caracteres.');
		return false;
	}

	if (edad < 18 || edad > 120) {
		alert('La edad es inválida. Debe tener entre 18 y 120 años.');
		return false;
	}

	if (dni.length <= 6) {
		alert('El DNI es inválido. Debe tener más de 6 caracteres.');
		return false;
	}

	if (!(email.includes('@'))) {
		alert('El correo electrónico es inválido. Debe contener un "@".');
		return false;
	}

    
	// Si las validaciones se cumplen, agregar los datos a la tabla

	let tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
	let fila = tabla.insertRow();
	let celdaNombre = fila.insertCell(0);
	let celdaApellido = fila.insertCell(1);
	let celdaEdad = fila.insertCell(2);
	let celdaDNI = fila.insertCell(3);
	let celdaEmail = fila.insertCell(4);
	
    celdaNombre.innerHTML = nombre;
	celdaApellido.innerHTML = apellido;
	celdaEdad.innerHTML = edad;
	celdaDNI.innerHTML = dni;
	celdaEmail.innerHTML = email;


	// Vaciar el formulario

	document.getElementById('nombre').value = '';
	document.getElementById('apellido').value = '';
	document.getElementById('edad').value = '';
	document.getElementById('dni').value = '';
	document.getElementById('email').value = '';

	return false;
}


