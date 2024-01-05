'use strict';

import './lists.js';

console.log('>> Ready :)');

//Query Selector:
//Constantes de las listas
const characterList = document.querySelector('.js_charactersList');
const favoritesList = document.querySelector('.js_favoritesList');

//Constantes del buscador
const inputSearch = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');

const url = `https://api.disneyapi.dev/character?pageSize=50`;
let disneyData = [];
let favoritesDisney = [];


//Funciones:
function renderOne(characterData) {
    characterList.innerHTML += `
    <li class="" id="${characterData._id}">
    <div class="">
    <h3 class="" id="${characterData._id}">${characterData.name}</h3>
    <img class="" src="${characterData.imageUrl}" alt="character ${characterData.name}" title="character ${characterData.name}"/> 
    </div>
  </li>`;
};

function renderAll() {
    for( let i=0; i < disneyData.length; i++ ) {
      renderOne( disneyData[i] );
    };
};

//funciones de eventos (handler)

//Eventos

//Código cuando carga la Pág

renderAll()

fetch('https://dev.adalab.es/api/disney?pageSize=15')
  .then( response => response.json() )
  .then( data => {
console.log(data.data);
  disneyData = data.data;

  renderAll();
  });