const trembo = {
  valor: 200,
  ampolas: 10,
};

const deca = {
  valor: 70,
  ampolas: 10,
};

const testo = {
  valor: 120,
  ampolas: 10,
};

const chaveAdd = "anabol";
var res = document.getElementById('carrinho');
var i = 0


function addTrembo() {
  localStorage.setItem(chaveAdd, trembo);
  alert("Trembolone adicionado ao carrinho");
  res.innerHTML += `Trembolone R$70,00 <br>`
  
}

function addTesto() {
  localStorage.setItem(chaveAdd, testo);
  alert("Você adicionou Durateston ao carrinho");
  res.innerHTML += `Durateston R$120,00 <br>`
}

function addDeca() {
  localStorage.setItem(chaveAdd, deca);
  alert("Você adicionou Deca Durabolin ao carrinho");

  res.innerHTML += `Deca R$70,00 <br>`
}

function limpar(){
  res.removeChild(res.lastChild)
}
 function buy(){
  let cont = 1
    for(cont = 1, cont > 1, cont++){
      addDeca();
    }
 }