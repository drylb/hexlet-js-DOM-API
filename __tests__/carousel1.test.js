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
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'carousel1.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  const prev = document.querySelector('a[data-slide="prev"]');
  const next = document.querySelector('a[data-slide="next"]');
  next.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();
});
