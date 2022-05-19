function getRemainder(dividend, divisor) {
  return dividend % divisor;
}

function getQuotient(dividend, divisor) {
  return Math.floor(dividend / divisor);
}

function isPresent(number, digit) {
  let restOfNumber = number;
  while (restOfNumber > 0) {
    let unitDigit = getRemainder(restOfNumber, 10);
    restOfNumber = getQuotient(restOfNumber, 10);
    if (unitDigit === digit) {
      return "true";
    }
  }
  return "false";
}

function checkUniquenessOfDigits(number) {
  const unitDigit = getRemainder(number, 10);
  const restOfNumber = getQuotient(number, 10);

  if (restOfNumber <= 0) {
    return "Unique";
  }
  const result = isPresent(restOfNumber, unitDigit);
  if (result === "true") {
    return "Not unique";
  }
  return checkUniquenessOfDigits(restOfNumber);
}

function main() {
  let number = 123;
  console.log(number, "is", checkUniquenessOfDigits(number));
  number = 121;
  console.log(number, "is", checkUniquenessOfDigits(number));
}

main();