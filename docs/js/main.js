console.log("Listados, funciona");console.log(">> Ready :)");const f=document.querySelector(".js_charactersList"),o=document.querySelector(".js_favoriteList"),h=document.querySelector(".js_form"),d=document.querySelector(".js_input");document.querySelector(".js_buttonSearch");let s=[],u=[];const c=JSON.parse(localStorage.getItem("favoritesData"))||[];function m(e){f.innerHTML+=`
    <li class="js_charactersDisney" id="${e._id}">
    <div class="">
    <h3 class="" id="${e._id}">${e.name}</h3>
    <img class="" src="${e.imageUrl}" alt="character ${e.name}" title="character ${e.name}"/> 
    </div>
  </li>`}function l(e){f.innerHTML="";for(let n=0;n<e.length;n++)m(e[n]);const t=document.querySelectorAll(".js_charactersDisney");for(const n of t)n.addEventListener("click",g)}function v(e){o.innerHTML+=`
    <li class="js_charactersDisney" id="${e._id}">
    <div class="">
    <div class="js_favoriteCharacterClosed closed">x</div>
    <h3 class="" id="${e._id}">${e.name}</h3>
    <img class="" src="${e.imageUrl}" alt="character ${e.name}" title="character ${e.name}"/> 
    </div>
  </li>`,L()}function a(){o.innerHTML="";for(let e=0;e<c.length;e++)v(c[e])}function g(e){const t=parseInt(e.currentTarget.id);console.log(t);const n=s.find(r=>r._id===t),i=c.findIndex(r=>r._id===t);console.log(i),i===-1?(c.push(n),localStorage.setItem("favoritesData",JSON.stringify(c))):(c.splice(i,1),localStorage.setItem("favoritesData",JSON.stringify(c))),a(),console.log("funciona")}function y(e){const t=parseInt(e.currentTarget.id);console.log(t);const n=c.findIndex(i=>i._id===t);c.splice(n,1),a()}function L(){const e=document.querySelectorAll(".js_favoriteCharacterClosed");for(const t of e)t.addEventListener("click",y)}h.addEventListener("submit",e=>{e.preventDefault(),u=s.filter(t=>t.name.toLowerCase().includes(d.value.toLowerCase())),fetch(`https://api.disneyapi.dev/character?name=${d.value}`).then(t=>t.json()).then(t=>{Array.isArray(t.data)?s=t.data:s=[t.data],o.innerHTML="",l(u)})});l(s);fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{s=e.data,l(s),a()});
//# sourceMappingURL=main.js.map
