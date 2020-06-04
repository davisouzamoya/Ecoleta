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

function handleSelectedItem(event){
  // const itemLi = 
  console.log(event.target)

  // itemLi.classList.toggle("selected")

  // const itemId = itemLi.dataset.id
}
// document.querySelector("select[name=uf]").addEventListener("change", getCities)