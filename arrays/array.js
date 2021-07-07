console.log(typeof Array, typeof new Array, typeof [])
//function

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)//retorna todos o array com os elemtnso dentro


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])//bia
console.log(aprovados[1])//carlos
console.log(aprovados[2])//ana
console.log(aprovados[3])//vazio não definido


aprovados[3] = "paulo"//3 agr tem paulo
aprovados.push('Abia')//abia para a ultima posição
console.log(aprovados.length)//4
//adiciona em uma posição longe das outras
aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera a ordem
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos','Ana']
//aprovados.splice(1,1) // remove o carlos, primeiro é onde começa segundo quantos elimina
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //0 não exclui nenhum começa no 1 mas não elimina nenhum
console.log(aprovados)




