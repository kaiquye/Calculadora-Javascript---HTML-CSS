function calcular(n1){
    formCaculadora.text1.value = formCaculadora.text1.value + n1;
}


var buttonNumbers = document.getElementsByClassName("number");

function corUm(obj){
   obj.target.style.boxShadow=" 1px 2px 22px 2px rgb(462, 0, 88)";
}
function corDois(obj){
    obj.target.style.boxShadow="1px 2px 22px 2px rgb(225, 0, 255)";   
}
function trocarCorButton(obj){
    for(var i = 0; i < buttonNumbers.length ; i++){
        buttonNumbers[i].removeEventListener("click", corUm);
    }
    for(var i = 0; i < obj.length ; i++){
        obj[i].addEventListener("click", corDois);
    }
 
}
function eventoUm(){
    for(var i = 0; i < buttonNumbers.length ; i++){
        buttonNumbers[i].addEventListener("click", corUm);
    }
}

function eventoDois(){
    document.getElementById("idmais").addEventListener("click", trocarCorButton(buttonNumbers));
    formCaculadora.text1.value = formCaculadora.text1.value + "+";
}


window.addEventListener("load" , eventoUm, eventoDois); 