/* eslint-disable no-undef */
const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

// BEGIN (write your solution here)

// VERSION #1

/* export default () => {
  const root = document.querySelector('.root');
  root.append(generateField());
  const table = document.querySelector('table');
  let clickCounter = 0;

  table.addEventListener('click', (e) => {
    const { target } = e;
    if (target.textContent === 's') {
      if (clickCounter % 2 === 0) {
        target.textContent = 'x';
        clickCounter += 1;
      } else {
        target.textContent = 'o';
        clickCounter += 1;
      }
    } else {
      clickCounter += 1;
    }
  });
}; */

// VERSION #2

export default () => {
  const tableEl = generateField();

  let currentSymbol = 'x';
  const switchPlayer = () => {
    currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
  };

  tableEl.addEventListener('click', (e) => {
    const { target } = e;
    if (target.textContent === 's') {
      target.textContent = currentSymbol;
    }
    switchPlayer();
  });

  const root = document.querySelector('.root');
  root.append(tableEl);
};

// END

/* src/application.js
Реализуйте и экспортируйте по умолчанию функцию игры крестики-нолики на поле из 9 полей
(представлены таблицей). В упражнении дается готовая функция генерации поля. Воспользуйтесь
ей для инициализации игры. Поле нужно добавить в тег с классом .root.

Затем, по клику, игра ставит поочередно x и o на поле. Подразумевается,
что оба игрока играют за одним компьютером и просто кликают по очереди.

Выигрыш в игре никак не отмечается. */
