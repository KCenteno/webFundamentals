function hide(element) {
    element.remove();
}


function turnOff(element) {
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
}
