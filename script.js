const time = document.querySelector('#time');
const blockHidden = document.querySelector('#hidden');
const blockVis = document.querySelector('.visible');
const myForm = document.querySelector('#myForm');
let name = document.querySelector('#name');
let text = document.querySelector('.hidden__text');

time.addEventListener('click', function () {
    blockVis.style.display = 'none';
    blockHidden.style.display = 'flex';
    myForm.style.display = 'block';
})

let elements = myForm.elements;

elements.btn.addEventListener('click', function (event) {
    event.preventDefault();
    name.textContent = elements.userName.value;
    name.style.color = elements.userColor.value;
    console.log(elements.paddingCheck.checked);
    if (elements.paddingCheck.checked === true) {
        name.style.margin = '0';
    }
    text.style.fontSize = elements.textSize.value + 'px';
})