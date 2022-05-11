function generateDivWithIndentation(count, indentation) {
  if (count < 1) {
    return "";
  }
  let tag = (indentation + "<div>\n");
  block = tag + generateDivWithIndentation(count - 1, indentation + "  ");
  block = block + (indentation + "</div>\n");
  return block;
}

function generateDivs(numberOfDivs) {
  const indentation = "";
  return (generateDivWithIndentation(numberOfDivs, indentation));
}

function main() {
  const numberOfDivs = 4;
  console.log(generateDivs(numberOfDivs));  
}

main();