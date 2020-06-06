function populateUfs(){

  const ufSelected = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json())
  .then(states => {
    for( const state of states){
      ufSelected.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}

populateUfs()

document.querySelector("select[name=uf]").addEventListener("change", getCities)

function getCities(event){
  const ufSelect = document.querySelector("[name=uf]").value
  const citySelect = document.querySelector("[name=city]")
  
  var select = document.querySelector("[name=uf]");
	var text = select.options[select.selectedIndex].text;
	document.querySelector("[name=state]").value = text
  
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelect}/municipios`
  citySelect.innerHTML = `<option value="">Selecione uma cidade</option>`
  citySelect.disabled = true

  fetch(url)
  .then( res => res.json())
  .then(cities => {
    for( const city of cities){
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  })

}

const itemsToCollect = document.querySelectorAll(".items-grid li")

                              
for(const item of itemsToCollect){
  item.addEventListener("click",handleSelectedItem)
}
let selectedItems=[]
const CollectedItems = document.querySelector("[name=items]")


function handleSelectedItem(event){
   const itemLi = (event.target)

   itemLi.classList.toggle("selected")

   const itemId = itemLi.dataset.id

   const alreadySelected = selectedItems.findIndex( item =>{
     const itemFound = item === itemId
     return itemFound
   })

   if(alreadySelected >= 0){
     const filteredItems = selectedItems.filter( item =>{
       const itemIsDifferent = item != itemId
       return itemIsDifferent
     })

     selectedItems = filteredItems
   }else{
    selectedItems.push(itemId)
   }
   console.log(selectedItems)
   CollectedItems.value = selectedItems
}

const filledForm = document.querySelector("button[name=enviar]")
const modalHiden = document.querySelector("#modalSucess")


filledForm.addEventListener("click",() => {
  modalHiden.classList.remove("hide")
})