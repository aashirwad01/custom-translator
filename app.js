var txtArea=document.querySelector("#txt-area");
var btn_getMirror=document.querySelector("#btn-mirror");
btn_getMirror.addEventListener("click",btnClick);
var btn_clear=document.querySelector("#btn-clear");
btn_clear.addEventListener("click",btnClear);
var url="https://tranquil-falls-70811.herokuapp.com/translate/mirror.json";

function urlGenerator(url,text){
    var encodedURI=encodeURI(text);
    return `${url}?text=${encodedURI}`;}


    function value(){
    var inputvalue=txtArea.value;
    var finalURL=urlGenerator(url,inputvalue);
    console.log(finalURL);
    txtArea.value="";
    return(finalURL);
    }

    function btnClick(){
        
        fetch(value())
        .then( response => response.json())
        .then( json => {txtArea.value=json.contents.translated})
        
        .catch(() => alert("error happended"))

       
    }

    function btnClear(){
        txtArea.value="";
        console.log("Done");
    }
    
    


   

    // await delay(5000);
    // txtArea.value="";