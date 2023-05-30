function encriptar() {

    const texto = document.getElementById('texto-a-transformar').value;
    const encriptado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('resultado').textContent = encriptado;
}


function desencriptar() {

    const textoDesencriptado = document.getElementById('texto-a-transformar').value;
    const desencriptado = textoDesencriptado.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('resultado').textContent = desencriptado;

}

function copiar() {
    const textoCopiado = document.getElementById('resultado').textContent;
  
    navigator.clipboard.writeText(textoCopiado);

  }
  
  

