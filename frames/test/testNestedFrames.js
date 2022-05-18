/* eslint-disable max-len */
const assert = require('assert');

const {openingTag, closingTag} = require('./../src/nestedFrames.js');

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
