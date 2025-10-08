// export const addTask = event => {};

//my code
//

import { getFromLS, saveInLS } from './local-storage-api';
import { renderTasks } from './render-tasks';

const TASKS = 'tasks-list';
export let tasksList = getFromLS(TASKS) || [];

export const addTask = event => {
  event.preventDefault();

  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();
  //if (title === "" || description === "") !!!
  if (!(title && description)) {
    alert('Please fill in all fields!');
    return;
  }
  const newTask = { title, description };
  //   console.log(newTask);
  tasksList.push(newTask);
  //   console.log(tasksList);
  saveInLS(TASKS, tasksList);
  renderTasks(tasksList);
};

export const deleteTask = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const titleForDelete = event.target.nextElementSibling.textContent;
  //   console.log(titleForDelete);
  tasksList = tasksList.filter(task => task.title !== titleForDelete);
  saveInLS(TASKS, tasksList);
  renderTasks(tasksList);
};
