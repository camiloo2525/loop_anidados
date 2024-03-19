var altura = 5;

for (var i = altura; i >= 1; i--) {
    var asterisco = 2 * i - 1;
    var fila = '';
    for (var j = 0; j < asterisco; j++) {
        fila += '*';
    }
    console.log(fila);
}
