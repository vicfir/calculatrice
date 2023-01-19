//1
let btn1 = document.querySelector("button");

btn1.addEventListener("click", ()=>{
    let firstNum = Number(document.querySelectorAll("input")[0].value);
    let secoundNum = Number(document.querySelectorAll("input")[1].value);

    let response1 = document.getElementById("response1");
    response1.textContent=`${firstNum + secoundNum}`;
});

//2
let btn2 = document.querySelectorAll("button")[1];

btn2.addEventListener("click", ()=>{
    let firstNum2 = Number(document.querySelectorAll("input")[2].value);
    let secoundNum2 = Number(document.querySelectorAll("input")[3].value);

    let operator1 = document.querySelector("select").value;
    let response2 = document.getElementById("response2");

    switch (operator1) {
        case "+":
            response2.textContent = `${firstNum2 + secoundNum2}`;
            break;
        case "-":
            response2.textContent = `${firstNum2 - secoundNum2}`;
            break;
        case "/":
            response2.textContent = `${firstNum2 / secoundNum2}`;
            break;
        case "*":
            response2.textContent = `${firstNum2 * secoundNum2}`;
            break;
        default:
            console.log("error");
            break;
    }

});

//3
let btn3 = document.querySelectorAll("button")[2];

let operator2 = document.getElementById("operatorsExo3");

let operatorDisplay = document.querySelector("#operatorsExo3 > span > i");
console.log(operatorDisplay);

let btnOperators = document.querySelectorAll("#operatorsExo3 > .m-1");
console.log(btnOperators);


for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", ()=>{
        operatorDisplay.setAttribute("class", btnOperators[i].children[0].className);
    })
}

btn3.addEventListener("click", ()=>{
    let firstNum3 = Number(document.querySelectorAll("input")[4].value);
    let secoundNum3 = Number(document.querySelectorAll("input")[5].value);

    let response3 = document.getElementById("response3");

    switch (operatorDisplay.className) {
        case "fas fa-plus":
            response3.textContent=`${firstNum3 + secoundNum3}`
            break;
        case "fas fa-minus":
            response3.textContent=`${firstNum3 - secoundNum3}`
            break;
        case "fas fa-times":
            response3.textContent=`${firstNum3 * secoundNum3}`
            break;
        case "fas fa-divide":
            response3.textContent=`${firstNum3 / secoundNum3}`
            break;
        default:
            break;
    }
})