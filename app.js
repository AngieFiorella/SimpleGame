

var myTileVille = document.getElementById('myTile');
var papel = myTileVille.getContext('2d');
document.addEventListener('keyup', moverCerdo);
var z;


// Objeto Fondo

var fondo = {
	url: 'tile.png',
	isLoaded: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;


var vaca = {
	url: 'vaca.png',
	isLoaded: false
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;


var pollo = {
	url: 'pollo.png',
	isLoaded: false
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;


var cerdo = {
	url: 'cerdo.png',
	isLoaded: false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;


// OBJETO KEYBOARD

var flechas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
}


fondo.imagen.addEventListener('load', cargarFondo);
vaca.imagen.addEventListener('load', cargarVaca);
pollo.imagen.addEventListener('load', cargarPollo);
cerdo.imagen.addEventListener('load', cargarCerdo);


function cargarFondo(){
	fondo.isLoaded = true;
	dibujar();
}

function cargarVaca(){
	vaca.isLoaded = true;
	dibujar();
}

function cargarPollo(){
	pollo.isLoaded = true;
	dibujar();
}

function cargarCerdo(){
	cerdo.isLoaded = true;
	dibujar();
}

var cantidad = generarNumero(0, 20);
// function dibujar(){
// 	if(fondo.isLoaded){
// 		papel.drawImage(fondo.imagen, 0, 0);
// 	}
// 	if(vaca.isLoaded){

// 		for(var v=0; v<cantidad; v++){
// 			var x = generarNumero(0, 5)*80;
// 			var y = generarNumero(0, 5)*80;
// 			console.log("x: " + x + ", y: " + y);
// 			papel.drawImage(vaca.imagen, x, y);
// 		}
// 	}
// }

var aleatoriaX_vaca = generarNumero(0, 5)*80;
var aleatoriaY_vaca = generarNumero(0, 5)*80;
var aleatoriaX_pollo = generarNumero(0, 5)*80;
var aleatoriaY_pollo = generarNumero(0, 5)*80;
var aleatoriaX_cerdo = generarNumero(0, 5)*80;
var aleatoriaY_cerdo = generarNumero(0, 5)*80;
var x_cerdo = 420;
var y_cerdo = 420;

function dibujar(){
	if(fondo.isLoaded){
		// papel.drawImage(fondo.imagen, 0, 0);
		// papel.drawImage(vaca.imagen, aleatoriaX_vaca, aleatoriaY_vaca);
		// papel.drawImage(cerdo.imagen, aleatoriaX_cerdo, aleatoriaY_cerdo);
		// papel.drawImage(pollo.imagen, aleatoriaX_pollo, aleatoriaY_pollo);
		papel.drawImage(fondo.imagen, 0, 0);
		papel.drawImage(vaca.imagen, 0, 0);
		papel.drawImage(cerdo.imagen, x_cerdo, y_cerdo);
	}
}

function moverCerdo(evento){
	console.log(evento);
	var current_key = evento.keyCode;
	switch(current_key){
		case flechas.LEFT:
			x_cerdo = x_cerdo - 20;
		break;
		case flechas.UP:
			y_cerdo = y_cerdo - 20;
		break;
		case flechas.RIGHT:
			x_cerdo = x_cerdo + 20;
		break;
		case flechas.DOWN:
			y_cerdo = y_cerdo + 20;
		break;
	}
	papel.drawImage(fondo.imagen, 0, 0);
	papel.drawImage(vaca.imagen, 0, 0);
	papel.drawImage(cerdo.imagen, x_cerdo, y_cerdo);
	if(x_cerdo <= 50 && y_cerdo <=50){
		alert("Ganaste");
	}
}


function generarNumero(min, max){
	var resultado;
	resultado = (Math.floor(Math.random()*(max-min+1))) + min;
	return resultado;
}