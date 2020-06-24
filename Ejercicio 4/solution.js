var valores = [true, 5, false, "hola", "adios", 2];

var mayor = ""; //Variable Mayor
var suma = 0; //Variable almacena suma
for(var i=0; i<valores.length;i++){
    if(typeof(valores[i]) == "string"){
        if(valores[i].length > mayor.length)
            mayor = valores[i];
    }else if(typeof(valores[i]) == "number"){
            suma = suma + valores[i];
    }else if(typeof(valores[i] == "boolean")){
            valores[i] = !valores[i];
    }
}

console.log(valores);
console.log(suma);
console.log(mayor);