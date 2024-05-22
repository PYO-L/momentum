const clock = document.querySelector('.clock');

function clockOperation() {
  const date = new Date();

  const seconds = String(date.getSeconds()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
clockOperation();
setInterval(clockOperation, 1000);
console.log();
