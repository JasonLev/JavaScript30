const bandsUL = document.querySelector('#bands')
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const removeArticle = bandName => bandName.replace(/^(a |the |an )/i, '').trim()
const sorted = bands.sort((a,b) => removeArticle(a) > removeArticle(b) ? 1 : -1)

bandsUL.innerHTML = sorted.map(band => `<li>${band}</li>`).join('')
