function jugar() {
  let numeroAleatorio = Math.floor(Math.random() * 10);
  //Math.floor(x) >> 5.3 => 5 or 5.9 => 5
  //Math.random() * 10  => 1....10
  console.log(numeroAleatorio)
  let mensaje = "Has perdido";
  for (let fallos = 0; fallos < 3; fallos++) {
    let intento = prompt("Adivina el numero");
    if (intento != numeroAleatorio) {
      alert("error!");
    }else{
      mensaje = "Has ganado";
      break
    }
  }
  alert(mensaje);
}
