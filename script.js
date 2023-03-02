const plus = document.querySelector(".plus"),
  title_input = document.querySelector(".title"),
  content_input = document.querySelector(".content"),
  time_input = document.querySelector(".time"),
  add = document.querySelector(".button"),
  parent = document.querySelector(".parent");

// ,
// edit = document.querySelector('.edit'),
// remove = document.querySelector('.remove')
const allTodo = [];
plus.onclick = () => {
  console.log("here");
  plus.classList.toggle(`Hidden`);
  parent.classList.toggle(`Hidden`);
};

add.onclick = () => {
  const todo = {
    id: new Date(),
    title: title_input.value,
    content: content_input.value,
    time: time_input.value,
  };
  allTodo.push(todo);
  localStorage.setItem("todos", JSON.stringify(allTodo));
  
 let addedTodo = JSON.parse(localStorage.getItem("todos"));

};
