const fs = require('fs');

const border = () => 'border:2em solid black;';
const width = () => 'width:25em;';
const height = () => 'height:25em;';

const attributes = () => border() + width() + height();

const addAttributes = (property, attributes) => property + '=' + attributes;

const openingTag = (tag, property, attributes) => '<' + tag + ' ' + addAttributes(property, attributes) + '>';

const closingTag = (tag) => '</' + tag + '>';

const generateTag = function (tag, value, property = 'style', attributes = '') {
  return openingTag(tag, property, attributes) + value + closingTag(tag);
};

const generateBox = generateTag('div', '', 'style', JSON.stringify(attributes()));
const generateBody = generateTag('body', generateBox);
const generateHtml = generateTag('html', generateBody);

fs.writeFileSync('box.html', generateHtml, 'utf8');
