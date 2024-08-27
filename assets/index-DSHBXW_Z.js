(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const g={help:()=>`Hola querido programador veo que quieres prender el bombillo
    Necesitaras tres cosas para hacerlo
    1. Paciencia
    2. Debuggear codigo ajeno
    3. Saber que el archivo de bombillo se llama $BombillaON.png$
    Para ver las condiciones para lograr el reto escribe #find#
    Para ver las variables escribe #variables#
    Para cambiar una variable escriba #set# seguido de la variable
    Para verificar escriba #check#
    `,find:()=>`1. Tiene que mostrarse la imagen la cual es $BombillaON.png$
    2. En el codigo debe estar la variable luz en true`,check:()=>window.V.light==!0&&window.V.image=="BombillaON.png"?"Bombillo prendido correctamente has obtenido el final programador":"Bombillo no esta prendido o la imagen es incorrecta has desonrado a tu familia y a tus futuras generaciones",variables:()=>{let e=document.getElementById("myimage");e=e.src;let a=e.search("/Bom.*.png$");return`imagen = #${e.slice(a+1)}#
        luz = #${window.V.light}#
        `},init:()=>`ups parece que no funciona
        tendrás que intentarlo de otra forma
        pero como...
        ya se
        estas #autorizado# a consola
        intenta por ahora escribiendo #help#
        `},p=/^#.*#$/g,h=/^\$.*\$$/g;let c={image:"",light:!1};window.V=c;const b=async()=>g.init().split(`
`),y=e=>{let a=e.split(" ");for(let i=0;i<a.length;i++){let r=a[i];r.search(p)!=-1?a[i]=`<b>${r.replace(/#/g,"")}</b>`:r.search(h)!=-1&&(a[i]=`<span>${r.replace(/\$/g,"")}</span>`)}return a.join(" ")},l=e=>{let a=`<p>${y(e)}</p>`;document.getElementById("msg").innerHTML+=a},v=e=>{try{e.split(`
`).forEach(i=>{l(i)})}catch{l(e+" ")}},w=e=>{let a=!1;for(const i in g)if(i==e){a=!0;break}if(a)l(`#${e}#`),v(g[e]());else if(e.search(/^[sS]et/g)!=-1){let i=e.slice(4);l("#set#"),l(`${i}`);try{if(i=i.split(" "),i.length==3){let r=i[0],t=i[2];if((r=="luz"||r=="light")&&(t=="true"||t=="false")){let o=document.getElementById("switch");i[2]==="true"?(o.checked=!1,o.disabled=!0,c.light=!0,l("El swiche se $atasco$ ahora no se puede mover pero ahora hay luz (´• ω •`)ﾉ")):(o.checked=!0,o.disabled=!1,c.light=!1)}else(r=="image"||r=="imagen")&&(t=="BombillaON.png"&&c.light?(c.image=t,document.getElementById("myimage").src="/puzzle_light_bulb/"+t):t=="BombillaON.png"?l("Se tiene que primero arreglar la luz para prender la luz ¯\\_(ツ)_/¯"):l(`La imagen con el nombre #${r}# no esta disponible, recuerde colocar la extension del archivo`))}else l("La sintaxis es incorrecta, debes usar #set# seguido del nombre de la variable un '=' y su nuevo valor")}catch{}}else e=="clear"||e=="cls"?document.getElementById("msg").innerHTML="":l(`El comando #${e}# no esta registrado`)};let s=localStorage.getItem("MyLight");s==null&&localStorage.setItem("MyLight",JSON.stringify({welcome:!1}));s=JSON.parse(localStorage.getItem("MyLight"));s!=null&&s.welcome&&l("Bienvenido ¿vienes a terminar el reto?");const n=s,B="/puzzle_light_bulb/BombillaOFF.png";let u="",d=0;b().then(e=>u=e);const E=e=>{d<u.length&&!(n!=null&&n.welcome)&&(l(u[d]),d++,d==u.length&&(n.welcome=!0,localStorage.setItem("MyLight",JSON.stringify(n)),f()))},$=e=>{if(e.key=="Enter"){w(e.target.value),e.target.value="";let a=document.getElementById("msg");a.scrollTop=a.scrollHeight}},f=()=>{document.getElementById("game").innerHTML+='<label for="console-input" id="console"> ><input type="text" id="console-input" autocomplete="off"> </div>',document.getElementById("console-input").addEventListener("keypress",$)};n!=null&&n.welcome&&f();document.querySelector("#app").innerHTML+=`
  <div class="switch">
    <label for="switch" id='action'>
      <div class="pressme"></div>
    </label>
    <input type="checkbox" name="switch" id="switch" checked>
  </div>
  <img src=${B} alt="" width="350" id='myimage'>
`;const L=document.getElementById("action");L.addEventListener("click",E);
