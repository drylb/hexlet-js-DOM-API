/* eslint-disable no-undef */
// @ts-check

// BEGIN (write your solution here)
const prettify = (document) => {
  const divs = Array.from(document.querySelectorAll('div'));
  divs.forEach((div) => {
    const textNodes = Array.from(div.childNodes)
      .filter((nodeChild) => nodeChild instanceof Text)
      .filter((nodeChild) => nodeChild.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const pTag = document.createElement('p');
      pTag.append(node.textContent);
      node.replaceWith(pTag);
    });
  });
};

export default prettify;
// END

/* src/prettify.js
Реализуйте и экспортируйте функцию по умолчанию, которая находит текст
(дочерние текстовые узлы) внутри элемента <div> и оборачивает текст в параграф.

// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
Алгоритм:

Выберите все нужные узлы по тегу

Обойдите каждый выбранный узел, найдите в его дочерних узлах (childNodes)
текстовые узлы и замените их на новые узлы, содержащие тег <p>. */
