//CRIAR UM ARRAY DE NUMEROS DE 1 AO 10

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//2 - adicionar um elemento no final

// console.log(numeros.push(50), numeros);


// numeros.push(50, 100, 200, 400)
// console.log(numeros)


//3 - adicionar 3 elementos.


numeros.push(50, 100, 200, 400)
// console.log(numeros)

// 4 - remover o ultimo elemento 

// numeros.pop()
// console.log(numeros)

// 5 - adicionar elemento no inicio do array

// numeros.unshift(0)
// console.log(numeros)

// 6 - procurar um elemento pelo indice

// 6.1 -  tamanho do array
// console.log(`O tamanho do array é: ${numeros.length}`)

// 6.2 - inserir no meio

// let meio = (numeros.length) / 2;
// let meioArredondado = (Math.floor(meio));

// numeros.splice(meioArredondado, 0, 'novo elemento')
// console.log(numeros);

// console.log(meioArredondado)

// 7 - criar um array de número passando o inicio e o fim.
let array = Array.from({length: 10}, (e, i) => 1 + i )
console.log(array)

// 8 - criar  uma função onde passa o inicio e o fim de uma lista de item, do item[inicio] até o item[fim]
const criarArrayItem = (inicio, fim) => {
    let tamanho = fim - inicio + 1;
    let array = Array.from({length: tamanho}, (_, i) => 1 + i )
console.log(array)
}


criarArrayItem(1, 100)
