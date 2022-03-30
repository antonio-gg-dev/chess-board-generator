function updateBoard() {
  const body = document.querySelector('body');
  const oddColor = document.querySelector('#odd-color');
  const evenColor = document.querySelector('#even-color');
  const separation = document.querySelector('#separation-amount');

  body.style.setProperty('--odd-color', oddColor.value);
  body.style.setProperty('--even-color', evenColor.value);
  body.style.setProperty('--separation-amount', separation.value + 'mm');
}

function resetBoard() {
  const form = document.querySelector('form');

  form.reset();
  updateBoard();
}

function printBoard() {
  window.print();
}

