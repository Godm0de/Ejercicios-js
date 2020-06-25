addEventListener('click', (e)=>{
    if(e.target.tagName == "A"){
        if(e.target.text == "Ocultar contenidos"){
            console.log(e.target);
            e.target.previousElementSibling.style.display = "none";
            e.target.text = "Mostrar contenidos";  
        }else if(e.target.text == "Mostrar contenidos"){
            e.target.previousElementSibling.style.display="block";
        }
    }
})