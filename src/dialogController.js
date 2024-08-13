import dialogsOptions from './dialogOptions.js'

const REBOLT = /^#.*#$/g;
const RERED = /^\$.*\$$/g;

const getData = async () => {
    const x = await fetch("./src/dialog.txt")
    const y = await x.text()
    return y.split('\n')
}

const formatText = ( str ) =>{
    let jack = str.split(" ")
    for (let i = 0; i < jack.length; i++) {
        let element = jack[i];
        if( element.search(REBOLT) != -1 ){ jack[i] = `<b>${element.replace(/#/g,'')}</b>` }
        else if( element.search(RERED) != -1 ){ jack[i] = `<span>${element.replace(/\$/g,'')}</span>` }
    }

    return jack.join(" ")
}

const insertText = ( str ) =>{
    let p = `<p>${formatText(str)}</p>`  
    document.getElementById('msg').innerHTML += p
}

const cascadeDialog = ( str ) => {
    try{
        let arr = str.split('\n')
        arr.forEach(element => {
            insertText( element )
        });
    }
    catch(error){
        insertText( str + " " )
    }
}

const optionConsole = ( str ) =>{
    let isDialog = false

    for (const key in dialogsOptions) {
        if( key == str ) {isDialog = true; break}
    }

    if( isDialog ){
        insertText(`#${str}#`)
        cascadeDialog( dialogsOptions[str]() );
    }
    else if( str == "clear" || str == 'cls'){
        document.getElementById('msg').innerHTML = ''
    }
    else{ insertText( `El comando #${str}# no esta registrado` ) }
  }

export { getData, insertText, optionConsole }