var a=document.getElementById("num")
var b=document.getElementById("listi")
function even(){
    var c=document.createElement("li")
    c.innerHTML=a.value + "<button onclick='rem(event)'>Remove</button>"
    b.append(c)
}
function rem(evnt){
       evnt.target.parentElement.remove()
}