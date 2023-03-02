const plus = document.querySelector(".plus"),
  title_input = document.querySelector(".title"),
  content_input = document.querySelector(".content"),
  time_input = document.querySelector(".time"),
  add = document.querySelector(".button"),
  parent = document.querySelector(".parent"),
  main = document.querySelector(".cards");
// ,
// edit = document.querySelector('.edit'),
// remove = document.querySelector('.remove')
let allTodo = [];
plus.onclick = () => {
  plus.classList.toggle(`Hidden`);
  parent.classList.toggle(`Hidden`);
};
function getAll() {
  const allToDo = JSON.parse(localStorage.getItem("todos"));
  if (allToDo) {
    main.innerHTML = "";
    for (let index = 0; index < allToDo.length; index++) {
      const card = document.createElement("div");
      main.append(card);
      card.classList.add("card");
      const h3 = document.createElement("h3");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      card.append(h3, p1, p2);
      h3.textContent = allToDo[index].title;
      p1.textContent = allToDo[index].content;
      p2.textContent = allToDo[index].time;
      p1.classList.add("p1");
      p2.classList.add("p2");
    }
  }
}
if (JSON.parse(localStorage.getItem("todos"))) {
  getAll();
}
add.onclick = () => {
  const todo = {
    id: new Date(),
    title: title_input.value,
    content: content_input.value,
    time: time_input.value,
  };
  allTodo = [];
  let local = JSON.parse(localStorage.getItem("todos"));
  if (local) {
    allTodo = [...local];
  }
  allTodo.push(todo);
  localStorage.setItem("todos", JSON.stringify(allTodo));
  title_input.value = "";
  content_input.value = "";
  time_input.value = "";
  getAll();
};
