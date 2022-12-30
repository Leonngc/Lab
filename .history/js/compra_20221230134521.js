function comprar() {

let dados {
    name = do
}

  let name = document.getElementById("nome");
  let surname = document.getElementById("sobrenome");
  let email = document.getElementById("email");
  let password = document.getElementById("senha");
  let year = document.getElementById("idade");
  let res = document.getElementById('res');
 
  if(year < 18){
    res.innerHTML = `Desculpe ${name}, infelizmente você não poderá efetuar sua compra pois você é menor de idade :(`
  }else{
    res.innerHTML = `Obrigado por confiar na <strong>Nic Lab <strong>. Lhe desejo um excelente ciclo 😈`
  }
}
