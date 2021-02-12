/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import timer from 'timer-promise';
import prettier from 'prettier';
// import { fileURLToPath } from 'url';
import { jest } from '@jest/globals';

import run from '../src/autoComplete';

/* eslint-disable no-underscore-dangle */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixuturesPath = path.join(process.cwd(), '__fixtures__');
const getTree = () => prettier.format(document.body.innerHTML, options);

const pressKey = (key, el = document.body, value = key) => {
  const e = new KeyboardEvent('input', { key, value });
  el.value = value; // eslint-disable-line
  el.dispatchEvent(e);
};

const mockResponse = (status, statusText, response) => new window.Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json',
  },
});

const mockFetch = (data) => {
  window.fetch = jest.fn().mockImplementation(() => (
    Promise.resolve(mockResponse(200, null, JSON.stringify(data)))));
};

beforeEach(async () => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'autoComplete.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', async () => {
  const input = document.querySelector('[data-autocomplete="/capitals.json"]');
  input.focus();

  expect(getTree()).toMatchSnapshot();

  mockFetch([]);
  pressKey('x', input);
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch([]);
  pressKey('backspace', input, '');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['mariehamn', 'manama', 'minsk', 'moroni']);
  pressKey('m', input);
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['moroni', 'monrovia', 'monaco', 'moscow']);
  pressKey('o', input, 'mo');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['moscow']);
  pressKey('s', input, 'mos');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();
});

test('application 2', async () => {
  const input = document.querySelector('[data-autocomplete="/countries.json"]');
  input.focus();

  mockFetch([]);
  pressKey('r', input);
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch(['russia']);
  pressKey('u', input, 'ru');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  mockFetch([]);
  pressKey('c', input, 'ruc');
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();
});
