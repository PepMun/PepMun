var btnissues = document.getElementById("issues");
var btngeneral = document.getElementById("general");
var listaissues = document.getElementById("lista-issues");
var listageneral = document.getElementById("lista-infogeneral");

btnissues.addEventListener('click', ()=>{
  listaissues.style.display = 'block';
  listageneral.style.display = 'none';


  btnissues.style.borderBottom = "3px solid white";
  btngeneral.style.borderBottom = "none";
});
btngeneral.addEventListener('click', ()=>{
  listaissues.style.display = 'none';
  listageneral.style.display = 'block';


  btnissues.style.borderBottom = "none";
  btngeneral.style.borderBottom = "3px solid white";
});
