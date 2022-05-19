const fs = require('fs');

const myRequire = function (filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return eval(fileContent);
};

myRequire(process.argv[2]);
