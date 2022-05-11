function giveIndentation(requiredIndents) {
  let indentation = "";
  for (let index = 1; index <= requiredIndents; index++) {
    indentation = indentation + "\t";
  }
  return indentation;
}

function generateDivs(count) {
  let block = "";
  for (let numberOfDivs = count; numberOfDivs > 0; numberOfDivs--) {
    const indentation = giveIndentation(numberOfDivs - 1);
    block = indentation + "<div>\n" + block + indentation + "</div>\n";
  }
  return block;
}

function main() {
  const numberOfDivs = 4;
  console.log(generateDivs(numberOfDivs));
}

main();