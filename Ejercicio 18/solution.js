const mouse = document.getElementById("raton");
const keyboard = document.getElementById("teclado");

//Arrow Func
document.addEventListener('click',()=>{
    mouse.style.background = "#FFFFCC";
})

//Callback
addEventListener('mousemove',(e)=>{
    
    //Respecto al Pagina
    var clX = e.clientX;
    var clY = e.clientY;

    //Respecto a la Navegador
    var scX = e.screenX;
    var scY = e.screenY;

    mouse.childNodes[3].innerText="Página ("+ scX +"," + scY + ")" + "\n\nNavegador (" + clX +"," + clY + ")";

    //Cambiar color
    mouse.style.background = "#FFFFFF";
    keyboard.style.background="#FFFFFF";
})

//Callback
addEventListener('keypress',(e)=>{
    //Obtener la tecla presionada
    var codKey = e.keyCode;
    const key = e.key;

    keyboard.childNodes[3].innerText="Carácter ("+ key + ")" + "\n\nCódigo (" + codKey+ ")";

    keyboard.style.background="#CCE6FF";

})