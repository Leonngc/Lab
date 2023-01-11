var trembo = {
valor: 200,
ampolas: 10,
};

var deca = {
    valor: 70,
    ampolas: 10,
    };

    var trembo = {
        valor: 120,
        ampolas: 10,
        };
function addTrembo(){
    alert("Você adicionou Trembolone ao carrinho")
    localStorage.setItem(`${trembo}`)
    
}

function addTesto(){
    alert("Você adicionou Durateston ao carrinho")
    
}

function addDeca(){
    alert("Você adicionou Deca Durabolin ao carrinho")
    
}