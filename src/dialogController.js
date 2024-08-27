import dialogsOptions from './dialogOptions.js'

const REBOLT = /^#.*#$/g;
const RERED = /^\$.*\$$/g;


let V = {
    image: '',
    light: false
}

window.V = V;

const getData = async () => {
    const x = dialogsOptions["init"]()
    return x.split('\n')
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
    else if( str.search(/^[sS]et/g) != -1 ){
        let arr = str.slice(4)
        insertText(`#set#`)
        insertText(`${arr}`)
        try{ 
            arr = arr.split(" ")
            // Esta compuesto por 3 partes set = "variable"
            if( arr.length == 3 ){ 
                // insertText(`Se ha cambiado el valor #${arr[0]}# a #${arr[2]}#`)
                let variable = arr[0], value = arr[2];
                if( (variable == "luz" || variable == "light") && ( value == "true" || value == "false" )){
                    let s = document.getElementById("switch")
                    if( arr[2] === "true" ){
                        s.checked = false; s.disabled = true
                        V["light"] = true
                        insertText('El swiche se $atasco$ ahora no se puede mover pero ahora hay luz (´• ω •`)ﾉ')
                    }
                    else{
                        s.checked = true; s.disabled = false
                        V["light"] = false
                    }
                }
                else if( variable == "image" || variable == "imagen" ){
                    if( value == "BombillaON.png" && ( V["light"] )){
                        V["image"] = value
                        document.getElementById("myimage").src = "/" + value
                    }
                    else if( value == "BombillaON.png" ){
                        insertText("Se tiene que primero arreglar la luz para prender la luz ¯\\_(ツ)_/¯")
                    }
                    else{
                        insertText(`La imagen con el nombre #${variable}# no esta disponible, recuerde colocar la extension del archivo`)
                    }
                }
            }
            else{
                insertText(`La sintaxis es incorrecta, debes usar #set# seguido del nombre de la variable un '=' y su nuevo valor`)
            }
        }
        catch(e){}
    }
    else if( str == "clear" || str == 'cls'){
        document.getElementById('msg').innerHTML = ''
    }
    else{ insertText( `El comando #${str}# no esta registrado` ) }
  }

export { getData, insertText, optionConsole }