let boton_sumar;
let boton_restar;
let boton_multiplicar;
let boton_dividir;
let numero_a;
let numero_b;
let resultado;


numero_a = document.getElementById("numero_a");
numero_b = document.getElementById("numero_b");

boton_sumar = document.getElementById("suma");
boton_restar = document.getElementById("resta");
boton_multiplicar = document.getElementById("multiplica");
boton_dividir = document.getElementById("divide");
resultado = document.getElementById("resultado");




boton_sumar.addEventListener("click",function(){
	let prueba;
	let a = parseFloat(numero_a.value);
	let b = parseFloat(numero_b.value);
	
	if(isNaN(a)){
		alert("Debe ingresar un primer numero valido.");
		return;
	}
	
	if(isNaN(b)){
		alert("Debe ingresar el segundo numero valido.");
		return;
	}
	
	prueba = suma(a,b);
	resultado.innerHTML = prueba;
});

boton_restar.addEventListener("click",function(){
	let prueba;
	let a = parseFloat(numero_a.value);
	let b = parseFloat(numero_b.value);
	if(isNaN(a)){
		alert("Debe ingresar un primer numero valido.");
		return;
	}
	
	if(isNaN(b)){
		alert("Debe ingresar el segundo numero valido.");
		return;
	}
	prueba = resta(a,b);
	resultado.innerHTML = prueba;
});


boton_multiplicar.addEventListener("click",function(){
	let prueba;
	let a = parseFloat(numero_a.value);
	let b = parseFloat(numero_b.value);
	if(isNaN(a)){
		alert("Debe ingresar un primer numero valido.");
		return;
	}
	
	if(isNaN(b)){
		alert("Debe ingresar el segundo numero valido.");
		return;
	}
	prueba = multiplicar(a,b);
	resultado.innerHTML = prueba;
});

boton_dividir.addEventListener("click",function(){
	let prueba;
	let a = parseFloat(numero_a.value);
	let b = parseFloat(numero_b.value);
	if(isNaN(a)){
		alert("Debe ingresar un primer numero valido.");
		return;
	}
	
	if(isNaN(b)){
		alert("Debe ingresar el segundo numero valido.");
		return;
	}
	
	if(b==0){
		alert("No se puede dividir por 0, escriba otro numero");
		return;
	}
	prueba = dividir(a,b);
	resultado.innerHTML = prueba;
});


function suma(a,b){
	let resultado;
	resultado = a + b;
	return resultado;
}

function resta(a,b){
	let resultado;
	resultado = a - b;
	return resultado;
}

function multiplicar(a,b){
	let resultado;
	resultado = a * b;
	return resultado;
}

function dividir(a,b){
	let resultado;
	resultado = a / b;
	return resultado;
}
