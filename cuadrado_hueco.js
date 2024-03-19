// Definir el tamaño del cuadrado (número de filas y columnas)
const numero = 5;

function cuadradoHueco(cuadrado) {
    
    for (let i = 0; i < cuadrado; i++) {
        let dimension = '';
        
        for (let j = 0; j < cuadrado; j++) {
            
            if (i === 0 || i === cuadrado - 1 || j === 0 || j === cuadrado - 1) {
                dimension += '*';
            } else {
                dimension += ' ';
            }
        }
        
        console.log(dimension);
    }
}

cuadradoHueco(numero);
