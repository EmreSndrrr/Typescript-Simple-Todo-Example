var btn = document.querySelector(".btn");
var list = document.getElementById("todo-list");
var myInput = document.getElementById("myInput");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (event) {
    event.preventDefault();
    addTodo();
    clearTodo();
});
list.addEventListener("click", function (e) {
    var _a;
    if (e.target.classList.contains("delete")) {
        (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
var addTodo = function () {
    var data = myInput.value;
    var html = "";
    html = "\n        <li class=\"todo\" style=\"display:block;background: darkgray; border-radius: 3px;\">\n          ".concat(data, "\n           <i class=\"fa-sharp fa-solid fa-trash delete\" style=\"float: right;\"></i>\n          </li>\n         ");
    if (myInput.value === "") {
        console.log("hata");
        alert("BİR TODO GİRİNİZ");
    }
    else {
        list.innerHTML += html;
    }
};
var clearTodo = function () {
    myInput.value = "";
};
