function guardar(){
    var pro = document.getElementById("producto").value;
    var pre = document.getElementById("precio").value;

    var fila = "<tr><td>"+pro+"</td><td>"+pre+"</td></tr>";

    var btn = document.createElement("tr");
    btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
}