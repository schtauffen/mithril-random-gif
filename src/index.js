import style from '~/test.styl'

const app = document.getElementById('app')

app.innerHTML = `
  <a href="javascript:void(0)">blip</a>  
  <button class="${style.link}">blop</button>
`
