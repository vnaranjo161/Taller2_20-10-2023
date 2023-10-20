const color = document.getElementById(`colorCard`)
const card = document.getElementById(`card`)
color.addEventListener(`input`, changeColor)

function changeColor(){
    card.style.backgroundColor = color.value;
}