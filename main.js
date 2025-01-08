const alunos = [
    { nome: "Felipe", nota: 10 },
    { nome: "Marilene", nota: 9 },
    { nome: "Rafael", nota: 6 },
    { nome: "Daniel", nota: 7 },
    { nome: "Rosi", nota: 3},
    { nome: "Luan", nota: 8 }

];


const aprovados = alunos
    .filter(aluno => aluno.nota > 8)
    .map(aluno => aluno.nome)


console.log(aprovados);
