const btnElem = document.querySelector("#btn")
const birthdayElem = document.querySelector("#birthday")
const resultElem = document.querySelector("#result")


function calculateAge(){
    const birthdayValue = birthdayElem.value;
    if (birthdayValue === ""){
    alert("please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
        resultElem.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdate = new Date(birthdayValue)
    // console.log(birthdate.getFullYear());
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    const month = currentDate.getMonth() - birthdate.getMonth();
    
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdate.getDate())){
        age--;
    }

    return age;
}

btnElem.addEventListener("click", calculateAge)