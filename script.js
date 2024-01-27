// cSpell: disable
let arr = "";
let arrplus = null;
let arrmin = null;
let arrmult = null;
let arrdiv = null;
const p = document.getElementById("dis");

const add1 = () => {
  arr += "1";
  console.log(arr);
  p.innerHTML += 1;
};

const add2 = () => {
  arr += "2";
  console.log(arr);
  p.innerHTML += 2;
};

const add3 = () => {
  arr += "3";
  console.log(arr);
  p.innerHTML += 3;
};

const add4 = () => {
  arr += "4";
  console.log(arr);
  p.innerHTML += 4;
};

const add5 = () => {
  arr += "5";
  console.log(arr);
  p.innerHTML += 5;
};

const add6 = () => {
  arr += "6";
  console.log(arr);
  p.innerHTML += 6;
};

const add7 = () => {
  arr += "7";
  console.log(arr);
  p.innerHTML += 7;
};

const add8 = () => {
  arr += "8";
  console.log(arr);
  p.innerHTML += 8;
};

const add9 = () => {
  arr += "9";
  console.log(arr);
  p.innerHTML += 9;
};

const add0 = () => {
  arr += "0";
  console.log(arr);
  p.innerHTML += 0;
};

const addition = () => {
  if (isNaN(parseFloat(arr)) === true) {
    return;
  } else {
    arrplus = parseFloat(arr);
    arr = "";
    p.innerHTML = arrplus + " + " + arr;
  }
};

const subtract = () => {
  if (isNaN(parseFloat(arr)) === true) {
    return;
  } else {
    arrmin = parseFloat(arr);
    arr = "";
    p.innerHTML = arrmin + " - " + arr;
  }
};

const multiply = () => {
  if (isNaN(parseFloat(arr)) === true) {
    return;
  } else {
    arrmult = parseFloat(arr);
    arr = "";
    p.innerHTML = arrmult + " * " + arr;
  }
};

const divide = () => {
  if (isNaN(parseFloat(arr)) === true) {
    return;
  } else {
    arrdiv = parseFloat(arr);
    arr = "";
    p.innerHTML = arrdiv + " / " + arr;
  }
};

const enter = () => {
  if (isNaN(parseFloat(arr)) === true) {
    return;
  } else if (arrplus != null) {
    arr = arrplus + parseFloat(arr);
    arrplus = null;
  } else if (arrmin != null) {
    arr = arrmin - parseFloat(arr);
    arrmin = null;
  } else if (arrmult != null) {
    arr = arrmult * parseFloat(arr);
    arrmult = null;
  } else if (arrdiv != null) {
    arr = arrdiv / parseFloat(arr);
    arrdiv = null;
  }
  p.innerHTML = arr.toPrecision(12);
  console.log(arr);
};

const cl = () => {
  arr = "";
  console.log(arr);
  p.innerHTML = "";
};

const negativ = () => {
  arr *= -1;
  p.innerHTML = arr;
  console.log(arr);
};

const percentage = () => {
  let secondarr = arr;
  arr /= 100;
  p.innerHTML = ` 1% of ${secondarr} is: ${arr} `;
};

const dot = () => {
  let prv = p.innerHTML;
  p.innerHTML = prv + ".";
  arr = arr + ".";
};
