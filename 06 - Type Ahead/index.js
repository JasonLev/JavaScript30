const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesArr = []

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => citiesArr.push(...data))
  .catch(error => console.log("Error: ", error))

const search = (input) => {
  return citiesArr.filter(location => {
    const regex = new RegExp(input, 'gi')
    return location.city.match(regex) || location.state.match(regex)
  })
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function showSuggestions() {
  const searchArr = search(this.value)
  if (searchArr.length) {
    const listHTML = searchArr.map(location => {
      const highlight = new RegExp(this.value, 'gi')
      const city = location.city.replace(highlight, `<span class="hl">${this.value}</span>`)
      const state = location.state.replace(highlight, `<span class="hl">${this.value}</span>`)
      return (
        `<li>
          <span className="name">${city}, ${state}</span>
          <span className="population">${numberWithCommas(location.population)}</span>
        </li>`
      )
    }).join('')
    suggestions.innerHTML = listHTML
  }
}
searchInput.addEventListener("change", showSuggestions)
searchInput.addEventListener("keyup", showSuggestions)
