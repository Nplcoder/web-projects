const buttonsEl = document.querySelectorAll("button")
// console.log(buttonsEl);

const inputFieldEl = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
       const buttonVal = buttonsEl[i].textContent;
       if(buttonVal === "C"){
        clearResult()
       }else if(buttonVal === "="){
        calculateResult()
       }else{
        appendValue(buttonVal);
       }
    });
}

function clearResult(){
    inputFieldEl.value = ""
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonVal){
    inputFieldEl.value += buttonVal
    // inputFieldEl.value = inputFieldEl.value + buttonVal
}

