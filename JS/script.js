// Get references to the HTML elements
const colorPicker = document.getElementById('color___picker');
const colorDisplay = document.getElementById('color___display');
const colorCode = document.getElementById('color___code');


// Add an event listener to the color input
colorPicker.addEventListener('input', function() {
  // Get the color value from the input
  const selectedColor = colorPicker.value;

  // Update the background color of the display box
  colorDisplay.style.backgroundColor = selectedColor;

  // Update the Hex code text
  colorCode.textContent = `Hex Code: ${selectedColor}`;
});