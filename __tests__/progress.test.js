/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/progress';

jest.useFakeTimers();

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const fixuturesPath = '__fixtures__';
const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'progress.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  expect(getTree()).toMatchSnapshot();

  for (let i = 0; i < 105; i += 1) {
    jest.runOnlyPendingTimers();
    expect(getTree()).toMatchSnapshot();
  }
});
