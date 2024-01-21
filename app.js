let numeroSecreto = 0;
let intentos = 0;
let listaNumeros =[];


function asignarElemento( elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function intentoDeUsuario(){
    alert("bienvenidoa esta funcion");
}

function crearNumeroSecreto() {
     let numeroSecreto = Math.floor(Math.random()*10)+1;
    console.log(numeroSecreto);
    console.log(listaNumeros)
     if(listaNumeros.includes(numeroSecreto)){
            return crearNumeroSecreto();
     }else{
        listaNumeros.push(numeroSecreto);
        return numeroSecreto;
     }
}
function limpiarcampo(){
    document.getElementById('valorUsuario').value="";
}

function mensajesIniciales(){
asignarElemento('h1','Juego del Numero Secreto');
asignarElemento('p','Indique un numero del 0 al 100');
numeroSecreto = crearNumeroSecreto();
intentos=0;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        intentos++;
        asignarElemento('p', `Acertaste, el numero ${intentos} ${ intentos===1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroSecreto > numeroDeUsuario){
        asignarElemento('p', 'El numero a adivinar es mayor.')
        }
    else{
        asignarElemento('p', 'El numero a adivinar es menor.')
        }
        intentos++;
        limpiarcampo()
    }
    
}

function reiniciarJuego(){
    limpiarcampo();
    mensajesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

mensajesIniciales();
