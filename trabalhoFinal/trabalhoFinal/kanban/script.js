
const modal = document.querySelector(".confirm-modal");
const columnsContainer = document.querySelector(".columns");
const columns = columnsContainer.querySelectorAll(".column");

let currentTask = null;

const defaultTasks = [
  ["Documentação", "Teste em Homologação"],
  ["Refatorar código legado", "Integração com API", "Modularização da Aplicação"],
  ["Teste em DEV", "Deploy Versão 2.17.24", "Persistir dados da API externa", "Integração com o Banco"],
  ["Criação do Ambiente de Testes", "Validação das Regras de Negócio", "Deploy Versão 1.17.24"]
];

const loadTasksFromStorage = () => {
  const storedTasks = JSON.parse(localStorage.getItem("kanbanTasks"));
  return storedTasks && storedTasks.length > 0 ? storedTasks : defaultTasks;
};

const saveTasksToStorage = () => {
  const allTasks = Array.from(columns).map(column => {
    return Array.from(column.querySelector(".tasks").children).map(task =>
      task.querySelector("div").innerHTML
    );
  });
  localStorage.setItem("kanbanTasks", JSON.stringify(allTasks));
};

const renderTasks = (tasks) => {
  tasks.forEach((colTasks, idx) => {
    colTasks.forEach(taskContent => {
      const task = createTask(taskContent);
      columns[idx].querySelector(".tasks").appendChild(task);
    });
  });
};

const updateTaskCount = (column) => {
  const tasks = column.querySelector(".tasks").children;
  const taskCount = tasks.length;
  column.querySelector(".column-title h3").dataset.tasks = taskCount;
  saveTasksToStorage();
};

const observeTaskChanges = () => {
  for (const column of columns) {
    const observer = new MutationObserver(() => updateTaskCount(column));
    observer.observe(column.querySelector(".tasks"), { childList: true });
  }
};

const createTask = (content) => {
  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;
  task.innerHTML = `
  <div>${content}</div>
  <menu>
      <button data-edit><i class="bi bi-pencil-square"></i></button>
      <button data-delete><i class="bi bi-trash"></i></button>
  </menu>`;
  task.addEventListener("dragstart", handleDragstart);
  task.addEventListener("dragend", handleDragend);
  return task;
};

const createTaskInput = (text = "") => {
  const input = document.createElement("div");
  input.className = "task-input";
  input.dataset.placeholder = "Nova tarefa...";
  input.contentEditable = true;
  input.innerText = text;
  input.addEventListener("blur", handleBlur);
  return input;
};

const handleDragover = (event) => {
  event.preventDefault();
  const draggedTask = document.querySelector(".dragging");
  const target = event.target.closest(".task, .tasks");

  if (!target || target === draggedTask) return;

  if (target.classList.contains("tasks")) {
    const lastTask = target.lastElementChild;
    if (!lastTask) {
      target.appendChild(draggedTask);
    } else {
      const { bottom } = lastTask.getBoundingClientRect();
      event.clientY > bottom && target.appendChild(draggedTask);
    }
  } else {
    const { top, height } = target.getBoundingClientRect();
    const distance = top + height / 2;

    if (event.clientY < distance) {
      target.before(draggedTask);
    } else {
      target.after(draggedTask);
    }
  }
};

const handleDragend = (event) => {
  event.target.classList.remove("dragging");
  saveTasksToStorage();
};

const handleDragstart = (event) => {
  event.dataTransfer.effectsAllowed = "move";
  event.dataTransfer.setData("text/plain", "");
  requestAnimationFrame(() => event.target.classList.add("dragging"));
};

const handleDelete = (event) => {
  currentTask = event.target.closest(".task");
  modal.querySelector(".preview").innerText = currentTask.innerText.substring(0, 100);
  modal.showModal();
};

const handleEdit = (event) => {
  const task = event.target.closest(".task");
  const input = createTaskInput(task.innerText);
  task.replaceWith(input);
  input.focus();

  const selection = window.getSelection();
  selection.selectAllChildren(input);
  selection.collapseToEnd();
};

const handleBlur = (event) => {
  const input = event.target;
  const content = input.innerText.trim() || "Nova tarefa";
  const task = createTask(content.replace(/\n/g, "<br>"));
  input.replaceWith(task);
  saveTasksToStorage();
};

const handleAdd = (event) => {
  const tasksEl = event.target.closest(".column").lastElementChild;
  const input = createTaskInput();
  tasksEl.appendChild(input);
  input.focus();
};

tasksElements = columnsContainer.querySelectorAll(".tasks");
for (const tasksEl of tasksElements) {
  tasksEl.addEventListener("dragover", handleDragover);
}

columnsContainer.addEventListener("click", (event) => {
  if (event.target.closest("button[data-add]")) {
    handleAdd(event);
  } else if (event.target.closest("button[data-edit]")) {
    handleEdit(event);
  } else if (event.target.closest("button[data-delete]")) {
    handleDelete(event);
  }
});

modal.addEventListener("submit", () => {
  if (currentTask) currentTask.remove();
  saveTasksToStorage();
});

modal.querySelector("#cancel").addEventListener("click", () => modal.close());

modal.addEventListener("close", () => (currentTask = null));

const tasks = loadTasksFromStorage();
renderTasks(tasks);
observeTaskChanges();
