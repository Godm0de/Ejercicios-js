const divs = document.getElementsByTagName("div");



divs[0].childNodes[3].addEventListener('click',()=>{
    if(divs[0].childNodes[3].textContent == "Ocultar contenidos"){
            divs[0].childNodes[3].textContent = "Mostrar contenidos";
            divs[0].children[0].style.display="none";
    }else if(divs[0].childNodes[3].textContent == "Mostrar contenidos"){
            divs[0].childNodes[3].textContent = "Ocultar contenidos";
            divs[0].children[0].style.display="block";
    }
})

divs[1].childNodes[3].addEventListener('click',()=>{
    if(divs[1].childNodes[3].textContent == "Ocultar contenidos"){
            divs[1].childNodes[3].textContent = "Mostrar contenidos";
            divs[1].children[0].style.display="none";
    }else if(divs[1].childNodes[3].textContent == "Mostrar contenidos"){
            divs[1].childNodes[3].textContent = "Ocultar contenidos";
            divs[1].children[0].style.display="block";
            
    }
})

divs[2].childNodes[3].addEventListener('click',()=>{
    if(divs[2].childNodes[3].textContent == "Ocultar contenidos"){
            divs[2].childNodes[3].textContent = "Mostrar contenidos";
            divs[2].children[0].style.display="none";
    }else if(divs[2].childNodes[3].textContent == "Mostrar contenidos"){
            divs[2].childNodes[3].textContent = "Ocultar contenidos";
            divs[2].children[0].style.display="block";
    }
})




