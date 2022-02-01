function hide(element) {
    document.querySelector(element).remove();
}

var count1 = 2;
var count2 = 500;
var count1Element = document.querySelector('#low');
var count2Element = document.querySelector('#up');


function down(){
    count1--
    count1Element.innerText = count1
    console.log(count1)
}

function up(){
    count2++
    count2Element.innerText = count2
    console.log(count2)
}



var randomElement = document.querySelector("#random");

function change(){
    random = "any other name"
    randomElement.innerText = random
    console.log(random)
}