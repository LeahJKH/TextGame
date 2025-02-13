const txtField = document.querySelector("#txt-field");
const storyField = document.querySelector("#story");
const nextD = document.querySelector("#nextD");
const imageCont = document.querySelector("#image-cont")
const intro = [
    "So get this right...",
    "You're in the forest.",
    "What else?",
    "Oh, your name?"
];

let index = 0;

storyField.innerHTML = `<p>${intro[index]}</p>`;

nextD.addEventListener("click", () => {
    index++;

    if (index < intro.length) {
        storyField.innerHTML = `<p>${intro[index]}</p>`;
    }
    if (index = 1) {
        imageCont.style.backgroundImage = "url(./images/forest.png)"
    }

    if (index === intro.length - 1) {
        nextD.textContent = "Submit";
    }

    if (index >= intro.length) {
        const nameOfChar = txtField.value || "to lazy too input name";
        storyField.innerHTML = `<p>Nice to meet you, ${nameOfChar}!</p>`;
        nextD.textContent = "Next"
    }
});

function sceneTwo (){

}