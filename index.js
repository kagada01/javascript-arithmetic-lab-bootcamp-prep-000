function add(a, b){
  return(a+b)
}

function subtract(a, b){
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
  return(a-b)
}

function multiply(a, b){
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
  return(a*b)
}

function divide(a, b){
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
  return(a/b)
}

function inc(a){
  a = Math.floor(Math.random() * 1000)
  a++
  return(a)
}

function dec(a){
  a = Math.floor(Math.random() * 1000)
  a--
  return(a)
}
