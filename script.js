let input=document.getElementById("input1")
let searchbtn=document.querySelector("#search")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
})

async function sendapirequest(){
    let inputData = input.value;
    let appID="78377d76"
    let appKEY= "ad3016e167d9d275f69dfb2b6c51fbd5"	
    let response=await fetch(`https://api.edamam.com/search?q=${inputData}&app_id=${appID}&app_key=${appKEY}`)

console.log(response)
let data=await response.json();
console.log(data)
 useapidata(data)
}
 function useapidata(data)

{
     document.querySelector("#content").innerHTML=

     `
     
     <div class="card-deck">
     <div class="card">
       <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${data.hits[1].recipe.label}</h5>
         <p class="card-text">${data.hits[1].recipe.source}.</p>
         <p class="card-text">${data.hits[1].recipe.dietLabels}.</p>
         <p class="card-text">${data.hits[1].recipe.calories.toFixed(2)}cal</p>
         <p class="card-text">${data.hits[1].recipe.healthLabels}.</p>
         <a href="${data.hits[2].recipe.url}" class="btn btn-danger">Recipe</a>
       </div>
      
     </div>&nbsp&nbsp
     <div class="card">
     <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">${data.hits[2].recipe.source}.</p>
    <p class="card-text">${data.hits[2].recipe.dietLabels}.</p>
    <p class="card-text">${data.hits[2].recipe.calories.toFixed(2)}cal.</p>
    <p class="card-text">${data.hits[2].recipe.healthLabels}.</p>
<a href="${data.hits[2].recipe.url}" class="btn btn-danger">Recipe</a>
       </div>
      
     </div>&nbsp&nbsp
     <div class="card">
     <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">${data.hits[3].recipe.source}.</p>
    <p class="card-text">${data.hits[3].recipe.dietLabels}.</p>
    <p class="card-text">${data.hits[3].recipe.calories.toFixed(2)}cal.</p>
    <p class="card-text">${data.hits[3].recipe.healthLabels}.</p>
<a href="${data.hits[3].recipe.url}" class="btn btn-danger">Recipe</a>
       
     
   </div></div></div>
   <br>
    
      <div class="card-deck">
     
      <div class="card">
        <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.hits[4].recipe.label}</h5>
          <p class="card-text">${data.hits[4].recipe.source}.</p>
          <p class="card-text">${data.hits[4].recipe.dietLabels}.</p>
          <p class="card-text">${data.hits[4].recipe.calories.toFixed(2)}cal.</p>
          <p class="card-text">${data.hits[4].recipe.healthLabels}.</p>
          <a href="${data.hits[4].recipe.url}" class="btn btn-danger">Recipe</a>
        </div></div>
      
    
     
    
      <div class="card">
      <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
     <h5 class="card-title">${data.hits[5].recipe.label}</h5>
     <p class="card-text">${data.hits[5].recipe.source}.</p>
     <p class="card-text">${data.hits[5].recipe.dietLabels}.</p>
     <p class="card-text">${data.hits[5].recipe.calories.toFixed(2)}cal.</p>
     <p class="card-text">${data.hits[5].recipe.healthLabels}.</p>
 <a href="${data.hits[5].recipe.url}" class="btn btn-danger">Recipe</a>
        </div></div>
      
     
     
     
      <div class="card">
      <img src="${data.hits[6].recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
     <h5 class="card-title">${data.hits[6].recipe.label}</h5>
     <p class="card-text">${data.hits[6].recipe.source}.</p>
     <p class="card-text">${data.hits[6].recipe.dietLabels}.</p>
     <p class="card-text">${data.hits[6].recipe.calories.toFixed(2)}cal.</p>
     <p class="card-text">${data.hits[6].recipe.healthLabels}.</p>
 <a href="${data.hits[6].recipe.url}" class="btn btn-danger">Recipe</a>
       
      </div></div>
    </div></div>
     `
 

}
  
