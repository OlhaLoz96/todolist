export const createMarkup = array => {
  return array
    .map(task => {
      return `<li class="task-list-item">
    <button class="task-list-item-btn">Delete</button>
    <h3>${task.title}</h3>
    <p>${task.description}</p>
</li>`;
    })
    .join('');
};
