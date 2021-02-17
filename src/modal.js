/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
// BEGIN (write your solution here)

// VERSION #1 ==========================================

/* export default () => {
  const btnModal1 = document.querySelector('[data-target="#exampleModal"]');
  const btnModal2 = document.querySelector('[data-target="#exampleModal2"]');

  const modal1 = document.querySelector('#exampleModal');
  const modal2 = document.querySelector('#exampleModal2');

  btnModal1.addEventListener('click', () => {
    modal1.classList.add('show');
    modal1.style.display = 'block';
    const closeBtn = modal1.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal1.classList.remove('show');
      modal1.style.display = 'none';
    });
  });
  btnModal2.addEventListener('click', () => {
    modal2.classList.add('show');
    modal2.style.display = 'block';
    const closeBtn = modal2.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal2.classList.remove('show');
      modal2.style.display = 'none';
    });
  });
}; */

// VERSION #2 ==========================================

const openHandler = (modal) => {
  modal.classList.add('show');
  modal.style.display = 'block';
};

const closeHandler = (modal) => {
  modal.classList.remove('show');
  modal.style.display = 'none';
};

export default () => {
  const buttons = document.querySelectorAll('[data-toggle="modal"]');
  buttons.forEach((element) => {
    const id = element.dataset.target;
    const modal = document.querySelector(id);
    element.addEventListener('click', () => openHandler(modal));
    const closeBtn = modal.querySelector('[data-dismiss="modal"]');
    closeBtn.addEventListener('click', () => closeHandler(modal));
  });
};
// END

/* application.js
Реализуйте и экспортируйте по умолчанию функцию, которая отвечает за показ модальных окон.

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title 1</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

Модальные окна определяются по селектору data-toggle="modal".
Идентификатор самого окна хранится в аттрибуте data-target кнопки

Чтобы окно всплыло, необходимо в элемент с id из data-target добавить класс show
и стиль display выставить в block

За скрытие модального окна отвечает крестик доступный по селектору data-dismiss="modal"
внутри модального окна. Нажатие на кнопку приводит к обратному эффекту, удаляется класс show,
а display выставляется в none.
 */
