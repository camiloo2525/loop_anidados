var altura = 5;


for (var i = 1; i <= altura; i++) {
    
    var espacio = altura - i;

   
    var fila = '';

   
    for (var j = 0; j < espacio; j++) {
        fila += ' ';
    }

   
    for (var k = 0; k < 2 * i - 1; k++) {
        fila += '*';
    }

  
    console.log(fila);
}
