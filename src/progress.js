/* eslint-disable no-undef */

// BEGIN (write your solution here) (write your solution here)

// VERSION #1 ==========================================

/* export default () => {
  const bar = document.querySelector('progress');
  const interval = setInterval(() => {
    if (bar.getAttribute('value') === bar.getAttribute('max')) {
      clearInterval(interval);
    } else {
      bar.setAttribute('value', String(Number(bar.getAttribute('value')) + 1));
    }
  }, 1000);
}; */

// VERSION #2 ==========================================

export default () => {
  const bar = document.querySelector('progress');
  const handler = (count = 0) => {
    if (count <= 100) {
      bar.setAttribute('value', count);
      setTimeout(() => handler(count + 1), 1000);
    }
  };
  handler();
};

// END

/* src/application.js
Реализуйте и экспортируйте по умолчанию функцию, которая запускает код,
заполняющий элемент <progress> на один процент за 1 секунду.
Через 100 секунд процесс должен остановится, так как достигнет максимума.

Начальное состояние

<progress value="0" max="100"></progress>
Через одну секунду

<progress value="1" max="100"></progress>
Для изменения значения value используйте метод setAttribute() */
