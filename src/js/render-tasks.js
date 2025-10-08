import { createMarkup } from './markup-tasks';
import { refs } from './refs';

export const renderTasks = tasks => {
  refs.list.innerHTML = createMarkup(tasks);
};
