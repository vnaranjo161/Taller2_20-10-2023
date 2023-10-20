const dateBornStr = document.getElementById(`dateBorn`)
const dateActual = new Date()
const dateBorn = new Date(dateBornStr.value)
const comment = document.getElementById(`comment`);
const verification = document.getElementById(`verification`)


verification.addEventListener(`click`, Older)

function Older(){
    let yearActual = dateActual.getFullYear()
    let yearBorn = parseInt(dateBornStr.value.slice(0,4))
    let age = yearActual-yearBorn
    if (age>18) {
        comment.textContent = "Usted es mayor de edad"
    } else {
        comment.textContent = "Usted es menor de edad"
    }
}

