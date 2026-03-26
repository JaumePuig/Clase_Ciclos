let acumulador = 0;

do {
    let sumador = prompt();
    acumulador += parseInt(sumador);
} while (acumulador < 50);

console.log(acumulador);