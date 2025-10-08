/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

// import { saveInLS } from './js/local-storage-api';
// import './js/theme-switcher';

// const TASKS = 'tasks-list';

// saveInLS(TASKS, []);

// import { refs } from './js/refs';
// import { addTask } from './js/tasks';

// // Імпорт іконок та картинок
// import icon from './img/javascript.svg';
// `..<use href="${icon}#id"></use>..`;

// refs.form.addEventListener('submit', addTask);

//my code
//

import { refs } from './js/refs';
import { renderTasks } from './js/render-tasks';
import { addTask, deleteTask, tasksList } from './js/tasks';

renderTasks(tasksList);

refs.form.addEventListener('submit', addTask);
refs.list.addEventListener('click', deleteTask);
