const numero = 5;

function cuadrado(numero) {
    
    for (let i = 0; i < numero; i++) {
        let dimension = '*';
        
        for (let j = 0; j < numero; j++) {
            dimension += '*';
        }
        
        console.log(dimension);
    }
}
cuadrado(numero);