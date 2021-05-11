const btns = Array.prototype.slice.call(document.querySelectorAll('[data-command]'));

btns.forEach(btn => btn.addEventListener('click', () => {
  let command = btn.getAttribute('data-command');
  document.execCommand(command);
}));

