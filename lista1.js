// Gustavo Luiz Conceição Zago - 2268221

// exercicio 1
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = numero; i > 1; i--) {
            fatorial *= i;
        }
        return fatorial;
    }
}
// console.log(calcularFatorial(5));

// exercicio 2
function repetirMensagem(mensagem, n) {
    let resultado = '';
    for (let i = 0; i < n; i++) {
        resultado += mensagem;
        if (i < n - 1) {
            resultado += ' ';
        }
    }
    return resultado;
}
// console.log(repetirMensagem('oi teste', 2));

// exercicio 3
function calcularOp(valor1, valor2, operacao) {
    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            if (valor2 === 0) {
                return 'divisão por 0'; 
            }
            return valor1 / valor2;
        default:
            return null;
    }
}
// console.log(calcularOp(2, 0, '/'));

// exercicio 4
function tabuada(numero) {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(numero * i);
    }
    return resultados;
}
// console.log(tabuada(5));

// exercicio 5 - 1
function inverterNumero1(numero) {
    let numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertido;
}
//  console.log(inverterNumero1(39457));

// exercicio 6
function contarVogais(palavra) {
    let vogais = 'aeiouAEIOU'; 
    let c = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            c++;
        }
    }

    return c;
}
// console.log(contarVogais('aeiouAEIOU'));

// exercicio 7
function verificarSequencia(sequencia) {
    let pilha = [];

    for (let i = 0; i < sequencia.length; i++) {
        let char = sequencia[i];

        if (char === '(' || char === '[') {
            pilha.push(char);
        }

        else if (char === ')' || char === ']') {
            if (pilha.length === 0) {
                return false; 
            } 

            let ultimo = pilha.pop(); 
            if ((char === ')' && ultimo !== '(') || (char === ']' && ultimo !== '[')) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}
// console.log(verificarSequencia('[()]'));
// console.log(verificarSequencia('[(]'));

// exercicio 8
function listarObj(numero) {
    const nomes = ['Gustavo', 'Giovanna', 'Carol', 'Rogerio', 'Luciene', 'Maria'];
    let lista = [];

    for (let i = 1; i <= numero; i++) {
        let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        let idadeAleatoria = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

        lista.push({
            id: i,
            nome: nomeAleatorio,
            idade: idadeAleatoria
        });
    }

    return lista;
}
// console.log(listarObj(5));

// exercicio 9
function calcularIdades(lista) {
    console.log(lista)
    let somaIdades = 0;
    
    for (let i = 0; i < lista.length; i++) {
        somaIdades += lista[i].idade;
    }
    
    let media = somaIdades / lista.length;
    return media;
}
// console.log(calcularIdades(listarObj(5)));

// exercicio 10
function ordenarLista(lista, atributo) {
    console.log(lista)
    return lista.sort((a, b) => {
        if (typeof a[atributo] === 'string') {
            return a[atributo].localeCompare(b[atributo]);
        } else {
            return a[atributo] - b[atributo];
        }
    });
}
// console.log(ordenarLista(listarObj(5),'nome'));
// console.log(ordenarLista(listarObj(5),'idade'));
// console.log(ordenarLista(listarObj(5),'id'));



