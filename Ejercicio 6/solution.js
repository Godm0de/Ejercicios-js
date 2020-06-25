function calc_DNI(num){
    if(dni <= 99999999){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[num % 23];
    }else{
        console.log("El número de dni proporcionado no es válido");
    }
}

var dni = prompt("Introduzca su DNI: ", "Max 99999999");
var letter = prompt("Introduzca la letra: ", "A");

 if(calc_DNI(dni) != "B"){
    alert("Letra incorrecta, la letra correcta es " + calc_DNI(dni));
 }else{
     alert("Letra correcta");
 }



