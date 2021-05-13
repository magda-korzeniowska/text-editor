const btns = Array.prototype.slice.call(document.querySelectorAll('[data-command]'));

btns.forEach(btn => btn.addEventListener('click', () => {
  let command = btn.getAttribute('data-command');
  document.execCommand(command);
}));


// const saveBtn = document.querySelector('.editor__button--save');

// saveBtn.addEventListener('click', () => {
//   let inputText = document.querySelector('.editor__text').innerHTML;
//   console.log(inputText)
// })

// const form = document.querySelector('.editor');

// form.addEventListener('submit', event => {
//   event.preventDefault();

// })

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   let inputText = document.querySelector('.editor__text').innerHTML;
//   let test = document.querySelector('.test').value;
//   console.log(test, inputText)
// });

function setContent() {
  let inputText = document.querySelector('.editor__text').innerHTML;
  document.getElementById('hidden-field').value = inputText;
  if (inputText === '') {
    return false;
  }
}
