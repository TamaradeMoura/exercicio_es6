const alunos = ['Leonard', 'Sheldon', 'Amy', 'Raj'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        nota: 10
    }
    return itemAtual;
})

alunos2.push({
    nome: 'Bernardette',
    nota: 8
})

alunos2.push({
    nome: "Howard",
    nota: 6
})

alunos2.push({
    nome: 'Penny',
    nota: 4
})

function filtraAlunos(aluno) {
    return aluno.nota >= 6;
}

const filtraAlunos2 = aluno => aluno.nota >= 6;
const alunosComNotaAlta = alunos2.filter(filtraAlunos)

console.log(alunos2);
console.log(alunosComNotaAlta);
