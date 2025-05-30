const btnElem = document.getElementById("calculate")
const billElem = document.getElementById("bill")
const tipElem = document.getElementById("tip")
const totalElem = document.getElementById("total")


function calculateTotal(){
    const billValue = billElem.value;
    const tipValue = tipElem.value;
    const totalValue = billValue * (1 + tipValue/100);
    totalElem.innerText = totalValue.toFixed(2);
}

btnElem.addEventListener("click", calculateTotal)