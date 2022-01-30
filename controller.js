//console.log("HOLA");
document.getElementById("btn").onclick = function(){
    document.getElementById("alerta").innerHTML ='<p class="alert alert-danger"><b>WOOUUUU!!!!</b>como salio esto ???</p>';
}
function cambiar(){
    document.getElementById("titulo").innerHTML = "!UY¡ Te cambié";
}
document.getElementById("btn").onclick = function(){
    cambiar();
}
