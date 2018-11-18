const charactersAPI = new APIHandler("http://localhost:8000/characters/")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters=>{
      console.log("debug click fetch all", characters)
      addTableRows(characters)
      return characters
    })
}
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector("input[name=character-id]").value
    charactersAPI.getOneRegister(id)
    .then(oneCharacter=>{
      console.log("debug click fetch one", oneCharacter)
      addTableRows(oneCharacter)
      return oneCharacter
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector("input[name=character-id-delete]").value
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let name = document.querySelector("#new-character-form input[name=name]").value    
    let occupation = document.querySelector("#new-character-form input[name=occupation]").value
    let cartoon = document.querySelector("#new-character-form input[name=cartoon]").checked
    let weapon = document.querySelector("#new-character-form input[name=weapon]").value
    let newCharacter = { 
      name: name,
      occupation: occupation,
      cartoon: cartoon,
      weapon: weapon,
    }
    charactersAPI.createOneRegister(newCharacter)          
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let id = document.querySelector('#edit-character-form input[name=chr-id]').value 
    let name = document.querySelector('#edit-character-form input[name=name]').value
    let occupation = document.querySelector('#edit-character-form input[name=occupation]').value
    let weapon = document.querySelector('#edit-character-form input[name=weapon]').value
    let cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked
    let editCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    }
    charactersAPI.updateOneRegister(id,editCharacter)
  }

  function addTableRows(data) {
    for (let i = 0; i < data.length; i++) {
      document.getElementById('character-container').innerHTML +=
      `<div class="character-info">
        <div class="name">Name: ${data[i].name}</div>
        <div class="occupation">Occupation:${data[i].occupation}</div>
        <div class="cartoon">Cartoon: ${data[i].cartoon}</div>
        <div class="weapon">Weapon: ${data[i].weapon}</div>
      </div>`
    }
  }
})
