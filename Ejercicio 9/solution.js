function analizeWord(word){
    var upperCase ="abcdefghyjklmnñopqrstuvwxyz";
    var lowerCase = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    var bUpper, bLower;

    for(var i=0; i<word.length;i++){
        if(upperCase.indexOf(word.charAt(i),0)){
            bUpper = true;
        }else if(lowerCase.indexOf(word.charAt(i),0)){
            bLower = true;
        }
    }

    if(bUpper && bLower){
        return "Contiene mayúsculas y minúsculas";
    }else if(bUpper){
        return "Solo contiene mayúsculas";
    }else if(bLower){
        return "Solo contiene minúsculas";
    }
        

}