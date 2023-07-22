function sueldoneto() {
    let retenciones = 17;
    const porcentaje = (sueldoBruto, descuento) => (sueldoBruto * descuento)/100;
    while (true){
        let sueldo = Number(prompt('Introduzca el sueldo Bruto: '));
        if (sueldo > 0){
            bruto = sueldo - porcentaje(sueldo, retenciones);
            alert(`Este es el sueldo Neto: ${bruto}`);
            break
        }else{
            alert('Introduzca un numero mayor que 0');
        }
    }
}

function jubilacion() {
    let genero = prompt('Escriba H si es hombre o M si es mujer. si ya termino escriba fin.');
    let edad = Number(prompt('Escriba su edad'));
    while (genero != 'fin'){

        switch(genero){
            case "H":
                anos = 65 - edad;
                alert(`Le quedan ${anos} años para jubilarse`);
                break
            case "h":
                anos = 65 - edad;
                alert(`Le quedan ${anos} años para jubilarse`);
                break
            case "M":
                anos = 60 - edad;
                alert(`Le quedan ${anos} años para jubilarse`);
                break
            case "m":
                anos = 60 - edad;
                alert(`Le quedan ${anos} años para jubilarse`);
                break
            default:
                alert('Escriba una de las opciones');
                break
        }
        genero = prompt('Escriba H si es hombre o M si es mujer. si ya termino escriba fin.');
        if (genero != 'fin'){
        edad = Number(prompt('Escriba su edad'));
        }
    }
}


let calculo = prompt('Si desea calcular los años que le quedan para jubilarse escriba "jubilacion" o si desea calcular su sueldo escriba "sueldo neto". Si no desea calcular nada mas escriba fin.');
 
while(calculo != 'fin'){
    switch(calculo){
        case ('sueldo neto'):
            sueldoneto();
            break;
        case ('jubilacion'):
            jubilacion()
            break;
        default:
            alert('Ponga una de las opciones');
            break;
        }
    calculo = prompt('Si desea calcular los años que le quedan para jubilarse escriba "jubilacion" o si desea calcular su sueldo escriba "sueldo neto". Si no desea calcular nada mas escriba fin.');
    }