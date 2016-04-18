var modal = document.getElementById("tickets_Modal");
var click = document.getElementsByClassName("ct_Ticket")[0];
var clo = document.getElementsByClassName("close")[0];
click.onclick = function(){
    modal.style.display = "block";
     modal1.style.display = "none";
    modal2.style.display = "none";
}
clo.onclick = function(){
    modal.style.display = "none";
}
var modal1 = document.getElementById("lounge_Modal");
var click1 = document.getElementsByClassName("ct_Lounge")[0];
var clo1 = document.getElementsByClassName("close")[1];
click1.onclick = function(){
    modal1.style.display = "block";
    modal.style.display = "none";
    modal2.style.display = "none";
}
clo1.onclick = function(){
    modal1.style.display = "none";
    
}

var modal2 = document.getElementById("contact_Modal");
var click2 = document.getElementsByClassName("ct_Contact")[0];
var clo2 = document.getElementsByClassName("close")[2];
click2.onclick = function(){
    modal2.style.display = "block";
     modal.style.display = "none";
    modal1.style.display = "none";
    
}
clo2.onclick = function(){
    modal2.style.display = "none";
    
}