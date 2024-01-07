'use strict';

import './lists.js';

console.log('>> Ready :)');

//Query Selector:
//Constantes de las listas
const characterList = document.querySelector('.js_charactersList');
const favoritesList = document.querySelector('.js_favoriteList');

//Constantes del buscador
const formSearch = document.querySelector('.js_form')
const inputSearch = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');

const url = `https://api.disneyapi.dev/character?pageSize=50`;
let disneyData = [];
let filteredData = [];
const favoritesData = []; // cambiar a let si da error


//Funciones:
//1.- para la lista de personajes.
function renderOne(characterData) {
    characterList.innerHTML += `
    <li class="js_charactersDisney" id="${characterData._id}">
    <div class="">
    <h3 class="" id="${characterData._id}">${characterData.name}</h3>
    <img class="" src="${characterData.imageUrl}" alt="character ${characterData.name}" title="character ${characterData.name}"/> 
    </div>
  </li>`;
};

function renderAll(data) {
    characterList.innerHTML = '';

    for( let i=0; i < data.length; i++ ) {
      renderOne( data[i] );
    };

    const allCharactersLi = document.querySelectorAll('.js_charactersDisney');

    for( const characterList of allCharactersLi ) {
        characterList.addEventListener( 'click' , handleClickResult );
    }
};

//2.- para la lista de favoritos
function renderOneFavorite(favoritesData) {
    favoritesList.innerHTML = '';
    favoritesList.innerHTML += `
    <li class="js_charactersDisney" id="${favoritesData._id}">
    <div class="">
    <div class="js_favoriteCharacterClosed closed">x</div>
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
//2.- para buscar 
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
    // clickedList.classList.toggle('favorite')// no funciona

    console.log('funciona')
};

function handleClickRemoveFavorite (event) {
    const idCharacter = parseInt(event.currentTarget.id);

    console.log(idCharacter);
    const favoriteCharacterIndex = favoritesData.findIndex( (favorite) => favorite._id === idCharacter );

    favoritesData.splice(favoriteCharacterIndex, 1);
    favoritesData.classList.toggle('favorites')
    renderFavorite(favoritesData);
};//no funciona

//Eventos
formSearch.addEventListener( 'submit' , (event) => {
    event.preventDefault();

    filteredData = disneyData.filter((character) => character.name.toLowerCase().includes( inputSearch.value.toLowerCase() ) );

    fetch(`https://api.disneyapi.dev/character?name=${inputSearch.value}`)
      .then(response => response.json)
      .then(data => {
        disneyData = data.data;

        renderAll(filteredData)
      })

});



//Código cuando carga la Pág

renderAll(disneyData)

fetch('//api.disneyapi.dev/character?pageSize=50')
  .then( response => response.json() )
  .then( data => {
  disneyData = data.data;

  renderAll(disneyData);
  });

//localstorege
 // localStorage.setItem('Favorite', JSON.stringify(favoritesData))


   //este codigo era para agregar favoritos 
   //clickedList.classList.toggle('favorites');

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



//codigo para busqueda
// const handleClickSearch = (event) => {
//     event.prevenDefault();
//     const searchValue = inputSearch.value;  
//     const filterList = disneyData.filter(character) => character.name.toLowerCase().includes(searchValue.toLowerCase())

//     renderAll()
// }

// buttonSearch.addEventListener('Click' , handleClickSearch);



// buttonSearch.addEventListener( 'submit' , (event) => {
//     event.preventDefault();

//     disneyData = disneyData.filter((character) => character.name.toLowerCase().incluedes( inputSearch.value.toLowerCase() ));

//     renderAll();



// });