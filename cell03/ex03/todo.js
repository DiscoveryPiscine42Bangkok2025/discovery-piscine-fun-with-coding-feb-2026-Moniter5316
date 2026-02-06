
window.onload = function() {
  let saved = getCookie("todos");
  if (saved) {
    let todos = JSON.parse(saved);
    todos.forEach(todo => addTodo(todo));
  }
};

document.getElementById("newBtn").addEventListener("click", function() {
  let task = prompt("Enter a new TO DO:");
  if (task && task.trim() !== "") {
    addTodo(task.trim(), true);
  }
});

function addTodo(text, save = false) {
  let ft_list = document.getElementById("ft_list");
  let div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", function() {
    if (confirm("Do you want to remove this TO DO?")) {
      ft_list.removeChild(div);
      updateCookie();
    }
  });

  ft_list.insertBefore(div, ft_list.firstChild);

  if (save) updateCookie();
}

function updateCookie() {
  let todos = [];
  document.querySelectorAll("#ft_list .todo").forEach(item => {
    todos.push(item.textContent);
  });
  setCookie("todos", JSON.stringify(todos), 7);
}

function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let decoded = decodeURIComponent(document.cookie);
  let ca = decoded.split(';');
  for(let i=0; i<ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
  }
  return "";
}
