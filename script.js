const shape = document.getElementById('shape');
const greenButton = document.getElementById('greenBtn');
const redButton = document.getElementById('redBtn');

function changeColorAndShape(color, text, isCircle) {
  shape.style.backgroundColor = color;
  shape.textContent = text;
  if(isCircle) {
    shape.style.borderRadius = '50%';
    shape.style.width = '100px';
    shape.style.height = '100px';
  } else {
    shape.style.borderRadius = '0';
    shape.style.width = '200px';
    shape.style.height = '100px';
  }
}

greenBtn.addEventListener('click', () => changeColorAndShape('green', greenBtn.textContent, true));
redBtn.addEventListener('click', () => changeColorAndShape('red', redBtn.textContent, false));
resetBtn.addEventListener('click', () => changeColorAndShape('black'));
