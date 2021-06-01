const outputPeople = document.querySelector(".people-output")
const inputPeople = document.querySelector(".people-input")
const inputHungry = document.querySelector(".hungry-input")
const animals = document.querySelectorAll(".animals")
const ul = document.querySelector("ul")
const questions = document.querySelectorAll(".questions-h4")
const result = document.querySelector(".result")

let time, men, hungry, meatOpt, number, meatWeight
time = 0
men = 10
hungry = 100
meatWeight = 300
meatOpt = 'БАРАНИНЫ'
inputPeople.oninput = () =>{
    outputPeople.innerHTML = inputPeople.value
    let clas = inputPeople.classList[1]
    inputPeople.classList.remove(clas)
    inputPeople.classList.add(`men_${inputPeople.value}`)
    men = inputPeople.value
    restart()

}
inputHungry.oninput = () =>{
    let clas = inputHungry.classList[1]
    inputHungry.classList.remove(clas)
    inputHungry.classList.add(`hungry_${inputHungry.value}`)
    hungry = inputHungry.value * 100 - 100
    restart()

}
for(let elem of animals) {
    elem.onclick = (e) => {
        animals.forEach(el => el.classList.remove("active"))
        e.target.classList.add("active")
        meatOpt = e.target.dataset.meat
        meatWeight = e.target.dataset.weight
        restart()
    }
}
for(let elem of questions){
    elem.onclick = (e) => {
        questions.forEach(el => el.classList.remove("questions-active"))
        e.target.classList.toggle("questions-active")
        time = elem.dataset.time
        restart()
    }
}
function restart(){
    console.log(time)
    number = (men*(meatWeight+ hungry+ time))/1000
    result.innerHTML = `${number} КГ ${meatOpt}`.toUpperCase()
}
