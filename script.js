const plus = document.querySelector(".plus"),
  title = document.querySelector(".title"),
  content = document.querySelector(".content"),
  time = document.querySelector(".time"),
  add = document.querySelector(".submit"),
  parent = document.querySelector(".parent");
// ,
// edit = document.querySelector('.edit'),
// remove = document.querySelector('.remove')

plus.onclick = () => {
  console.log("here");
  plus.classList.toggle(`Hidden`);
  parent.classList.toggle(`Hidden`);
};
