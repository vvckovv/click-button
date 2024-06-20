const rectangle = document.getElementById('rectangle');
const greenButton = document.getElementById('greenBtn');
const redButton = document.getElementById('redBtn');

function changeColor(color) {
rectangle.style.backgroundColor = color;
}

greenBtn.addEventListener('click', () => changeColor('green'));
redBtn.addEventListener('click', () => changeColor('red'));
resetBtn.addEventListener('click', () => changeColor('black'));
