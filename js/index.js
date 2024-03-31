const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const removePanel = () => document.querySelector(".info-panel")?.remove()

const createPanel = (x, y, name) => {
  const namePanel = document.createElement("div")
  namePanel.setAttribute("class", "info-panel")
  namePanel.innerText = name
  namePanel.style.left = `${x}px`
  namePanel.style.top = `${y}px`

  return namePanel
}

allEmployees.addEventListener("contextmenu", (evt) => {
  evt.preventDefault()
  removePanel()
  if(evt.target.getAttribute("class") === "employee"){
    const name = evt.target.getAttribute("data-name")
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name)
    allEmployees.append(infoPanel)
  }
})

/** Drag'n'Drop */

/** Add dragstart eventlistener to all the employee elements. */
employeeCards.forEach((employee) => {
  employee.addEventListener("dragstart", (evt) => {
  /** Remove infoPanel, if any */
  removePanel()
  /** 
   * Get the data-id of the target element and store in dataTransfer object to use later.  const dataId = evt.target.getAttribute("data-id")
   * 
   * Getting data-id using the evt.target property.
   * 
   * Alternatively, data-id can also be got using the element.getAttribute() in this case as we have the access to the perticular element because of forEach loop. */
  const empId = evt.target.getAttribute("data-id")
  evt.dataTransfer.setData("text/plain", empId)

  })
})

/** Add the dragenter event listener to the taskForce div and change it's styling to indicate that it is the dropping place. */
taskForce.addEventListener("dragenter", (evt) => {
  /** Prevent the default behaviour. */
  evt.preventDefault()
  /** Add the highlight-drop class to the taskForce to apply the styling dynamically. */
  evt.currentTarget.classList.add("highlight-drop")  // taskForce.classList.add("highlight-drop") can also be used.
})

/** Add the dragleave event listener to the taskForce to remove the dynamically add styling and come back to normal styling when the drop area is left. */
taskForce.addEventListener("dragleave", (evt) => {
  /** Prevent the default behaviour. */
  evt.preventDefault()
  /** Remove the highlight-drop class from taskForce */
  evt.currentTarget.classList.remove("highlight-drop")
})

/** Add the drop event listener to the taskForce and make the employee display in taskForce. */
taskForce.addEventListener("drop", (evt) => {
  /** Get the employee's data-id from the dataTransfer object, then select the element from document and append it as the child of the taskForce.*/
  const empId = evt.dataTransfer.getData("text/plain")
  evt.currentTarget.appendChild(document.querySelector(`div[data-id="${empId}"]`))
  /** Remove the highlight-drop class from taskForce */
  evt.currentTarget.classList.remove("highlight-drop")
})

/** Add the dragover event listener to the taskForce and prevent it's default action to allow the employee divs to get droppd in taskForce. */
taskForce.addEventListener("dragover", (evt) => {
  evt.preventDefault()
})
