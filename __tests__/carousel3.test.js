/* eslint-disable no-undef */

import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/carousel';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixuturesPath = path.join('__fixtures__');
const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'carousel3.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  const prev1 = document.querySelectorAll('a[data-slide="prev"]')[0];
  const next1 = document.querySelectorAll('a[data-slide="next"]')[0];
  const prev2 = document.querySelectorAll('a[data-slide="prev"]')[1];
  const next2 = document.querySelectorAll('a[data-slide="next"]')[1];
  next1.click();
  expect(getTree()).toMatchSnapshot();

  prev1.click();
  expect(getTree()).toMatchSnapshot();

  next2.click();
  expect(getTree()).toMatchSnapshot();

  prev2.click();
  expect(getTree()).toMatchSnapshot();
});
