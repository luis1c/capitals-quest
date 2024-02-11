const perguntas = [
    {
        pergunta: "Qual é a capital da França?",
        respostas: [
            "Madri",
            "Berlim",
            "Paris",
            "Londres"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital da Argentina?",
        respostas: [
            "Buenos Aires",
            "Rio de Janeiro",
            "Santiago",
            "Lima"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital do Japão?",
        respostas: [
            "Xangai",
            "Hong Kong",
            "Tóquio",
            "Pequim"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital da Austrália?",
        respostas: [
            "Melbourne",
            "Sidney",
            "Camberra",
            "Brisbane"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        respostas: [
            "Vancouver",
            "Ottawa",
            "Toronto",
            "Montreal"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a capital da Rússia?",
        respostas: [
            "São Petersburgo",
            "Moscovo",
            "Kiev",
            "Novosibirsk"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a capital da Índia?",
        respostas: [
            "Delhi",
            "Bombaim",
            "Calcutá",
            "Bangalore"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da China?",
        respostas: [
            "Xangai",
            "Hong Kong",
            "Pequim",
            "Cantão"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital do Reino Unido?",
        respostas: [
            "Manchester",
            "Liverpool",
            "Londres",
            "Birmingham"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital da Itália?",
        respostas: [
            "Roma",
            "Milão",
            "Nápoles",
            "Turim"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da Espanha?",
        respostas: [
            "Madrid",
            "Barcelona",
            "Valência",
            "Sevilha"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital do Egito?",
        respostas: [
            "Cairo",
            "Alexandria",
            "Luxor",
            "Aswan"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da Turquia?",
        respostas: [
            "Ancara",
            "Istambul",
            "Esmirna",
            "Bursa"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da Alemanha?",
        respostas: [
            "Munique",
            "Hamburgo",
            "Berlim",
            "Colônia"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital do México?",
        respostas: [
            "Buenos Aires",
            "Cidade do México",
            "São Paulo",
            "Rio de Janeiro"
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
