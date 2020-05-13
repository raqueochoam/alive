let a = false

function cambiarColor() {
  let etiqueta = document.getElementById("aqui")
  if (a == false) {
    etiqueta.classList.add("letrasVerdes")
    a = true
  }
  else {
    etiqueta.classList.remove("letrasVerdes")
    a = false
  }
}

function subrayar(){
  let etiqueta = document.getElementById("aqui")
  if (a == false) {
    etiqueta.classList.add("subrayado")
    a = true
  }
  else {
    etiqueta.classList.remove("subrayado")
    a = false
  }
}
