const alunos = [
    { nome: "Felipe", nota: 10 },
    { nome: "Marilene", nota: 9 },
    { nome: "Rafael", nota: 6 },
    { nome: "Daniel", nota: 7 },
    { nome: "Rosi", nota: 3},
    { nome: "Luan", nota: 8 }

];


const alunosAprovados = [];

alunos.forEach(aluno => {
    if(aluno.nota >= 8){
        alunosAprovados.push(aluno.nome)
    }
})

console.log(alunosAprovados);
