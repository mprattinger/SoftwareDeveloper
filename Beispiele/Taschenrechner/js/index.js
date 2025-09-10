const appendToDisplay = (value) => {
  const display = document.getElementById("display");
  display.value += value;
};

const addOperator = (operator) => {
  const display = document.getElementById("display");
  const calcdsp = document.getElementById("dspcalc");

  let v = 0;
  if (display.value === "") {
    v = 0;
  } else {
    v = display.value;
  }

  //Wenn es schon was gibt, die operation ausführen
  if (calcdsp.innerText !== "") {
    //Für die Berechnung bruachen wir den letzten operator
    let lastOperator = getPreviousOperator();
    if (lastOperator === "") {
      //Es wurde vorher '=' gedrückt. Daher den aktuellen operator nehmen
      lastOperator = operator;
    }
    //Translate operator into functions
    const lastValue = parseFloat(getPrevious());
    const currentValue = parseFloat(v);
    v = calculate(lastOperator, lastValue, currentValue);
  }

  calcdsp.innerText = ` ${v} ${operator} `;

  display.value = "";
};

const getPreviousOperator = () => {
  const calcdsp = document.getElementById("dspcalc");
  const items = calcdsp.innerText.split(" ");

  if (items.length > 0) {
    const last = items[items.length - 1];
    if (isNaN(last)) {
      return last;
    }
  }

  return "";
}

const getPrevious = () => {
  const calcdsp = document.getElementById("dspcalc");
  const items = calcdsp.innerText.split(" ");

  const filtered = items.filter(item => !["+", "-", "*", "/"].includes(item) && item !== "");

  if (filtered.length > 0) {
    return filtered[filtered.length - 1];
  }

  return "";
}

const clearDisplay = () => {
  const display = document.getElementById("display");
  const calcdsp = document.getElementById("dspcalc");
  display.value = "";
  calcdsp.innerText = "";
};

const calculate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const calculateResult = () => {
  const display = document.getElementById("display");
  const calcdsp = document.getElementById("dspcalc");

  if (calcdsp.innerText === "") {
    return;
  }

  if (display.value === "") {
    return;
  }

  //Für die Berechnung bruachen wir den letzten operator
  const lastOperator = getPreviousOperator();

  //Translate operator into functions
  const lastValue = parseFloat(getPrevious());
  const currentValue = parseFloat(display.value);
  calcdsp.innerText = calculate(lastOperator, lastValue, currentValue);

  display.value = "";
}