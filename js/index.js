const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const namePanel = document.createElement("div")
  namePanel.setAttribute("class", "info-panel")
  namePanel.innerText = name
  namePanel.style.left = `${x}px`
  namePanel.style.top = `${y}px`

  return namePanel
}

allEmployees.addEventListener("click", (evt) => {
  const name = evt.target.getAttribute("data-name")
  const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name)
  allEmployees.append(infoPanel)
})
