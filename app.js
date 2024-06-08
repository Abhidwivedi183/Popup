const pop = document.querySelector(".popup")
const btn = document.querySelector(".btn")
const btn2 = document.querySelector("#pls");
function closepopup(){
pop.classList.remove('openpopup');
}
function openpopup(){

  pop.classList.add('openpopup');
}
btn.addEventListener('click',(e)=>{
  openpopup();
})
btn2.addEventListener('click',(e)=>{
  closepopup();
})
