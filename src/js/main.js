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
let dataDisney = [];
let favoritesDisney = [];

//datos 
const disneyData = [
    {
        "_id": 6,
        "films": [],
        "shortFilms": [],
        "tvShows": [],
        "videoGames": [],
        "parkAttractions": [],
        "allies": [],
        "enemies": [],
        "sourceUrl": "https://disney.fandom.com/wiki/%27Olu_Mel",
        "name": "'Olu Mel",
        "imageUrl": "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png",
        "createdAt": "2021-04-12T01:25:09.759Z",
        "updatedAt": "2021-12-20T20:39:18.031Z",
        "url": "https://api.disneyapi.dev/characters/6",
        "__v": 0
        }
]; 

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
