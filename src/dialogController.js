const REGEXT = /^#.*#$/g;

const getData = async () => {
    const x = await fetch("./src/dialog.txt")
    const y = await x.text()
    return y.split('\n')
}

const formatText = ( str ) =>{
    let jack = str.split(" ")
    for (let i = 0; i < jack.length; i++) {
        let element = jack[i];
        if( element.search(REGEXT) != -1 ){
            jack[i] = `<b>${element.replace(/#/g,'')}</b>`
        }
    }

    return jack.join(" ")
}

const insertText = ( str ) =>{
    let p = `<p>${formatText(str)}</p>`  
    document.getElementById('msg').innerHTML += p
}

const optionConsole = ( str ) =>{
    if( str == 'help' ){
        insertText(`#${str}#`)
        insertText('Hola querido programador veo que quieres prender el bombillo')
        insertText('Necesitaras tres cosas para hacerlo')
        insertText('1. Paciencia')
        insertText('2. Debuggear codigo ajeno')
        insertText('3. Saber que el archivo de bombillo se llama BombilloON.png')
        insertText('Para ver las condiciones para lograr el reto escribe #find#')
    }
    else if( str == "find" ){
        insertText(`#${str}#`)
        insertText('1. Tiene que mostrarse la imagen')
        insertText('2. En el codigo debe estar true la luz')
    }
    else if( str == "clear" || str == 'cls'){
        document.getElementById('msg').innerHTML = ''
    }
    else if( str == "check" ){
        let img = document.getElementById("myimage")
        console.log( img.src );
    }
    else{
      insertText(
        `El comando #${str}# no esta registrado`
      )
    }
  }

export { getData, insertText, optionConsole }