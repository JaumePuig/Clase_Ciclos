let newYear = 1582;
//1984 --> Madera Rata

function calcChino() {
  let elemento = "Madera";
  let animal = "Rata";
  let diferencia = Math.abs(newYear - 1984);
  while (diferencia > 12) {
    diferencia -= 12;
  }
  let diferencia2 = Math.abs(newYear - 1984);
  while (diferencia2 > 10) {
    diferencia2 -= 10;
  }

  switch (diferencia) {
    case 0:
      animal = "Rata";
      break;
    case 1:
      animal = "Buey";
      break;
    case 2:
      animal = "Tigre";
      break;
    case 3:
      animal = "Conejo";
      break;
    case 4:
      animal = "Dragon";
      break;
    case 5:
      animal = "Serpiente";
      break;
    case 6:
      animal = "Caballo";
      break;
    case 7:
      animal = "Oveja";
      break;
    case 8:
      animal = "Mono";
      break;
    case 9:
      animal = "Gallo";
      break;
    case 10:
      animal = "Perro";
      break;
    case 11:
      animal = "Cerdo";
      break;

    default:
      animal = "tonto";
      break;
  }

  switch (diferencia2) {
    case 0:
    case 1:
        elemento="Madera";
      break;
    case 2:
    case 3:
        elemento="Fuego";
      break;
    case 4:
    case 5:
        elemento="Tierra";
      break;
    case 6:
    case 7:
        elemento="Metal";
      break;
    case 8:
    case 9:
        elemento="Agua";
      break;
    default:
        elemento="Estupido";
      break;
  }

  console.log("El año " + newYear + " es el año de " + elemento + " " + animal);
}

calcChino();