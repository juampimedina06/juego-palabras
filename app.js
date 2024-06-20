alert('bienvenido al juego del numero secreto ');

//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 0;
let maximoIntentos = 6;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`indica un numero entre 1 y ${numeroMaximoPosible} por favor`));// Convertir a número

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto){
        //acertamos fue verdadera la condicion
        alert(`acertaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    }else {
        if (numeroUsuario > numeroSecreto){
            alert('el numero secreto es menor');
        }else{
            alert('el numero secreto es mayor');
        }
        //incrfementamos el contador cuando elusuario no acepta
        intentos++;
        if (intentos > maximoIntentos){
            alert (`llegaste al numero maximo de ${maximoIntentos} intentos`);
            break;
        }
    }
}
