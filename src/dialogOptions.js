const dialogsOptions = {
    help : ()=>`Hola querido programador veo que quieres prender el bombillo
    Necesitaras tres cosas para hacerlo
    1. Paciencia
    2. Debuggear codigo ajeno
    3. Saber que el archivo de bombillo se llama $BombillaON.png$
    Para ver las condiciones para lograr el reto escribe #find#
    Para ver las variables escribe #variables#
    Para cambiar una variable escriba #set# seguido de la variable
    Para verificar escriba #check#
    `,
    find: ()=>`1. Tiene que mostrarse la imagen la cual es $BombillaON.png$
    2. En el codigo debe estar true la luz`,
    check: ()=>{
        if( window.V["light"] == true && window.V["image"] == "BombillaON.png"){
            return "Bombillo prendido correctamente"
        }
        return "Bombillo no esta prendido o la imagen es incorrecta has desonrado a tu familia y a tus futuras generaciones"
    },
    variables: () =>{
        let img = document.getElementById("myimage")
        img = img.src
        let result = img.search('\/Bom.*\.png$')
        return `imagen = #${img.slice(result+1)}#
        luz = #${window.V["light"]}#
        `
    }
}

export default dialogsOptions