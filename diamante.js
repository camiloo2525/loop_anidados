var altura = 5;

for (var i = 1; i <= altura; i++) {
    var asterisco = 2 * i - 1;
    var espacio = altura - i;
    var fila = '';
    
    for (var j = 0; j < espacio; j++) {
        fila += ' ';
    }
    
    for (var k = 0; k < asterisco; k++) {
        fila += '*';
    }
    
    console.log(fila);
}

for (var i = altura - 1; i >= 1; i--) {
    var asterisco = 2 * i - 1;
    var espacio = altura - i;
    var fila = '';
    
    for (var j = 0; j < espacio; j++) {
        fila += ' ';
    }
    
    for (var k = 0; k < asterisco; k++) {
        fila += '*';
    }
    
    console.log(fila);
}