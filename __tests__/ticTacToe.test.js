/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import run from '../src/ticTacToe';

const getCell = (rowIndex, cellIndex) => {
  const table = document.querySelector('table');
  return table.rows.item(rowIndex).cells.item(cellIndex);
};

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'ticTacToe.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  expect(getTree()).toMatchSnapshot();

  getCell(2, 2).click();
  getCell(1, 1).click();
  getCell(1, 2).click();
  expect(getTree()).toMatchSnapshot();

  getCell(2, 1).click();
  expect(getTree()).toMatchSnapshot();

  getCell(2, 1).click();
  expect(getTree()).toMatchSnapshot();

  getCell(0, 0).click();
  expect(getTree()).toMatchSnapshot();

  getCell(1, 0).click();
  getCell(0, 1).click();
  expect(getTree()).toMatchSnapshot();

  getCell(2, 0).click();
  getCell(0, 2).click();
  expect(getTree()).toMatchSnapshot();
});
