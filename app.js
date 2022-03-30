function updateBoard() {
  const body = document.querySelector('body');
  const oddColor = document.querySelector('#odd-color');
  const evenColor = document.querySelector('#even-color');
  const borderAmount = document.querySelector('#border-amount');
  const borderColor = document.querySelector('#border-color');
  const separationAmount = document.querySelector('#separation-amount');
  const separationColor = document.querySelector('#separation-color');
  const outerSeparation = document.querySelector('#outer-separation');

  body.style.setProperty(
    '--odd-color',
    oddColor.value
  );
  body.style.setProperty(
    '--even-color',
    evenColor.value
  );
  body.style.setProperty(
    '--border-amount',
    borderAmount.value + 'mm'
  );
  body.style.setProperty(
    '--border-color',
    borderColor.value
  );
  body.style.setProperty(
    '--separation-amount',
    separationAmount.value + 'mm'
  );
  body.style.setProperty(
    '--separation-color',
    separationColor.value
  );
  body.style.setProperty(
    '--outer-separation',
    outerSeparation.checked ? 1 : 0
  );
}

function resetBoard() {
  const form = document.querySelector('form');

  form.reset();
  updateBoard();
}

function printBoard() {
  window.print();
}

