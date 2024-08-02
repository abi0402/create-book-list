var popup = document.querySelector('.popup')
var popup2 = document.querySelector('.popup2')
var plusbutton = document.getElementById('plusbutton')

plusbutton.addEventListener('click',function(){
    popup.style.display = 'block'
    popup2.style.display = 'block'
})

var cancel = document.getElementById('cancel')

cancel.addEventListener('click',function(event){
    event.preventDefault()
    popup.style.display = 'none'
    popup2.style.display = 'none'
})

var divv = document.querySelector('.div-container')
var bookname = document.getElementById('bookname')
var bookauthur = document.getElementById('bookauthur')
var description = document.getElementById('description')
var addbutton = document.getElementById('addbutton')
 
addbutton.addEventListener('click',function(event){
    event.preventDefault()
    var newdiv = document.createElement('div')
    newdiv.setAttribute('class','div')
    newdiv.innerHTML = (`<h2>${bookname.value}</h2>
        <h5>${bookauthur.value}</h5>
        
        <p>${description.value}</p>
        <button class="btn" onclick='del(event)'>delete</button>`)
        divv.append(newdiv)
        popup.style.display = 'none'
    popup2.style.display = 'none'


})

function del(event){

event.target.parentElement.remove()
}


