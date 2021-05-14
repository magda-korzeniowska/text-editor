const form = document.querySelector('.editor');
const editBtns = document.querySelectorAll('[data-command]');
const loadBtn = document.querySelector('.editor__button--load');

// runs commands that manipulate the current editable region
Array.prototype.slice.call(editBtns).forEach(btn => btn.addEventListener('click', () => {
  const command = btn.getAttribute('data-command');
  document.execCommand(command);
}));

// submits text
form.addEventListener('submit', setContent);
function setContent() {
  const inputText = document.querySelector('.editor__text').innerHTML;
  document.getElementById('hidden-field').value = inputText;
};

// loads saved text
loadBtn.addEventListener('click', loadText);
function loadText() {
  fetch("/text").then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(data => {
    const textField = document.querySelector('.editor__text');
    textField.innerHTML = data.text;
  }).catch(err => {
    console.log('Sorry, something went wrong...🤬: ', err)
  });
};

