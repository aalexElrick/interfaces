function validar2() {
	var titulo, imagen, contenido;
	titulo=document.getElementById('titulo').value;
	imagen=document.getElementById('imagen').value;
    contenido=document.getElementById('contenido').value;	
    if(titulo==''){
        alert("Falta ingresar el titulo");
        return false;
    }else if(imagen==''){
        alert("Te falta ingresar una imagen");
        return false;
    }else if(contenido==''){
        alert("Falta ingresar un contenido");
        return false;
    }
} 