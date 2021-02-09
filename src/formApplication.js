/* eslint-disable no-undef */
import escapeGoat from 'escape-goat';

const { htmlEscape } = escapeGoat;

// BEGIN (write your solution here)

// VERSION #1

/* export default () => {
  const form = document.querySelector('.feedback-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const comment = formData.get('comment');
    const output = `<div>
      <p>Feedback has been sent</p>
      <div>Email: ${htmlEscape(email)}</div>
      <div>Name: ${htmlEscape(name)}</div>
      <div>Comment: ${htmlEscape(comment)}</div>q
    </div>
    `;
    form.outerHTML = output;
  });
}; */

// VERSION #2
const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>Feedback has been sent</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  `;
  element.replaceWith(div);
};

export default () => {
  const form = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(form, Object.fromEntries(formData));
  };
  form.addEventListener('submit', handle);
};

// END

/* В задании дана форма обратной связи, состоящая из трех полей: email, name и comment.
Реализуйте логику отправки этой формы (без физической отправки куда-либо).
Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо формы появляется такой вывод:

<div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>
src/application.js
Напишите и экспортируйте функцию по умолчанию, которая реализует необходимую логику. */
