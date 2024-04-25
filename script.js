const textArea = document.querySelector(".text-input-area");
const mensagem = document.querySelector(".mensagem");
const botaoOculto = document.querySelector(".btn-oculto");
const infoOutput = document.querySelector(".info-output");

/* Configurando botões */

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnCopiar() {
    // Selecionar a área de transferência
    const clipboard = navigator.clipboard;

    // Copiar o texto para a área de transferência
    clipboard.writeText(mensagem.value)
 
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


/* Funções */

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "aniu"], ["o", "ober"], ["ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) { // dois parametros, primeiro é elemento que quero buscar dentro do array e o segundo posição, onde fazer a busca
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); // coluna da vogal e campo de substituição
        }
    }

    botaoOculto.classList.remove('btn-oculto');
    infoOutput.style.display = 'none';
    btnCopiar()
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) { // verificar se conté as chaves de criptografia
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); // substitui as chaves pelas vogais
        }
    }

    return stringDesencriptada;
}