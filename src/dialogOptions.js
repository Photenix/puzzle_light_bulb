const dialogsOptions = {
    help : ()=>`Hola querido programador veo que quieres prender el bombillo
    Necesitaras tres cosas para hacerlo
    1. Paciencia
    2. Debuggear codigo ajeno
    3. Saber que el archivo de bombillo se llama $BombilloON.png$
    Para ver las condiciones para lograr el reto escribe #find#
    Para ver las variables escribe #var#
    `,
    find: ()=>`1. Tiene que mostrarse la imagen
    2. En el codigo debe estar true la luz`,
    check: ()=>{
        let img = document.getElementById("myimage")
        return img.src
    },
    variables: () =>{
        let img = document.getElementById("myimage")
        img = img.src
        let result = img.search('\/Bom.*\.png$')
        return `Valor imagen es = #${img.slice(result+1)}#
        Valor luz es = #false#
        `
    }
}

export default dialogsOptions