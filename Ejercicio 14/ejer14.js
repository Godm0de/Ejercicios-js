function getLinksNum(){
    return document.getElementsByTagName("a").length;
}

function getPenulURLLink(){
    return document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2].getAttribute("href");
}

function getURLCounter(url){
    var elements = document.getElementsByTagName("a");
    var count = 0;
    
    for (var i=0;i<elements.length;i++){
        if((elements[i].href== url))
            count++;
    }

    return count;
}

