const jugadorUno = {
  nombre1: "JOSEOVER",
  habilidad1: {
    ataque1: 0,
    velocidad1: 0,
    vida1: 0,
    magia1: 0,
    articulo1: ["espada", "escudo", "varita"],
  }
 
  
};

const jugadorDos = {
  nombre2: "BRUNO",
  habilidad2: {
    ataque2: 0,
    velocidad2: 0,
    vida2: 0,
    magia2: 0,
    articulo2: ["pica", "arco", "hechizo"],
  }
  };
  
// Ejemplo
// La indicación ++ luego de la variable contadorPuntosJug 
// suma 1 punto al contador. Según la condición que se cumpla, 
// se irán sumando los puntos

let contadorPuntosJug1 = 0;
let contadorPuntosJug2 = 0;
let nombre1="JOSEOVER";
let nombre2="BRUNO";
let ataque1=500; 
let ataque2=500;
let velocidad1=500; 
let velocidad2=50000;
let vida1= 500; 
let vida2=500;
let magia1=500; 
let magia2=500;
let ganador1=(ataque1+velocidad1+vida1+magia1);
let ganador2=(ataque2+velocidad2+vida2+magia2);
let ganador3=("EMPATE TECNICO");
let articulo1=["espada", "escudo", "varita"];
let articulo2=["pica", "arco", "hechizo"];

if (ataque1 > ataque2) {
  contadorPuntosJug1++;
  console.log("Este es el Poder Mas Elevado del Jugador1 con su Poder de ataque", ataque1);
} else if (ataque1 < ataque2) {
  contadorPuntosJug2++;
  console.log("Este es el Poder Mas Elevado del Jugador2 con su Ataque", ataque2);vida1
}  
if (velocidad1 > velocidad2) {
  contadorPuntosJug1++;
  console.log("Este es el Poder Mas Elevado del Jugador1 con su Poder de Velocidad", velocidad1);
} else if (velocidad1 < velocidad2) {
  contadorPuntosJug2++;
  console.log("Este es el Poder Mas Elevado del Jugador2 con su Poder de Velocidad es", velocidad2);
}  

if (vida1 > vida2) {
  contadorPuntosJug1++;
  console.log("Este es el Poder Mas Elevado del Jugador1 con su Poder de Vida es", vida1);
} else if (vida1 < vida2) {
  contadorPuntosJug2++;
  console.log("Este es el Poder Mas Elevado del Jugador2 con su Poder de Vida es", vida2);  
}  

if (magia1 > magia2) {
  contadorPuntosJug1++;
  console.log("Este es el Poder Mas Elevado del Jugador1 con su Poder de Magia", magia1);
} else if (magia1 < magia2) {
  contadorPuntosJug2++;
  console.log("Este es el Poder Mas Elevado del Jugador2 con su Poder de Magia es", magia2);
}  
  
if (ganador1 > ganador2) {
  console.log("El Gran Ganador del Juego de Poderes con sus super Articulos es:", nombre1, ganador1,articulo1);
} 
 else if (ganador1 < ganador2 ) {
  
  console.log("El Gran Ganador del Juego de Poderes con sus Super Articulos es:", nombre2, ganador2, articulo2);
  } else 

  console.log(" No Existe ganador - Se Presente un:", ganador3); 
