/* eslint-disable max-len */
const assert = require('assert');

const { openingTag, closingTag, generateTag, sizeInEm, generateHead, generateProperty } = require('./../src/nestedFrames.js');

describe('openingTag', () => {
  it('Should create opening tag for "html" tag with empty attributes', () => {
    assert.strictEqual(openingTag('html', ''), '<html style=>');
  });

  it('Should create opening tag for "body" tag with given attributes', () => {
    assert.strictEqual(openingTag('body', 'width:50em'), '<body style=width:50em>');
  });
});

describe('closingTag', () => {
  it('Should close the "html" tag', () => {
    assert.strictEqual(closingTag('html'), '</html>');
  });
});

describe('generateTag', () => {
  it('Should generate div tag with no value', () => {
    assert.strictEqual(generateTag('div'), '<div style=></div>');
  });
  
  it('Should generate div tag with given values', () => {
    assert.strictEqual(generateTag('div', 'Creating div'), '<div style=>Creating div</div>');
  });
});

describe('sizeInEm', () => {
  it('Should return the size in em', () => {
    assert.strictEqual(sizeInEm(10), '10em;');
  });
});

describe('generateHead', () => {
  it('Should generate head for given values', () => {
    assert.strictEqual(generateHead(), '<head style=><meta http-equiv="refresh" content="0.05" /></head>');
  });
  
  it('Should generate head if no value is given', () => {
    assert.strictEqual(generateHead(10), '<head style=></head>');
  });
});

describe('generateProperty', () => {
  it('Should generate property for given attribute and value', () => {
    assert.strictEqual(generateProperty('width', '10em;'), 'width:10em;');
  });
});
