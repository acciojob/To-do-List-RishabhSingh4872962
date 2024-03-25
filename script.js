//your code here
const todoInp=document.getElementById("newTodoInput");
const todoBtn=document.getElementById("addTodoBtn");
const todoList=document.getElementById("todoList");

todoBtn.addEventListener("click",function (e) {
	if (todoInp.value!="") {
		const li=document.createElement("li");
		li.innerText=todoInp.value;
		todoList.appendChild(li)
		todoInp.value=""
	}
})

