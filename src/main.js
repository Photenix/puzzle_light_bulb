import './style.css'

import player from './fourWall'
import { getData, insertText, optionConsole } from './dialogController'
import bombillaOFF from '../public/BombillaOFF.png'

let dataText = ''
let countText = 0
let light = false
getData().then( txt => dataText = txt )

const handleButton = (event) =>{
  if( countText < dataText.length && !(player.welcome) ){
    insertText( dataText[countText] )
    countText++
    if( countText == dataText.length ){
      player.welcome = true
      localStorage.setItem('MyLight', JSON.stringify(player))
      createConsole()
    }
  }
}

const handlePress = ( event ) => { 
  if( event.key == 'Enter' ){
    optionConsole( event.target.value )
    event.target.value = ''
    let msg = document.getElementById("msg")
    msg.scrollTop = msg.scrollHeight
  }
}

const createConsole = () =>{
  document.getElementById('game').innerHTML += `<div id="console"> ><input type="text" id="console-input"> </div>`
  let input = document.getElementById('console-input')
  input.addEventListener('keypress', handlePress)
}

if( player.welcome ){
  createConsole()
}


document.querySelector('#app').innerHTML += `
  <div class="switch">
    <label for="switch" id='action'>
      <div class="pressme"></div>
    </label>
    <input type="checkbox" name="switch" id="switch" checked>
  </div>
  <img src=${bombillaOFF} alt="" width="400" id='myimage'>
`

const switchAction = document.getElementById('action')

switchAction.addEventListener('click', handleButton)
