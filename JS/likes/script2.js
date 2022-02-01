var count1 = 9;
var count2 = 12;
var count3 = 9;


var count1Element = document.querySelector('#like1')
var count2Element = document.querySelector('#like2')
var count3Element = document.querySelector('#like3')


function add(){
    count1++
    count1Element.innerText = count1 + " like(s)"
    console.log(count1)
}


function add1(){
    count2++
    count2Element.innerText = count2 + " like(s)"
    console.log(count2)
}


function add2(){
    count3++
    count3Element.innerText = count3 + " like(s)"
    console.log(count3)
}
