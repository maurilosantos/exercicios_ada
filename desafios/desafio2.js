function contarPalavras(frase) {
    let contador = 1;


    for (let i = 0; i < frase.length; i++) {

        if (frase[i] === frase[i].toUpperCase()) {

            contador++;
        }
    }

    return contador;
}

const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
const quantidadeDePalavras = contarPalavras(frase);
console.log(quantidadeDePalavras); // 15