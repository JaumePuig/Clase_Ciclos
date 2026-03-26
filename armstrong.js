
function isArmstrong(number) {
    const exp = number.toString().length;
    const cifras = number.toString().split("");
    let acumulativo = 0;
    cifras.forEach(element => {
        acumulativo += parseInt(element)**exp;
    });

    if (parseInt(number) == (acumulativo)) {
        console.log("El numero " + number + " es un numero de armstrong");
    }else{
        console.log("El numero " + number + " no es un numero de armstrong");
    }

}

isArmstrong(23);
isArmstrong(153);
isArmstrong(370);
isArmstrong(372);