const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
  const inputValue = nameInput.value.trim();
  const outputValue = inputValue === '' ? 'Anonymous' : inputValue;
  nameOutput.textContent = outputValue;
}
