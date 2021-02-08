/* eslint-disable arrow-body-style */
// @ts-check

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import camelCase from 'lodash/camelCase';
// import _ from 'lodash';

// BEGIN (write your solution here)
const normalize = (document) => [...document.body.getElementsByTagName('*')]
  .forEach((el) => [...el.classList]
    .forEach((item) => el.classList.replace(item, camelCase(item))));

export default normalize;
// END

/* normalize.js
Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена
классов для всех элементов на странице. В данном случае это означает,
что происходит преобразование всех классов, написанных с использованием
kebab нотации, в camelCase нотацию: text-center => textCenter

Попробуйте решить эту задачу без использования регулярных выражений.

Примеры
// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body> */
