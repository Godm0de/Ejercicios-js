function valDate(date){
    return new RegExp(/\d{2}\/\d{2}\/20\d{2}/).test(date);
}

function valEmail(email){
    return /\w+.+\@\w+.(\w{3}|\w{2})/.test(email);
}

function wordConv(name){
    return name.split(" ").reverse().join(",");
}

function escapeHTML(text) {
    var replacements = [["/\&/", "&amp;"], ["/\"/", "&quot;"], 
                        ["/</", "&lt;"], ["/>/", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}

function removeScripts(html){
    return html.replace( /<script>.+<\/script>/,"");
}
