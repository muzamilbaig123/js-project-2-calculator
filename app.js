let num1 = document.querySelectorAll(".firstnum input")[0];
let num2 = document.querySelectorAll(".lastnum input")[0];
let resultH1 = document.querySelectorAll(".output h1")[0];
let operator = document.querySelectorAll(".allopertor input")[0];
let errorPick = document.querySelectorAll(".error")[0];
let errorH1Pick = document.querySelectorAll(".error h1")[0];
// 

function total () {
    let finalNum1 = Number(num1.value)
    let finalNum2 = Number(num2.value)
    if(operator.value === "+"){
        resultH1.innerHTML = `Total Add is: ${finalNum1 + finalNum2}`
    }
    else if(operator.value === "-"){
        resultH1.innerHTML = `Total Subtraction is: ${finalNum1 - finalNum2}`
    }
    else if(operator.value === "*"){
        resultH1.innerHTML = `Total Multiply is: ${finalNum1 * finalNum2}`
    }
    else if(operator.value === "/"){
        resultH1.innerHTML = `Total divide is: ${finalNum1 / finalNum2}`
    }
    else if(operator.value === "%"){
        resultH1.innerHTML = `Total Reminder is: ${finalNum1 % finalNum2}`
    }
    else{
        errorPick.style = "display: block;"
        errorH1Pick.innerHTML = "Please Enter The Numeric Number"
    }
}

function reset () {
    num1.value = "";
    num2.value = "";
    operator.value = "";
    errorPick.style = "display: none;"
}