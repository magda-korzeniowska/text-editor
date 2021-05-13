// const { text } = require("express");

const btns = Array.prototype.slice.call(document.querySelectorAll('[data-command]'));

btns.forEach(btn => btn.addEventListener('click', () => {
  let command = btn.getAttribute('data-command');
  document.execCommand(command);
}));


const form = document.querySelector('.editor');
form.addEventListener('submit', setContent);

function setContent() {
  let inputText = document.querySelector('.editor__text').innerHTML;
  document.getElementById('hidden-field').value = inputText;
  if (inputText === '') {
    return false;
  }
}

const loadBtn = document.querySelector('.editor__button--load');
loadBtn.addEventListener('click', loadText);

function loadText() {
  fetch("/text").then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(data => {

    console.log(data.text)

    let div = document.querySelector('.editor__text')
    div.innerHTML = data.text
  }).catch(err => {
    console.log('Sorry, something went wrong...🤬: ', err)
  })
}


