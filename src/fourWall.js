import { insertText } from './dialogController'

let player = localStorage.getItem("MyLight")

if( player == null ){
    localStorage.setItem('MyLight', JSON.stringify({ welcome: false }))
}

player = JSON.parse( player )


if( player.welcome ){
    insertText('Bienvenido ¿vienes a terminar el reto?')
}

export default player