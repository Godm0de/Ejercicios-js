//DOM
const div = document.getElementsByClassName("box");

var clickNode = document.createElement("p");
div[0].appendChild(clickNode);
const clickText = div[0].children[2];

//Metodos ejercicio
var screen = tamanoVentanaNavegador();

//Variables
var centerY = screen[1]/2;
var centerX = screen[0]/2;

addEventListener('click',(event)=>{
    //Coordenadas respecto a la Navegador
    var scX = event.screenX;
    var scY = event.screenY;
   

    if(scX>centerX){
        if(scY>centerY){
            clickText.textContent = "Posición: Derecha abajo";
        }else{
            clickText.textContent = "Posición: Derecha arriba";
        }
        
    }else{
        if(scY>centerY){
            clickText.textContent = "Posición: Izquierda abajo";
        }else{
            clickText.textContent = "Posición: Izquierda arriba";
        }
        
    }

    //console.log("("+scX+","+scY+") =>(" + centerX + "," + centerY + ")");
})