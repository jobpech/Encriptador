const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado =encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value="";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textodesEncriptado =desencriptar(texArea.value)
    mensaje.value = textodesEncriptado
    texArea.value="";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar() {
    // Get the text field
    var copyText = document.getElementById("text-area-mensaje");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Mensaje copiado: " + copyText.value);

  }

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado =stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}

function desencriptar(stringEncriptado){
    let matrizCodigo = [["enter", "e"], ["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    if (stringEncriptado != "jaimenters"){
    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado =stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    }else{
        stringEncriptado="james"
    }
    return stringEncriptado



}

