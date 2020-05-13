let n1 = 0
let n2 = 0

function restaN1() {
  n1 = n1 - 1
  document.getElementById("n1").innerHTML = n1
}

function sumaN1() {
  n1 = n1 + 1
  document.getElementById("n1").innerHTML = n1
}

function restaN2() {
  n2 = n2 - 1
  document.getElementById("n2").innerHTML = n2
}

function sumaN2() {
  n2 = n2 + 1
  document.getElementById("n2").innerHTML = n2
}

function total(){
  document.getElementById("total").innerHTML = n1 + n2
}
