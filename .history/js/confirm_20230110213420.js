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


function addTrembo() {
  localStorage.setItem(chaveAdd, trembo);
  alert("Trembolone adicionado ao carrinho");
}

function addTesto() {
  localStorage.setItem(chaveAdd, testo);
  alert("Você adicionou Durateston ao carrinho");
  res.innerHTML += `Durateston R$120,00 <br>`
}

function addDeca() {
  localStorage.setItem(chaveAdd, deca);
  alert("Você adicionou Deca Durabolin ao carrinho");

  res.innerHTML = `Deca R$70,00`
}
