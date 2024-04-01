//let titulo = document.querySelector('h1'); //document permite alterar o conteúdo do HTML  //h1 é usada para dar nome aos títulos da página , sendo h1 até h6 , o principal é o H1
//titulo.innerHTML = 'Jogo do número secreto'; //inner algo semelhante a algo dentro do HTML titulo 

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // inner retorna a um  conteúdo HTML
//a função criada ela é um/a forma mais simplificada de apresentar texto para variaveis iguais (uma boa pratica da programação)

let listaDeNumeroSorteados = []; //toda lista(arrays) será c/ colchetes /  permite armazenar e organizar vários valores em uma única variável / cada array tem um indice(inciado por 0)
let numeroLimite = 10; // essa variavel se trata da quantidade que um número será gerado na função Math.random da função function gerarNumeroAleatorio , do let numeroEscolhido
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 //document.querySelector  buscar um elemento do mundo HTML e trazê-lo para o mundo JavaScript 
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');   
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentiva = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentiva);
        document.getElementById('reiniciar').removeAttribute('disabled'); //removeAtribute é um comando para remove algum parametro no HTML, nesse caso removemos o disabled para abilitar o botão
        // o getElementByID serve para retornar um elemento do DOM que é identificado por um ID específico
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor ');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        //tentativas = tentativas +1;
        tentativas++;
        limparCampo();
    }
}

//verificarChute é o nome dessa funçaõ foi copiado dentro do HTML uma vez que quero associar ao comando declarado pelo onclick verificarChute
// Para organizar o código Shift + Alt + F

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaDeNumeroSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite ){
        listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log (listaDeNumeroSorteados);
        return numeroEscolhido;  
    }
} 
//return (esse estava antes do parseint)ele retorna o valor e amarzena na variavel  numero secreto //Math.random cria numero aleatorio ex:0,599899 (como precisamos de um numero inteiro acrescentamos * 10 + 1) //A função parseInt é usada para converter uma string em um inteiro
//includes ele verifica se o elemento está na lista,é o parametro dele é a variavel numeroEscolhido
//NA FUNÇÃO DO IF ele verifica se irá verificar se um numero ja foi escolhido , caso sim, retornamos com a função gerarnumeroaletorio
// PUSH = adiciona item ao final da lista
// POP = Para remover o último elemento
// LENGTH = Tamanho da lista 

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
} // no chute.value = '' ( as aspas significa que o a string deve ficar vazio)

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
} 
// nessa função chamamos o Botão (novo jogo), nomeamos ele no HTM e aqui criamos a função , essa diz o (numero deve ser sorteado), o campo (deve ficar vazio) ,  e tentativas precisam inciar
//setAtribute esse é para desativar o atributo que eu declarar dentro do parametro , por exemplo (setAttribute('disabled', true) ), neste caso o true significa que sim é verdade que quero desabilitar, nesse caso após declarar o parametro eu irei nisalizar se quero (habilitar,verdadeiro ,falso)







