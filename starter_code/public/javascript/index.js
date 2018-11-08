const charactersAPI = new APIHandler("http://localhost:8000/characters/")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters=>{
      console.log("debug click fetch all", characters)
      return characters
    })
  
}
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
