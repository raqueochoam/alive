function add() {

  let lista = document.getElementById("pendientes")
  let elemento = document.getElementById("tarea").value

  let nuevaEtiqueta = document.createElement("li");
  let texto = document.createTextNode(elemento)
  nuevaEtiqueta.appendChild(texto)

  lista.appendChild(nuevaEtiqueta)
}
