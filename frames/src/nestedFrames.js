const fs = require('fs');

const randomNum = () => Math.floor(Math.random() * 250);

const backgroundColor = () =>
  'background-color:rgba(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ', 0.5);';

const generateProperty = (property, value) => property + ':' + value;

const sizeInEm = (size) => size + 'em;';

const attributes = (size) => backgroundColor() + generateProperty('width', sizeInEm(size)) + generateProperty('height', sizeInEm(size));

const openingTag = (tag, attributes) => '<' + tag + ' style=' + attributes + '>';
const closingTag = (tag) => '</' + tag + '>';

const generateTag = function (tag, value = '', attributes = '') {
  return openingTag(tag, attributes) + value + closingTag(tag);
};

const link = () => '<link rel="stylesheet" href="./styles.css"></link>';

const createBox = function (size) {
  if (size <= 0) {
    return generateTag('div', '', JSON.stringify(attributes(size)));
  }
  return generateTag('div', createBox(size - 1), JSON.stringify(attributes(size)));
};

const writeToFile = function (filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.log('Error while writing to the file');
  }
};

const generateHead = (limit) => {
  const value = limit > 0 ? '' : '<meta http-equiv="refresh" content="0.05" />';
  return generateTag('head', value);
};

const main = function (size, limit = 0) {
  
  const box = createBox(size);
  const generateBody = link() + generateTag('body', box);
  const headTag = generateHead(limit);
  const generateHtml = generateTag('html', headTag + generateBody);
  writeToFile('index.html', generateHtml);
};

// main(process.argv[2], process.argv[3]);

exports.openingTag = openingTag;
exports.closingTag = closingTag;
