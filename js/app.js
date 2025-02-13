const txtField = document.querySelector("#txt-field")
const storyField = document.querySelector("#story")
const nextD = document.querySelector("#nextD")
const intro = [
    "so get this right", "ur in the forest", "what else?", "oh your name?"
]

let intiger = 0
txtField.addEventListener("change", (e) => {
    console.log(txtField.value)
    
})

storyField.innerHTML = `<p>${intro[intiger]}</p>`
nextD.addEventListener("click", (e) => {
intiger++
storyField.innerHTML = `<p>${intro[intiger]}</p>`
if (intiger == 3) {
    intiger = 3
    nextD.textContent = "submit"
    nameOfChar = txtField.value
    console.log(nameOfChar)
}
})