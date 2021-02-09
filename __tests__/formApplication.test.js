/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/formApplication';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixuturesPath = path.join('__fixtures__');
const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index1.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('formApplication', () => {
  const form = document.querySelector('.feedback-form');
  expect(getTree()).toMatchSnapshot();

  const { email, name, comment } = form.elements;
  email.value = 'test@email.com';
  name.value = 'Matz';
  comment.value = 'Ruby ze best';
  expect(getTree()).toMatchSnapshot();

  form.dispatchEvent(new Event('submit'));
  expect(getTree()).toMatchSnapshot();
});
