function validateForm() {
	$('.error').remove();

	let nombre = $('#name').val().trim();
	let apellido = $('#lastname').val().trim();
	let email = $('#input-email').val().trim();
	let passwd = $('#input-password').val().trim();
	let bici = $('select').val();
	let twitter = $('#input-social').val();

	if (nombre == "") {
		$('#name').parent().append('<span class="error">debe llenar campo obligatorio Ej: "Rosamel"</span>');
	}
	else if (/^[A-Za-z]+$/.test(nombre) == false) {
		$('#name').parent().append('<span class="error">ingresar solo letras</span>');
	}
	else if (nombre[0].toUpperCase() != nombre[0]) {
		$('#name').parent().append('<span class="error">su nombre debe iniciar con mayusculas Ej: "Rosamel"</span>');
	}
	if (apellido == "") {
		$('#lastname').parent().append('<span class="error">debe llenar campo obligatorio Ej: "Fierro"</span>');
	}
	else if (apellido[0].toUpperCase() != apellido[0]) {
		$('#lastname').parent().append('<span class="error">su apellido debe iniciar con mayusculas Ej: "Fierro"</span>');
	}
	else if (/^[A-Za-z]+$/.test(apellido) == false) {
		$('#lastname').parent().append('<span class="error">ingresar solo letras</span>');
	}
	if (email == "") {
		$('#input-email').parent().append('<span class="error">debe llenar campo obligatorio Ej: "rosa.fier.del@algo.com"</span>');
	}
	else if (validarEmail(email) == false) {
		$('#input-email').parent().append('<span class="error">el email ingresado es invalido</span>');
	}
	if (passwd == "") {
		$('#input-password').parent().append('<span class="error">debe llenar campo obligatorio</span>');
	}
	else if (passwd == "password" || passwd == "123456" || passwd == "098754") {
		$('#input-password').parent().append('<span class="error">contraseña invalida</span>');
	}
	else if (passwd.length <= 5) {
		$('#input-password').parent().append('<span class="error">nesecitas un min. de 6 caracteres</span>');
	}
	if (bici == 0) {
		$('select').parent().append('<span class="error">selecciona una bici</span>');
	}
}

function validarEmail(valor) {
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
		return true;
	} else {
		return false;
	}
}