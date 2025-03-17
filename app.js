let amigos = [];

//Agreaga amigos al array
function agregarAmigo(){
    let amigoInput = document.getElementById("amigo").value;

    console.log(amigoInput);

    if(amigoInput.length > 0){
        amigos.includes(amigoInput.toUpperCase()) ? alert("Amigo registrado previamente en la lista") : amigos.push(amigoInput.toUpperCase());
        amigos.sort();
        document.querySelector('#amigo').value = "";
        console.log(amigos);
        
        listarAmigos();
    }
    else alert("Por favor, ingrese un nombre");
}

//Agrega amigo a la lista HTML
function listarAmigos(){
    let listaHtml = document.getElementById('listaAmigos');
    let elemento = listaHtml.getElementsByTagName('li');

    console.log(`Elemento:${elemento}`);

    /*Borra lista html*/
    if (elemento.length > 0){
        listaHtml.innerHTML = "";        
    }
    /*Despliega nueva lista html*/
    for(let i = 0; i < amigos.length; i++){
        console.log(`i:${i}, ${amigos[i]}`)
        let li = document.createElement('li');
        li.innerText = amigos[i];
        listaHtml.appendChild(li);
    }
}

//Determina un ganador
function sortearAmigo(){
    let ganador = document.getElementById('resultado');
    let numeroAmigos = amigos.length;
    let numeroGanador;

    if (numeroAmigos < 2){
        alert("Debe ingresar mínimo 2 amigos para poder sortear");
    }
    else{
        numeroGanador = Math.floor(Math.random()*(numeroAmigos));

        console.log(`Index: ${numeroGanador} - Amigo: ${amigos[numeroGanador]}`);

        ganador.innerHTML = amigos[numeroGanador];
    }
}

//Limpia el formulario
function borrarSorteo(){
    document.getElementById('listaAmigos').innerHTML="";
    document.getElementById('resultado').innerHTML = "";
    amigos=[];
    console.log(`Lista amigos:${amigos.length}`)
}