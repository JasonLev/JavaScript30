const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function handleSubmit(ev) {
  ev.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    completed: false
  }
  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}

function populateList(plates=[], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.completed && "checked"}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
}

function toggleComplete(ev) {
  if (!ev.target.matches('input')) return;

  const index = ev.target.dataset.index
  items[index].completed = !items[index].completed
  localStorage.setItem('items', JSON.stringify(items))
}

function resetAll() {
  if (items.length) {
    items.forEach(item => {
      item.completed = false
    })
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  } else {
    alert("No items to mark as Undone")
  }
}

function completeAll() {
  if (items.length) {
    items.forEach(item => {
      item.completed = true
    })
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  } else {
    alert("No items to mark as Done")
  }
}

const resetBtn = document.createElement('button')
resetBtn.textContent = "Clear All as Undone"
document.querySelector('.wrapper').appendChild(resetBtn)
const completeAllBtn = document.createElement('button')
completeAllBtn.textContent = "Mark All as Done"
document.querySelector('.wrapper').appendChild(completeAllBtn)

resetBtn.addEventListener('click', resetAll)
completeAllBtn.addEventListener('click', completeAll)
addItems.addEventListener('submit', handleSubmit)
itemsList.addEventListener('click', toggleComplete)

populateList(items, itemsList)
