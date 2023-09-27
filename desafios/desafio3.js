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