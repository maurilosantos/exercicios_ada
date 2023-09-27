//Exercicio 1: 

function converterPara24Horas(horario12hrs) {
    const partes = horario12hrs.match(/(\d+):(\d+):(\d+)([APM]{2})/);
    
    if (!partes) {
      return "Horário inválido"; // Caso a entrada seja diferente 
    }
    
    
    let horas = parseInt(partes[1], 10);
    const minutos = parseInt(partes[2], 10);
    const segundos = parseInt(partes[3], 10);
    const periodo = partes[4];
    
    
    if (periodo === "PM" && horas !== 12) {
      horas = (horas + 12) % 24;
    } else if (periodo === "AM" && horas === 12) {
      horas = 0; // Meia-noite
    }
    
    
    const horario24hrs = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    
    return horario24hrs;
  }

//_______________________________


  // Exercicio 2:

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

//_______________________________

// Exercício 3:

function numerosSolitarios(array) {

  const frequencia = {};

  for (const num of array) {
      if (frequencia[num]) {
          frequencia[num]++;
      } else {
          frequencia[num] = 1;
      }
  }


  const solitarios = [];


  for (const num in frequencia) {
      if (frequencia[num] === 1) {
          solitarios.push(parseInt(num));
      }
  }

  return solitarios;
}

const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
const solitarios = numerosSolitarios(numeros);
console.log(solitarios); // 15, 22

//_______________________________

// Exercício 4:

// A saída do código: Opção c 1 1 2 1 2 3 1 2 3

//_______________________________

// Exercício 5:

// opção c. false

//_______________________________

// Exercícios 6: 

// opção b) 2