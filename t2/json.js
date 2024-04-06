
const personaje={
    "id": 140,
    "name": "Genital Washer",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/140",
    "created": "2017-12-27T18:47:44.566Z"
} 
  console.log(personaje.origin.url);

  function per(){

    document.getElementById("numeral").innerHTML=personaje.dni
    document.getElementById("result").innerHTML="el personaje "+personaje.name+" esta "+ personaje.status

  }
 

 

 const jugador={
   
    "id": 2,
    "name": "nahuel",
    "apellido": "barriios",
    "apodo": "perrito",
    "edad": "28",
    "clubes":["san lorenzo","U.cay"],
    "activo":true,
    "sueldo":1000000.99

 }
console.log(jugador.name);

//826     el personaje : nombre  esta:  status vivio o muerto
// un imput que pida los datos y luego los muestre