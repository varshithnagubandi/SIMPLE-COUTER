let counter = document.getElementById("num");
function increase() {
  let previous = counter.textContent;
  let updated = parseInt(previous) + 1;
  if (updated > 0) {
    counter.style.color = "green";
  } else if (updated < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
  counter.textContent = updated;
}
function decrease() {
  let previous = counter.textContent;
  let updated = parseInt(previous) - 1;
  if (updated > 0) {
    counter.style.color = "green";
  } else if (updated < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
  counter.textContent = updated;
}
function reset() {
  let updated = 0;
  counter.textContent = updated;
  counter.style.color = "black";
}
