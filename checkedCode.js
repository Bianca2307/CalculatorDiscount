'use strict';

const form = document.querySelector("form");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.getElementById("quantity");
const output = document.querySelector("#output");


quantity.addEventListener("focus", function () {
    //console.log(quantity.value);
    quantity.value = "";
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (quantity.value == "") {
        alert("Add quantity");
    } else {
        handleSubmit();
    }
    quantity.value = "";
})

const itemPrice = 99.99;
let discount = 1;

quantity.addEventListener("keyup", function () {
    calcDiscount();
})


const calcDiscount = function () {

    if (quantity.value > 2 && quantity.value <= 4) {
        discount = 0.9;
    } else if (quantity.value >= 5 && quantity.value < 10) {
        discount = 0.85;
    } else if (quantity.value >= 10) {
        discount = 0.8;
    } else {
        discount = 1;
    }
    //console.log(discount);
    return discount;
}



const changeQuantity = function (e) {
    if (e.target.classList.contains("plus")) {
        quantity.value++;
    } else {
        quantity.value--;
    }


    if (quantity.value < 1) {
        quantity.value = 1;
    }
}

plus.addEventListener("click", function (e) {
    changeQuantity(e);
})
minus.addEventListener("click", function (e) {
    changeQuantity(e);
})

const displayDiscount = function () {
    
    if(discount == 0.9){
        return "-10%";
    } else if (discount == 0.85) {
        return "-15%";
    } else if(discount == 0.8){
        return "-20%";
    } else {
        return "";
    }
}

const calcFinalPrice = function(){
    return itemPrice * quantity.value * discount;
}

const handleSubmit = function () {
    calcDiscount();
    displayDiscount();
    output.innerHTML= `<div class="result">
    ${quantity.value} x $${itemPrice} <span class="percent"> ${displayDiscount()}</span> = $${calcFinalPrice().toFixed(2)}
    </div>`
}