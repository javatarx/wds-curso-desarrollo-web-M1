	function correr(){
		alert("Estoy cansado ");
	}	
	function decidirMatrimonio(){

		if (confirm("Aceptas a la mujer que esta a tu lado?")) {
			alert("Y viviras feliz forever");
		}else{
			alert("Forever alone");
		}

	}

	function decidirMatrimonio2(){
		var novio = document.getElementById("novio");
		var novia = document.getElementById("novia");

		if (novio.value.length>0) {
			if(novia.value.length>0){

			if(!confirm("Hay alguien que se oponga a esta union virtual?")){
				if (confirm(novio.value+", aceptas a "+novia.value+" como tu esposa?")) {

					if (confirm(novia.value+", aceptas a "+novio.value+" como tu esposo?")) {
						alert("Los declaro marido y mujer");
					}else{
						alert("Buscate otra");
					}
				}else{
					alert("Buscate otro");
				}
			}
			}else{
				alert("Ingrese el nombre de la novia");
				novia.focus();
			}
		}else{
			alert("Ingrese el nombre del novio");
			novio.focus();
		}
	}
function validarNumero(a){
	if(isNaN(a)){
	console.log("esto no es un numero");
	}else{
	console.log("si es un numero");
	}
}

function validarLetra(texto){
	var caracter = texto.value.substr(
					texto.value.length-1,
					texto.value.length);

	if(isNaN(caracter)){
	}else{
		texto.value=texto.value.substr(
					0,texto.value.length-1
					);
	}

}