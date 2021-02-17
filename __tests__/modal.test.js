/* eslint-disable no-undef */

import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/modal';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'modal.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  const [button1, button2] = document.querySelectorAll('[data-toggle="modal"]');
  const [closeButton1, closeButton2] = document.querySelectorAll('[data-dismiss="modal"]');
  expect(getTree()).toMatchSnapshot();

  button1.click();
  expect(getTree()).toMatchSnapshot();

  closeButton1.click();
  expect(getTree()).toMatchSnapshot();

  button2.click();
  expect(getTree()).toMatchSnapshot();

  closeButton2.click();
  expect(getTree()).toMatchSnapshot();
});
