//show active link
const items=document.querySelectorAll('.nav-link')
items.forEach((item)=>{
    item.addEventListener('click',function(){
        items.forEach((link) => link.classList.remove('active'));
        item.classList.add('active')
    })
   
})
//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

let animate=document.getElementById("animate")

let arr=['Harikaran M','Web Developer']
let len=arr.length
let characterIndex=0
let contentIndex=0
function animates(){
  characterIndex++
  animate.innerHTML=arr[contentIndex].slice(0,characterIndex)
  if(characterIndex===arr[contentIndex].length)
  {
    contentIndex++
    characterIndex=0
  }
  if(arr.length===contentIndex){
    contentIndex=0
    characterIndex=0
  }
  setTimeout(animates,250)
}
animates()