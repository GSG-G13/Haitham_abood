const plus = document.querySelector(".plus"),
  title_input = document.querySelector(".title"),
  content_input = document.querySelector(".content"),
  time_input = document.querySelector(".time"),
  add = document.querySelector(".button"),
  parent = document.querySelector(".parent"),
  main = document.querySelector(".cards");
// ,

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
      card.dataset.index = index;
      main.append(card);
      card.classList.add("card");
      const h3 = document.createElement("h3");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const edit = document.createElement("i");
      const remove = document.createElement("i");
      //   remove
      //   edit.setAttribute("id", allToDo[index].id);
      //   remove.setAttribute("id", allToDo[index].id);
      remove.onclick = () => {
        allToDo.splice(card.dataset.index, 1);
        localStorage.setItem("todos", JSON.stringify(allToDo));
        event.target.closest(".card");
        getAll();
      };
      edit.onclick = () => {
        const item = {
          title: h3.textContent,
          content: p1.textContent,
          time: p2.textContent,
        };
        allToDo.splice(card.dataset.index, 1,item);
        localStorage.setItem("todos", JSON.stringify(allToDo));
        event.target.closest(".card");
        getAll();
      };

      const div = document.createElement("div");
      div.style = "display: flex; justify-content: flex-end; gap: 10px";
      div.append(edit, remove);
      edit.classList.add("ri-pencil-fill");
      remove.classList.add("ri-delete-bin-7-fill");
      card.append(div, h3, p1, p2);
      h3.textContent = allToDo[index].title;
      p1.textContent = allToDo[index].content;
      p2.textContent = allToDo[index].time;
      p1.classList.add("p1");
      p2.classList.add("p2");
      h3.setAttribute("contenteditable", true);
      p1.setAttribute("contenteditable", true);
      p2.setAttribute("contenteditable", true);
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
