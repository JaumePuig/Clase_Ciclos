const binNum = "101001";//41

function toDecimal() {
    const numArray = binNum.split("");
    let acumulador = 0;
    let contador = 0;
    for (let i = numArray.length-1; i >= 0; i--) {
        if (parseInt(numArray[i]) != 0) {
            acumulador += 2**contador;
        }
        contador++;
    }

    console.log(acumulador);

}

toDecimal();