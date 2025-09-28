const arrayNumber = [];
const arrayFloat = [];

function getNumber() {
  const number = document.getElementById("inputNum").value * 1;
  arrayNumber.push(number);
  document.getElementById("txtArray").innerHTML = arrayNumber;
}

//bài 1
function positiveSum() {
  let total = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      total += arrayNumber[i];
    }
  }
  document.getElementById("txtSum").innerHTML = total;
}
document.getElementById("btnSum").onclick = positiveSum;

//bài 2
function countPositive() {
  let total = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      total++;
    }
  }
  document.getElementById("txtCount").innerHTML = total;
}
document.getElementById("btnCount").onclick = countPositive;

//bài 3

function smallestNumber() {
  let total = arrayNumber[0];
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] < total) {
      total = arrayNumber[i];
    }
  }
  document.getElementById("txtMin").innerHTML = total;
}
document.getElementById("btnSmallest").onclick = smallestNumber;

//bài 4

function smallestPositive() {
  let arrayPositive = [];
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      arrayPositive.push(arrayNumber[i]);
    }
  }
  let minPos = arrayPositive[0];
  if (arrayPositive.length > 0) {
    for (let i = 0; i < arrayPositive.length; i++) {
      if (arrayPositive[i] < minPos) {
        minPos = arrayPositive[i];
      }
    }
  }

  document.getElementById("txtMinPos").innerHTML =
    "Số dương bé nhất là" + minPos;
}

document.getElementById("btnPosSm").onclick = smallestPositive;

//bài 5
function findFinalEven() {
  let finalEven = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0) {
      finalEven = arrayNumber[i];
    }
  }
  document.getElementById("txtEven").innerHTML = finalEven;
}

document.getElementById("btnFindEven").onclick = findFinalEven;

//bài 6

function changeNumber() {
  const index1 = document.getElementById("inputIndex1").value * 1;
  const index2 = document.getElementById("inputIndex2").value * 1;

  let temp = arrayNumber[index1];

  arrayNumber[index1] = arrayNumber[index2];

  arrayNumber[index2] = temp;
  document.getElementById("txtChangePos").innerHTML = arrayNumber;
}
document.getElementById("btnChangeNum").onclick = changeNumber;

//bài 7

function sortIncrease() {
  for (let i = 0; i < arrayNumber.length - 1; i++) {
    for (let j = i + 1; j < arrayNumber.length; j++) {
      if (arrayNumber[i] > arrayNumber[j]) {
        let temp = arrayNumber[i];
        arrayNumber[i] = arrayNumber[j];
        arrayNumber[j] = temp;
      }
    }
  }
  document.getElementById("txtIncrease").innerHTML = arrayNumber;
}

document.getElementById("btnInCrease").onclick = sortIncrease;

//bài 8

function findPrime() {
  let prime = -1;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (checkPrime(arrayNumber[i])) {
      prime = arrayNumber[i];
      break;
    }
  }

  const rs = prime !== -1 ? prime : "không có số nguyên tố";
  document.getElementById("txtPrime").innerHTML = rs;
}
document.getElementById("btnFistPrime").onclick = findPrime;

function checkPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

//bài 9

function getNumberFloat() {
  const floatNumer = document.getElementById("inputFloat").value * 1;
  arrayFloat.push(floatNumer);
  document.getElementById("txtArrayFloat").innerHTML = arrayFloat;
}
document.getElementById("btnGetFloatNum").onclick = getNumberFloat;

function countInteger() {
  count = 0;
  for (let i = 0; i < arrayFloat.length; i++) {
    if (Number.isInteger(arrayFloat[i])) {
      count++;
    }
  }
  document.getElementById("txtInt").innerHTML = count;
}
document.getElementById("btnCountIns").onclick = countInteger;

//bài 10

function compare() {
  positive = 0;
  negative = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      positive++;
    } else if (arrayNumber[i] < 0) {
      negative++;
    }
  }

  let rs = "";
  if (positive > negative) {
    rs = "Số dương nhiều hơn số âm";
  } else if (negative > positive) {
    rs = "số âm nhiều hơn số dương";
  } else {
    rs = "số dương và số âm bằng nhau";
  }
  document.getElementById("txtCompare").innerHTML = rs;
}
document.getElementById("btnCompare").onclick = compare;
