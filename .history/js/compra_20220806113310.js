function comprar(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
   if(idade < 18){
    alert('Infelizmente você não pode efetuar sua compra, pois você é menor de idade!')
   }else{
    window.location.href = "confirm.html"
    let res = document.getElementById('res')
    res.innerHTML = `${nome}, sua compra foi confirmada. agradecemos por confiar na <strong>Nic Lab</strong>`
}
}