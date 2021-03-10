// Check ki tu
let busyState = true;

// In len input
function printToInput(data, busy) {
  const input = document.querySelector('input');

  switch (data) {
    case ("C"):
      input.value = "";
      break;
    case ("="):
      input.value = eval(input.value);
      break;
    default:
      input.value += data;
  }

  busyState = busy;
}

// Chu so
document.querySelectorAll('tr:not(:first-child):not(:last-child) td:not(:last-child), tr:last-child td:nth-child(2)').forEach(button => button.addEventListener('click', (e) => {
  
  printToInput(e.target.innerText, false);
}))

// Clear
document.querySelector('tr:last-child td:first-child').addEventListener('click', (e) => {

  printToInput(e.target.innerText, true);
})

// Phep tinh
document.querySelectorAll('tr:not(:first-child) td:last-child').forEach(button => button.addEventListener('click', (e) => {

  if (!busyState) {
    printToInput(e.target.dataset.action, true);
  }
}))

// Calculate
document.querySelector('tr:last-child td:nth-child(3)').addEventListener('click', (e) => {

  if (!busyState) {
    printToInput(e.target.dataset.action, false);
  }
})
