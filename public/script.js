let number1 = 0;
let number2 = 0;

let result = 0;

document.getElementById('multiply').addEventListener('click', function() {
  getInputValues()
  multiplyValues()
  document.getElementById('number1').textContent = number1;
  document.getElementById('number2').textContent = number2;
  document.getElementById('result').textContent = formatNumberWithCommas(result);
});

document.getElementById('reset').addEventListener('click', function() {
  resetValues()
  document.getElementById('number1').textContent = number1;
  document.getElementById('number2').textContent = number2;
  document.getElementById('result').textContent = formatNumberWithCommas(result);
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
});

function formatNumberWithCommas(number) {
    return number.toLocaleString();
}

function multiplyValues() {
  result = number1 * number2;
}

function getInputValues() {
    // Select the input element using its id
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
  
    // Get the value of the input element
    number1 = input1.value;
    number2 = input2.value;

    // You can now use the inputValue variable as needed
    //console.log(inputValue); // For demonstration, we're just logging it to the console
}

function resetValues() {
  number1 = 0;
  number2 = 0;
  result = 0;
}
