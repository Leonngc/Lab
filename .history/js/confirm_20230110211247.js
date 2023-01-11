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

        const chaveAdd = 'anabol';
function addTrembo(){
    
    localStorage.setItem(chaveAdd, trembo);
    alert('Trembolone adicionado ao carrinho')
    
}

function addTesto(){
   
    localStorage.setItem(chaveAdd, testo); 
    alert("Você adicionou Durateston ao carrinho")
    
    
}

function addDeca(){
    alert("Você adicionou Deca Durabolin ao carrinho")
    localStorage.setItem(chaveAdd, );
    
}