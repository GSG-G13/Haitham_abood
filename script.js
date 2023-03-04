//select all HTML elements that are necessary.
const plus = document.querySelector(".plus"),
  title_input = document.querySelector(".title"),
  content_input = document.querySelector(".content"),
  time_input = document.querySelector(".time"),
  add = document.querySelector(".button"),
  parent = document.querySelector(".parent"),
  main = document.querySelector(".cards");
//declare allTodo array to store all todos.
let allTodo = [];
// plus event is for toggle hidden class from the add todo form.
plus.onclick = () => {
  plus.classList.toggle(`Hidden`);
  parent.classList.toggle(`Hidden`);
};
/*
function getAll its responsible for show all todos,
and its have 2 events inside it which are edit and delete todo,
getAll function will create card "html" with todo information inside it,
getAll will loop for all todos insde allTodo array and put that info (object)
inside the card "html".
*/
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
      /*
      delete event will splice the todo from allToDo array,
      then set the array again in localStorage,
      last thing is recall getAll function again to see the changes.
      */
      remove.onclick = () => {
        allToDo.splice(card.dataset.index, 1);
        localStorage.setItem("todos", JSON.stringify(allToDo));
        // event.target.closest(".card");
        getAll();
      };
      /* 
      edit event
      */
      edit.onclick = () => {
        //select the new edits of the todo,
        const item = {
          title: h3.textContent,
          content: p1.textContent,
          time: p2.textContent,
        };
        /*
        splice the todo from allToDo array, 
        and add the new todo in place of the old one,
        then set the array again in localStorage,
        last thing is recall getAll function again to see the changes.
         */
        allToDo.splice(card.dataset.index, 1, item);
        localStorage.setItem("todos", JSON.stringify(allToDo));
        // event.target.closest(".card");
        getAll();
      };
      /* 
      the code below is for creating the card and put the todo data in it,
      with some style for the card.
      */
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
// here we call the getAll function is the local storage have the todos key.
if (JSON.parse(localStorage.getItem("todos"))) {
  getAll();
}
/*
add even is for adding new todo into allTodo array,
but first before adding into array,
we will check for array in local storage first, 
and add to it then set the array into local storage,
after adding just clear the fields of the form.
*/
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
