const tipoAtk = prompt();
const tipoDef = prompt();
const atk = prompt();
const def = prompt();

function batalla() {
  let efectividad = 0;

  switch (tipoAtk) {
    case "Agua":
      switch (tipoDef) {
        case "Agua":
            efectividad = 0.5;
          break;
        case "Fuego":
            efectividad = 2;
          break;
        case "Planta":
            efectividad = 0.5;
          break;
        case "Electrico":
            efectividad = 1;
          break;
        default:
            efectividad = 1;
          break;
      }
      break;
    case "Fuego":
        switch (tipoDef) {
        case "Agua":
            efectividad = 0.5;
          break;
        case "Fuego":
            efectividad = 0.5;
          break;
        case "Planta":
            efectividad = 2;
          break;
        case "Electrico":
            efectividad = 1;
          break;
        default:
            efectividad = 1;
          break;
      }
      break;
    case "Planta":
        switch (tipoDef) {
        case "Agua":
            efectividad = 2;
          break;
        case "Fuego":
            efectividad = 0.5;
          break;
        case "Planta":
            efectividad = 0.5;
          break;
        case "Electrico":
            efectividad = 1;
          break;
        default:
            efectividad = 1;
          break;
      }
      break;
    case "Electrico":
        switch (tipoDef) {
        case "Agua":
            efectividad = 2;
          break;
        case "Fuego":
            efectividad = 1;
          break;
        case "Planta":
            efectividad = 0.5;
          break;
        case "Electrico":
            efectividad = 0.5;
          break;
        default:
            efectividad = 1;
          break;
      }
      break;
    default:
        switch (tipoDef) {
        case "Agua":
            efectividad = 1;
          break;
        case "Fuego":
            efectividad = 1;
          break;
        case "Planta":
            efectividad = 1;
          break;
        case "Electrico":
            efectividad = 1;
          break;
        default:
            efectividad = 1;
          break;
      }
      break;
  }

  let damage = 50 * (atk/def) * efectividad;
  console.log(damage);

}

batalla();