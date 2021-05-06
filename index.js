const colorDisplay = document.getElementById("color");

const changeBG = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const colorString = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = colorString;
  colorDisplay.innerHTML = colorString;
};

setInterval(changeBG, 1000);
