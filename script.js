function setupButtonClickListener() {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const size = prompt("Enter a size between 0 and 100 (inclusive): ");
    if (size < 0 || size > 100) {
      alert("Size has to be in the range 0-100");
    } else {
      displayGrid(Number(size));
    }
  });
}

function displayGrid(size = 16) {
  const container = document.querySelector(".container");
  container.innerHTML = ''; // Clear the container

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.style.width = `${700 / size}px`;
      square.style.height = `${700 / size}px`;
      square.style.border = "0.5px solid black";
      square.style.boxSizing = "border-box";

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
      });
      container.appendChild(square);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayGrid();
  setupButtonClickListener();

});