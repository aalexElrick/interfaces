function validar() {
	var email,password;

	email=document.getElementById('email').value;
	pasword=document.getElementById('password').value;
	 
	if (email=='') { 
	 	alert("falta ingresar el email");
	 		return false;

	 }else if (pasword=='') {
	 	alert("falta ingresar la contraseña") ;
	 	return false;
	
	 }else if (pasword.length<8 || pasword.length>15) {
	 	alert("recuerda que es mayor a 8 pero meneor a 15");
	 	return false;
	 }

	 
	 	
} 

function validar2() {
	var nom, ape,email,pasword,tel;
	nom=document.getElementById('first_name').value;
	ape=document.getElementById('last_name').value;
	email=document.getElementById('email').value;
	pasword=document.getElementById('password').value;
	tel=document.getElementById('phone').value;
	 
	 if (nom=='') {
	 	alert("falta ingresar el nombre");
	 	document.getElementById('first_name').focus();
	 	return false;
	 }else if (ape=='') {
	 	alert("falta ingresar el apellido");
	 	return false;
	 }else if (email=='') { 
	 	alert("falta ingresar el email");
	 		return false;

	}else if (tel=='') {
	 	alert ("falta agregar el telefono");
	 	return false;

	 }else if (isNaN(tel)) {
	 	alert("solo ingresa numeros");
	 	return false;
	 }else if(tel.length!=10){
	 	alert("numero invalido tiene ques ser 10 digitos");
	 	return false;
	 }else if (pasword=='') {
	 	alert("falta ingresar la contraseña") ;
	 	return false;
	 }else if (nom.length>15) {
	 	alert("el nombre es demasiado largo");
	 	return false;
	 
	 }else if (pasword.length<8 || pasword.length>15) {
	 	alert("recuerda que es mayor a 8 pero meneor a 15");
	 	return false;
	}


	 
	 	
} 