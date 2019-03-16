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

addItems.addEventListener('submit', handleSubmit)
itemsList.addEventListener('click', toggleComplete)

populateList(items, itemsList)
