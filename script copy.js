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

const add = () => {
  arrplus = parseInt(arr);
  arr = "";
  p.innerHTML = arrplus + " + " + arr;
};

const subtract = () => {
  arrmin = parseInt(arr);
  arr = "";
  p.innerHTML = arrmin + " - " + arr;
};

const multiply = () => {
  arrmult = parseInt(arr);
  arr = "";
  p.innerHTML = arrmult + " * " + arr;
};

const divide = () => {
  arrdiv = parseInt(arr);
  arr = "";
  p.innerHTML = arrdiv + " / " + arr;
};

const enter = () => {
  if (arrplus != null) {
    arr = arrplus + parseInt(arr);
    arrplus = null;
  } else if (arrmin != null) {
    arr = arrmin - parseInt(arr);
    arrmin = null;
  } else if (arrmult != null) {
    arr = arrmult * parseInt(arr);
    arrmult = null;
  } else if (arrdiv != null) {
    arr = arrdiv / parseInt(arr);
    arrdiv = null;
  }
  p.innerHTML = arr;
  console.log(arr);
};

const cl = () => {
  arr = "";
  console.log(arr);
  p.innerHTML = 0;
};
