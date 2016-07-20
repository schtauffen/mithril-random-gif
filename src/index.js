import '~/main.styl'
import button from '~/button.styl'

const app = document.getElementById('app')

app.innerHTML = `
  <a href="javascript:void(0)">blip</a>  
  <button class="${button.link}">blop</button>
`
