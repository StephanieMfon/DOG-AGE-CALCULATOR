Firstname = document.getElementById('first-name')
Lastname = document.getElementById('last-name')
const submitBtn = document.getElementById('SubmitBtn')
const birthYear = document.getElementById('birth-year')
const DogYearsResult = document.getElementById('Dog-years-results')
let currentYear = 2022

SubmitBtn.onclick = () =>{
if(birthYear.value <= 0 || birthYear.value > currentYear){
    DogYearsResult.innerText = `Hello ${Firstname.value} ${Lastname.value}, Please input a valid birth year.`
}else{
DogYearsResult.innerText = `Hello ${Firstname.value} ${Lastname.value},
 your age is ${currentAge()}, and you are ${getDogAge()} dog years.`
}
}

function currentAge(){
    if(Number(birthYear.value) <= 0){
        return "input valid birth year"
    }
    const result = currentYear - Number(birthYear.value)
    return result
}

function getDogAge(){
    const dogAge = currentAge()/10
    return dogAge
}