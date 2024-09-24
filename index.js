let aluno = {
    nome: "Beatriz da Costa Ramalho",
    idade: 24,
    curso: "Ciências da Computação",
    notas: [10, 9, 8],
    endereco: {
        rua: "Avenida Marechal Hermes da Fonsceca",
        cidade: "João Pessoa",
        estado: "Paraíba"
    }
};

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Nota da primeira disciplina: ${aluno.notas[0]}`);


aluno.idade = 22;
aluno.notas.push(7);

// Conversão para String JSON
let alunoJSON = JSON.stringify(aluno);
console.log("Objeto aluno convertido para string JSON:", alunoJSON);

// Conversão de volta para Objeto
let alunoObjeto = JSON.parse(alunoJSON);
console.log("String JSON convertida de volta para objeto:", alunoObjeto);


console.log("Iteração sobre as propriedades do objeto aluno:");
for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
}

let somaNotas = aluno.notas.reduce((soma, nota) => soma + nota, 0);
let mediaNotas = somaNotas / aluno.notas.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);

console.log(`Cidade: ${aluno.endereco.cidade}`);
console.log(`Estado: ${aluno.endereco.estado}`);

let alunos = [
    aluno,
    {
        nome: "Jonas Machado",
        idade: 25,
        curso: "Design Gráfico",
        notas: [9, 8, 10],
        endereco: {
            rua: "Rua Nova Esperança",
            cidade: "São Paulo",
            estado: "São Paulo"
        }
    },
    {
        nome: "Carine Santos",
        idade: 23,
        curso: "Ciência de Dados",
        notas: [7, 8, 6],
        endereco: {
            rua: "Rua das Flores",
            cidade: "Rio de Janeiro",
            estado: "Rio de Janeiro"
        }
    }
];

// Filtragem de Alunos com média superior a 8
let alunosComMediaMaiorQue8 = alunos.filter(aluno => {
    let somaNotas = aluno.notas.reduce((soma, nota) => soma + nota, 0);
    let mediaNotas = somaNotas / aluno.notas.length;
    return mediaNotas > 8;
});

console.log("Alunos com média superior a 8:", alunosComMediaMaiorQue8);