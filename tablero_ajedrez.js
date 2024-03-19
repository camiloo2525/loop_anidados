const numero = 8;

function tableroAjedrez(numero) {
   
    for (let i = 0; i < numero; i++) {
        let dimension = '';
       
        for (let j = 0; j < numero; j++) {
            
            if ((i + j) % 2 === 0) {
                dimension += '*';
            } else {
                dimension += ' ';
            }
        }
       
        console.log(dimension);
    }
}
tableroAjedrez(numero);


