document.addEventListener('DOMContentLoaded', () => {
  const inputValue = document.querySelector('#new-task-description');
  const button = document.querySelector('#submit');
  const list = document.querySelector('#tasks');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValue.value === '') {
      alert('Please enter a task');
    } else {
      const liDOM = document.createElement('li');
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'X';
      liDOM.innerText = inputValue.value;
      liDOM.append(deleteButton);
      list.append(liDOM);
      inputValue.value = '';
      deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
      });
    }
  });
});
