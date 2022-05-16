const fs = require('fs');

const randomNum = () => Math.floor(Math.random() * 250);

const backgroundColor = () => 'background-color:rgba('+randomNum() +','+ randomNum()+',' + randomNum() + ', 0.3);'
const width = (x) => 'width:' + x + 'em;';
const height = (x) => 'height:' + x + 'em;';

const attributes = (size) => backgroundColor() + width(size) + height(size);

const openingTag = (tag, attributes) => '<' + tag + ' style=' + attributes + '>';
const closingTag = (tag) => '</' + tag + '>';

const generateTag = function (tag, value, attributes = '') {
  return openingTag(tag, attributes) + value + closingTag(tag);
};

const link = () => '<link rel="stylesheet" href="./styles.css"></link>';

const createBox = function (size) {
  if (size <= 0) {
    return generateTag('div', '', JSON.stringify(attributes(size)));
  }
  return generateTag('div', createBox(size - 1), JSON.stringify(attributes(size)));
}

const main = function (size) {
  const box = createBox(size);
  const generateBody = link() + generateTag('body', box);
  const generateHtml = generateTag('html', generateBody);
  fs.writeFileSync('index.html', generateHtml, 'utf8');
};

main(process.argv[2]);
