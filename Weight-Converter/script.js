const inputElem = document.querySelector('#input')
const errorElem = document.querySelector('#error')
const resultElem = document.querySelector('#result')

let errorTime;
let resultTime;

function updateResults(){
    if(inputElem.value <= 0 || isNaN(inputElem.value)){
        errorElem.innerText = "Please enter a valid number!";
        clearTimeout(errorTime)
        errorTime = setTimeout(() => {
            errorElem.innerText = "";
            inputElem.value = '';
        },2000)
    }else{
        resultElem.innerText = (+inputElem.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultElem.innerText = '';
            inputElem.value = '';
        },2000);
    }
}

inputElem.addEventListener("input", updateResults)

