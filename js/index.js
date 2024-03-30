const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

allEmployees.addEventListener("click", (evt) => {
  const namePanel = document.createElement("div")
  namePanel.setAttribute("class", "info-panel")
  namePanel.innerText = evt.target.getAttribute("data-name")
  namePanel.style.left = `${evt.clientX - left}px`
  namePanel.style.top = `${evt.clientY - top}px`
  allEmployees.append(namePanel)
})
