const btn = document.querySelector(".btn") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;
const myInput = document.getElementById("myInput") as HTMLInputElement;

btn?.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  addTodo();
  clearTodo();
});
list.addEventListener("click", (e: MouseEvent) => {
  if ((<Element>e.target).classList.contains("delete")) {
    (<Element>e.target).parentElement?.remove();
  }
});

const addTodo = () => {
  let data: string = myInput.value;
  let html: string = ``;
  html = `
        <li class="todo" style="display:block;background: darkgray; border-radius: 3px;">
          ${data}
           <i class="fa-sharp fa-solid fa-trash delete" style="float: right;"></i>
          </li>
         `;

  if (myInput.value === "") {
    console.log("hata");
    alert("BİR TODO GİRİNİZ");
  } else {
    list.innerHTML += html;
  }
};

const clearTodo = () => {
  myInput.value = "";
};
