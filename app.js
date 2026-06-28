let tasks = [];
let bugs = [];

// 🧠 生成任务（PM脑）
function createTask() {
  const idea = document.getElementById("ideaInput").value;

  const task = {
    id: "TASK-" + Date.now(),
    content: idea,
    status: "pending",
    agent: "unassigned"
  };

  tasks.push(task);
  renderTasks();
}

// 📋 渲染任务
function renderTasks() {
  const board = document.getElementById("taskBoard");
  board.innerHTML = "";

  tasks.forEach(t => {
    board.innerHTML += `
      <div class="task">
        <b>${t.id}</b>
        <p>${t.content}</p>
        <small>Status: ${t.status}</small>
      </div>
    `;
  });
}

// 🤖 分发给Codex（模拟）
function sendToAgent(type) {
  alert("发送给 " + type + " Codex：\n\n" + JSON.stringify(tasks));
}

// 🧪 提交Bug
function submitBug() {
  const bug = document.getElementById("bugInput").value;

  bugs.push({
    id: "BUG-" + Date.now(),
    content: bug
  });

  renderBugs();
}

// 🧪 渲染Bug
function renderBugs() {
  const list = document.getElementById("bugList");
  list.innerHTML = bugs.map(b =>
    `<div class="bug">${b.id}: ${b.content}</div>`
  ).join("");
}