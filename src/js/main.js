'use strict';

import './lists.js';

console.log('>> Ready :)');

//Query Selector:
//Constantes de las listas
const characterList = document.querySelector('.js_charactersList');
const favoritesList = document.querySelector('.js_favoriteList');

//Constantes del buscador
const inputSearch = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');

const url = `https://api.disneyapi.dev/character?pageSize=50`;
let disneyData = [];
const favoritesData = []; // cambiar a let si da error


//Funciones:
function renderOne(characterData) {
    characterList.innerHTML += `
    <li class="js_charactersDisney" id="${characterData._id}">
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

    const allCharactersLi = document.querySelectorAll('.js_charactersDisney');

    for( const characterList of allCharactersLi ) {
        characterList.addEventListener( 'click' , handleClickResult );
    }
};

function renderOneFavorite(favoritesData) {
    favoritesList.innerHTML = '';
    favoritesList.innerHTML += `
    <li class="js_charactersDisney" id="${favoritesData._id}">
    <div class="">
    <h3 class="" id="${favoritesData._id}">${favoritesData.name}</h3>
    <img class="" src="${favoritesData.imageUrl}" alt="character ${favoritesData.name}" title="character ${favoritesData.name}"/> 
    </div>
  </li>`; 
};

function renderFavorite() {
    for( let i=0; i < favoritesData.length; i++ ) {
      renderOneFavorite( favoritesData[i] );
    };
}

//funciones de eventos (handler)
function handleClickResult(event) {

    const clickedList = parseInt(event.currentTarget.id);
console.log(clickedList)
    const selectedCharacter = disneyData.find( (character) => character._id === clickedList );

    const indexCharacter = favoritesData.findIndex( (character) => character._id === clickedList);
console.log(indexCharacter)
    if (indexCharacter === -1) {
        favoritesData.push(selectedCharacter);
    } else {
        favoritesData.splice(indexCharacter, 1);
    }

    renderFavorite();
    // clickedList.classList.toggle('favorites')

    console.log('funciona')
};


    // clickedList.classList.toggle('favorites');

    // clickedList.id

    // console.log(clickedList.id)

    // const selectedCharacters = disneyData.find( (Character) => Character._id === id );
    

//     favoritesList.innerHTML += `
//     <li class="js_charactersDisney" id="${characterData._id}">
//     <div class="">
//     <h3 class="" id="${characterData._id}">${characterData.name}</h3>
//     <img class="" src="${characterData.imageUrl}" alt="character ${characterData.name}" title="character ${characterData.name}"/> 
//     </div>
//   </li>`;

//Eventos

//Código cuando carga la Pág

renderAll()

fetch('//api.disneyapi.dev/character?pageSize=50')
  .then( response => response.json() )
  .then( data => {
    //    console.log(data.data); //hay que borrar este console
  disneyData = data.data;

  renderAll();
  });