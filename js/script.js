//Exercício05
function Antecessor() {
    let numero = parseInt(prompt("Digite um número"))

    alert("O antecessor desse número é " + (numero - 1))
}

//Exercício06
function AreaRetangulo() {
    let base = parseInt(prompt("Digite o valor da base do retângulo"))
    let altura = parseInt(prompt("Digite o valor da altura do retângulo"))

    let area = base * altura

    alert("O valor da área desse retângulo é " + area)
}

//Exercício07 
function Idade() {
    let ano = parseInt(prompt("Digite a sua idade em anos: "))
    let mes = parseInt(prompt("Digite a sua idade em meses: "))
    let dia = parseInt(prompt("Digite a sua idade em dias: "))

    let diasTotais = ano * 365 + mes * 30 + dia

    alert("Você viveu um total de " + diasTotais + " dias")
}

//Exercício08
function Eleicao() {
    let eleitores = parseInt(prompt("Digite o número total de eleitores: "))
    let brancos = parseInt(prompt("Digite o número de votos brancos: "))
    let nulos = parseInt(prompt("Digite o numero de votos nulos: "))
    let validos = parseInt(prompt("Digite o número de votos válidos: "))

    let percentBrancos = (brancos * 100) / eleitores
    let percentNulos = (nulos * 100) / eleitores
    let percentValidos = (validos * 100) / eleitores

    alert("O total de eleitores é igual a: " + eleitores + "\n" +
        "Os " + brancos + " votos brancos equivalem a " + percentBrancos + "%.\n" +
        "Os " + nulos + " votos nulos equivalem a " + percentNulos + "%.\n" +
        "Os " + validos + " votos válidos equivalem a " + percentValidos + "%."
    )
}

//Exercício09
function ReajusteSalarial() {
    let salario = parseFloat(prompt("Digite o seu salário:"))
    let reajuste = parseFloat(prompt("Digite o percental de seu reajuste:"))

    let total = salario + ((reajuste / 100) * salario)

    alert("O valor final de seu salário é igual a: R$" + total)
}

//Exercício10
function Carro() {
    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "))

    let total = custoFabrica + custoFabrica * 0.28 + custoFabrica * 0.45

    alert("O custo final do carro é de: R$" + total)
}

//Exercício11
function SalarioCarro() {
    let salario = parseFloat(prompt("Digite aqui o salário fixo do funcionário: "))
    let salCarroVendido = parseFloat(prompt("Digite quanto ele(a) recebe por carro vendido: "))
    let QntdCarro = parseInt(prompt("Escreva quantos carros foram vendidos por ele(a) nesse mês: "))
    let valorTotal = parseFloat(prompt("Digite o valor total de suas vendas de carro: "))

    let salarioTotal = salario + salCarroVendido * QntdCarro + valorTotal * 0.05

    alert("O salário total desse(a) funcionário(a) é de: R$" + salarioTotal)
}

//Exercício12
function Temperatura() {
    let F = parseFloat(prompt("Digite o valor da temperatura em Fahrenheit:"))

    let C = (5 * (F - 32)) / 9

    alert(F + "ºF equivale(m) a " + C + "º Celsius")
}

//Exercício13
function MediaPonderada() {
    let nota1 = parseFloat(prompt("Digite o valor da primeira nota:"))
    let nota2 = parseFloat(prompt("Digite o valor da segunda nota:"))
    let nota3 = parseFloat(prompt("Digite o valor da terceira nota:"))

    let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

    alert("A média final do aluno é igual a " + mediaFinal)
}

//Exercicio14
function MaiorMenor() {
    let numero = prompt("Digite um número: ")

    if (numero > 10) {
        document.getElementById('demo').innerHTML = numero + " é maior que 10!";
    } else if (numero < 10) {
        document.getElementById('demo').innerHTML = numero + " é menor que 10!";
    } else {
        alert(numero + " é igual a 10!")
        document.getElementById('demo').innerHTML = "";
    }
}

//Exercicio15
function PositivoNegativo() {
    let numero = prompt("Digite um número: ")

    if (numero > 0) {
        document.getElementById('demo').innerHTML = numero + " é positivo!";
    } else {
        document.getElementById('demo').innerHTML = numero + " é negativo!";
    }
}

//Exercicio16
function PrecoMaca() {
    let quantidade = parseFloat(prompt("Digite quantas maçãs você comprou: "))

    if (quantidade < 12) {
        let total = quantidade;
        document.getElementById('demo').innerHTML = "O total ficou: R$" + total;
    } else {
        let total = quantidade * 1.30;
        document.getElementById('demo').innerHTML = "O total ficou: R$" + total;
    }
}

//Exercício17
function AprovadoReprovado() {
    let nota1 = parseFloat(prompt("Digite o valor da primeira nota: "))
    let nota2 = parseFloat(prompt("Digite o valor da segunda nota: "))

    let media = (nota1 + nota2) / 2

    if (media >= 6) {
        alert("Sua média é igual a " + media + ". Parabéns! Você foi aprovado!")
    } else {
        alert("Sua média é igual a " + media + ". Que pena! Você foi reprovado!")
    }
}

//Exercício18
function EleitorOuNao() {
    let nascimento = prompt("Digite o ano de seu nascimento:")
    let data = new Date()
    let anoAtual = data.getFullYear()

    let idade = anoAtual - nascimento

    if (idade >= 16) {
        alert("Você pode votar!")
    } else {
        alert("Você não pode votar!")
    }
}

//Exercício19
function MaiorMenor() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))

    if (numero1 > numero2) {
        alert("O maior número é " + numero1)
    } else {
        alert("O maior número é " + numero2)
    }
}

//Exercício20
function OrdemCrescente() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))

    if (numero1 > numero2) {
        alert("A ordem crescente é " + numero2 + ", " + numero1)
    } else {
        alert("A ordem crescente é " + numero1 + ", " + numero2)
    }
}

//Exercício21
function Xadrez() {
    let inicio = parseInt(prompt("Digite a hora de início do jogo: "))
    let termino = parseInt(prompt("Digite a hora de término do jogo: "))

    let duracao = termino - inicio

    if (duracao > 0) {
        alert("O jogo teve uma duração de " + duracao + " horas")
    } else if (duracao < 0) {
        alert("O jogo teve uma duração de " + (duracao + 24) + " horas")
    } else if (termino = inicio) {
        alert("O jogo teve uma duração de 24 horas")
    }
}

//Exercício22
function HorasExtras() {
    let horasMes = parseInt(prompt("Digite quantas horas você trabalhou nesse mês: "))
    let salHora = parseFloat(prompt("Digite quanto você ganha por hora trabalhada:"))
    let salarioTotal = horasMes * salHora

    if (horasMes <= 160) {
        alert("Seu salário é igual a: R$" + salarioTotal)
    } else {
        let horaExtra = horasMes - 160
        let salarioFinal = salarioTotal + (horaExtra * salHora) * 1.5

        alert("Seu salário é igual a: R$" + salarioFinal)
    }
}

//Exercício23
function PesoIdeal() {
    let nome = prompt("Digite o seu nome: ")
    let altura = parseFloat(prompt("Digite a sua altura"))
    let sexo = prompt("Digite o seu sexo: M ou F")

    if (sexo == "F" || sexo == "f") {
        let pesoIdeal = (62.1 * altura) - 44.7
        alert("Seu peso ideal é igual a " + pesoIdeal + " kg")
    } else if (sexo == "M" || sexo == "m") {
        let pesoIdeal = (62.1 * altura) - 44.7
        alert(nome + ", seu peso ideal é igual a " + pesoIdeal + " kg")
    } else {
        alert("Valor inválido")
    }
}

//Exercício24
function SalarioEPercentual() {
    let salarioFixo = parseFloat(prompt("Digite o valor de seu salário fixo:"))
    let vendas = parseFloat(prompt("Digite o valor total de suas vendas:"))

    if (vendas <= 1500) {
        let salarioTotal = salarioFixo + 0.03 * vendas
        alert("Ao todo, seu salário é de R$" + salarioTotal)
    } else {
        let valorUltrapassado = vendas - 1500
        let salarioTotal = salarioFixo + 0.03 * 1500 + 0.05 * valorUltrapassado
        alert("Ao todo, seu salário é de R$" + salarioTotal)
    }
}

//Exercício25
function SaldoAtual() {
    let numeroConta = prompt("digite o número de sua conta: ")
    let saldo = parseFloat(prompt("Agora digite o seu saldo: "))
    let debito = parseFloat(prompt("Digite o seu débito: "))
    let credito = parseFloat(prompt("Por fim, digite o seu crédito: "))

    let saldoAtual = saldo - debito + credito

    if (saldoAtual >= 0) {
        alert("Seu saldo é positivo. SALDO: R$" + saldoAtual)
    } else {
        alert("Seu saldo é negativo. SALDO: R$" + saldoAtual)
    }
}

//Exercício26
function Estoque() {
    let estoque = parseInt(prompt("Digite a quantidade atual de estoque:"))
    let estoqueMaximo = parseInt(prompt("Digite a quantidade máxima de estoque:"))
    let estoqueMinimo = parseInt(prompt("Digite a quantidade mínima de estoque:"))

    let quantidadeMedia = (estoqueMinimo + estoqueMaximo) / 2

    if (estoque >= quantidadeMedia) {
        Escreval("Não efetue a compra")
    } else {
        Escreval("Efetue a compra")
    }
}

//Exercício27
function PosNegZero() {
    let numero = prompt("Digite um número: ")

    if (numero > 0) {
        alert(numero + " é positivo!")
    } else if (numero < 0) {
        alert(numero + " é negativo!")
    } else {
        alert(numero + " é nulo(zero)")
    }
}

//Exercício28
function Maior3() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))
    let numero3 = parseInt(prompt("Digite o terceiro número: "))

    if (numero1 > numero2 && numero2 > numero3 || numero1 > numero3 && numero3 > numero2) {
        alert("O maior número é " + numero1)
    } else if (numero2 > numero1 && numero1 > numero3 || numero2 > numero3 && numero3 > numero1) {
        alert("O maior número é " + numero2)
    } else {
        alert("O maior número é " + numero3)
    }
}

//Exercício29
function SomaMaior() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))
    let numero3 = parseInt(prompt("Digite o terceiro número: "))

    if (numero1 > numero2 && numero2 > numero3) {
        alert("A soma dos dois maiores números é " + (numero1 + numero2))
    } else if (numero1 > numero3 && numero3 > numero2) {
        alert("A soma dos dois maiores números é " + (numero1 + numero3))
    } else if (numero2 > numero1 && numero1 > numero3) {
        alert("A soma dos dois maiores números é " + (numero2 + numero1))
    } else if (numero2 > numero3 && numero3 > numero1) {
        alert("A soma dos dois maiores números é " + (numero2 + numero3))
    } else if (numero3 > numero1 && numero1 > numero2) {
        alert("A soma dos dois maiores números é " + (numero3 + numero1))
    } else if (numero3 > numero2 && numero2 > numero1) {
        alert("A soma dos dois maiores números é " + (numero3 + numero2))
    }
}

//Exercício30
function OrdemCrescente3() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))
    let numero3 = parseInt(prompt("Digite o terceiro número"))

    if (numero1 > numero2 && numero2 > numero3) {
        alert("A ordem crescente é :" + numero3 + ", " + numero2 + ", " + numero1)
    } else if (numero1 > numero3 && numero3 > numero2) {
        alert("A ordem crescente é :" + numero2 + ", " + numero3 + ", " + numero1)
    } else if (numero2 > numero1 && numero1 > numero3) {
        alert("A ordem crescente é :" + numero3 + ", " + numero1 + ", " + numero2)
    } else if (numero2 > numero3 && numero3 > numero1) {
        alert("A ordem crescente é :" + numero1 + ", " + numero3 + ", " + numero2)
    } else if (numero3 > numero1 && numero1 > numero2) {
        alert("A ordem crescente é :" + numero2 + ", " + numero1 + ", " + numero3)
    } else if (numero3 > numero2 && numero2 > numero1) {
        alert("A ordem crescente é :" + numero1 + ", " + numero2 + ", " + numero3)
    }
}

//Exercício31
function LadosTriangulo() {
    let A = parseFloat(prompt("Digite o valor de A: "))
    let B = parseFloat(prompt("Digite o valor de B: "))
    let C = parseFloat(prompt("Digite o valor de C:"))

    if (A < B + C & B < A + C & C < B + A) {
        alert("Esses valores formam um triângulo!")
    } else {
        alert("Esse valores não formam um triângulo")
    }
}

// Exercício32
function Times() {
    let time1 = prompt("Digite o nome do primeiro time: ")
    let time2 = prompt("Digite o nome do segundo time: ")

    let golTime1 = parseInt(prompt("Digite quantos gols " + time1 + " fez na partida: "))
    let golTime2 = parseInt(prompt("Digite quantos gols " + time2 + " fez na partida: "))

    if (golTime1 > golTime2) {
        alert(time1 + " foi campeão!")
    } else if (golTime2 > golTime1) {
        alert(time2 + " foi campeão!")
    } else {
        alert("Houve um empate entre os dois times!")
    }
}

//Exercício 33
function MaiorMenorIgual() {
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))

    if (numero1 > numero2) {
        alert("O maior número é " + numero1)
    } else if (numero1 < numero2) {
        alert("O maior número é " + numero2)
    } else {
        alert("Os números são iguais!")
    }
}

// Exercício 35
function AlcoolGasolina() {
    let combustivel = prompt("Escolha uma opçao de combustível abaixo: \n1-Álcool \n2-Gasolina")
    let litros = parseInt(prompt("Quantos litros você deseja comprar?"))

    switch (combustivel) {
        case "1":
            if (litros <= 20) {
                let custo = litros * 2.90
                let total = custo - 0.03 * custo
                alert(litros + " litros de álcool tem o custo total de R$" + total.toFixed(2))
            } else {
                let custo = litros * 2.90
                let total = custo - 0.05 * custo
                alert(litros + " litros de álcool tem o custo total de R$" + total.toFixed(2))
            }
            break;
        case "2":
            if (litros <= 20) {
                let custo = litros * 3.30
                let total = custo - 0.04 * custo
                alert(litros + " litros de álcool tem o custo total de R$" + total.toFixed(2))
            } else {
                let custo = litros * 3.30
                let total = custo - 0.06 * custo
                alert(litros + " litros de álcool tem o custo total de R$" + total.toFixed(2))
            }
            break;
        default: alert("Opção inválida")
            break;

    }
}

//exercício 36
function HomemMulher() {
    let homem1 = parseInt(prompt("Escreva a idade do primeiro homem"))
    let homem2 = parseInt(prompt("Escreva a idade do segundo homem"))
    let mulher1 = parseInt(prompt("Escreva a idade da primeira mulher"))
    let mulher2 = parseInt(prompt("Escreva a idade da segunda mulher"))

    let soma = 0
    let produto = 0
    if (homem1 > homem2 && mulher1 > mulher2) {
        soma = homem1 + mulher2
        produto = homem2 * mulher1
    } else if (homem1 > homem2 && mulher2 > mulher1) {
        soma = homem1 + mulher1
        produto = homem2 * mulher2
    } else if (homem2 > homem1 && mulher2 > mulher1) {
        soma = homem2 + mulher1
        produto = homem1 * mulher2
    } else if (homem2 > homem1 && mulher1 > mulher2) {
        soma = homem2 + mulher2
        produto = homem1 * mulher1
    } else {
        alert("Existem valores repetidos")
    }

    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + soma + "\n E o produto entre o homem mais novo e a mulher mais velha é " + produto)
}

//exercício 37
function MorangoMaca() {
    let fruta = prompt("Escolha uma opçao de fruta abaixo: \n1-Morango \n2-Maçã")
    let qntd = parseFloat(prompt("Quantos Kg você deseja comprar?"))
    let valor = 0
    switch (fruta) {
        case "1":
            if (qntd <= 5) {

                valor = qntd * 2.50
                alert("O total é de R$" + valor.toFixed(2))

            } else if (qntd > 5 && qntd <= 8) {

                valor = qntd * 2.20
                alert("O total é de R$" + valor.toFixed(2))

            } else if (qntd > 8 || qntd * 2.20 > 25) {

                valor = qntd * 2.20
                let novoValor = valor - 10 / 100 * valor
                alert("O total é de R$" + novoValor.toFixed(2))
            }
            break;

        case "2":
            if (qntd <= 5) {

                valor = qntd * 1.80
                alert("O total é de R$" + valor.toFixed(2))

            } else if (qntd > 5 && qntd <= 8) {

                valor = qntd * 1.50

                alert("O total é de R$" + valor.toFixed(2))

            } else if (qntd > 8 || qntd * 1.50 > 25) {

                valor = qntd * 1.50
                let novoValor = valor - 10 / 100 * valor
                alert("O total é de R$" + novoValor.toFixed(2))
            }
            break;

        default:
            alert("Escolha inválida")
            break;
    }
}

//exer38
function Senha() {
    let codigo = prompt("Digite o código:")

    if (codigo != "1234") {
        alert("Usuário inválido")
    } else {
        let senha = prompt("Digite a senha:")

        if (senha != "9999") {
            alert("Senha incorreta")
        } else {
            alert("Acesso permitido")
        }
    }
}

//exer40
function TotalPagar() {
    let nome = prompt("Digite o nome do produto")
    let qntd = parseInt(prompt("Digite a quantidade adquirida"))
    let preco = parseFloat(prompt("Digite o preço unitário"))

    let total = qntd * preco
    if (qntd <= 5) {
        let totalPagar = total - 2 / 100 * total
        alert("O total a pagar será de R$" + totalPagar)
    } else if (qntd > 5 && qntd <= 10) {
        let totalPagar = total - 3 / 100 * total
        alert("O total a pagar será de R$" + totalPagar)
    } else {
        let totalPagar = total - 5 / 100 * total
        alert("O total a pagar será de R$" + totalPagar)
    }
}

//exer41
function MediaAproveitamento() {
    let n1 = parseFloat(prompt("Digite a primeira nota"))
    let n2 = parseFloat(prompt("Digite a segunda nota"))
    let n3 = parseFloat(prompt("Digite a terceira nota"))
    let media = parseFloat(prompt("Digite a média dos exercícios"))

    let aproveitamento = (n1 + n2 * 2 + n3 * 3 + media) / 7

    if (aproveitamento >= 9) {

        alert("Parabéns! Sua média é A")

    } else if (media >= 7.5 && media < 9) {

        alert("Sua média é B")

    } else if (media >= 6 && media < 7.5) {

        alert("Sua média é C")

    } else if (media < 6) {

        alert("Sua média é D")

    } else {
        alert("Existem valores inválidos")
    }

}

//exer42

function Aposentadoria() {
    let nascimento = parseInt(prompt("Digite seu ano de nascimento"))
    let ingresso = parseInt(prompt("Digite seu ano de ingresso na empresa"))

    let anoAtual = new Date()

    let idade = anoAtual.getFullYear() - nascimento
    let contribuicao = anoAtual.getFullYear() - ingresso

    if (idade >= 65 || contribuicao >= 30 || (idade >= 60 && contribuicao > 25)) {
        alert("Você tem " + idade + " anos e " + contribuicao + " anos de contribuição\n Você PODE requerer aposentadoria")
    } else {
        alert("Você tem " + idade + " anos e " + contribuicao + " anos de idade contribuição\n Você NÃO pode requerer aposentadoria")
    }

}

function Exer44() {
    let num1 = parseFloat(prompt("Digite o primeiro número"))
    let num2

    do {
        num2 = parseFloat(prompt("Digite o segundo número"))


    } while (num2 == 0);


    alert("A divisão entre " + num1 + " e " + num2 + " é " + num1 / num2)
}

function Exer45() {
    let num1 = parseFloat(prompt("Digite o primeiro número"))
    let num2 = parseFloat(prompt("Digite o segundo número"))

    while (num2 == 0) {
        num2 = parseFloat(prompt("Digite o segundo número"))
    };


    alert("A divisão entre " + num1 + " e " + num2 + " é " + num1 / num2)
}

function Exer46() {
    let num1 = parseFloat(prompt("Digite o primeiro número"))
    let num2

    do {
        num2 = parseFloat(prompt("Digite o segundo número"))

        if (num2 == 0) {
            alert("valor inválido")
        }


    } while (num2 == 0);


    alert("A divisão entre " + num1 + " e " + num2 + " é " + num1 / num2)

}


function Exer47() {
    let num1 = parseFloat(prompt("Digite o primeiro número"))
    let num2 = parseFloat(prompt("Digite o segundo número"))

    while (num2 == 0) {
        alert("Valor inválido")
        num2 = parseFloat(prompt("Digite o segundo número"))
    };


    alert("A divisão entre " + num1 + " e " + num2 + " é " + num1 / num2)
}

function Exer48() {
    let nota1
    let nota2

    do {
        nota1 = parseFloat(prompt("Digite as notas da primeira prova"))

        if (nota1 < 0 || nota1 > 10) {
            alert("Nota inválida! Só são válidos números de 0 a 10")
        }
    } while (nota1 < 0 || nota1 > 10);

    do {

        nota2 = parseFloat(prompt("Digite as notas da segunda prova"))
        if (nota2 < 0 || nota2 > 10) {
            alert("Nota inválida! Só são válidos números de 0 a 10")
        }
    } while (nota2 < 0 || nota2 > 10)

    let media = (nota1 + nota2) / 2

    alert("A média entre a nota " + nota1 + " e a nota " + nota2 + " é igual a \n" + media)
}

function Exer49() {
    let nota1
    let nota2
    let continuar

    do {
        do {
            nota1 = parseFloat(prompt("Digite as notas da primeira prova"))

            if (nota1 < 0 || nota1 > 10) {
                alert("Nota inválida! Só são válidos números de 0 a 10")
            }
        } while (nota1 < 0 || nota1 > 10);

        do {

            nota2 = parseFloat(prompt("Digite as notas da segunda prova"))
            if (nota2 < 0 || nota2 > 10) {
                alert("Nota inválida! Só são válidos números de 0 a 10")
            }
        } while (nota2 < 0 || nota2 > 10)

        let media = (nota1 + nota2) / 2

        alert("A média entre a nota " + nota1 + " e a nota " + nota2 + " é igual a \n" + media)

        continuar = prompt("Deseja continuar? Digite S para Sim ou N para Não")
    } while (continuar == "s" || continuar == "S")
}

function Exer50() {
    for (let i = 1; i < 11; i++) {

        document.write(i + "<br>")

    }
}

function Exer51() {
    for (let i = 10; i > 0; i--) {

        document.write(i + "<br>")

    }
}

function Exer52() {
    for (let i = 101; i < 111; i++) {

        document.write(i + "<br>")

    }
}

function Exer53() {

    let numero = parseInt(prompt("Digite um número"))

    if (numero > 0) {
        for (let i = 1; i < numero + 1; i++) {

            document.write(i + "<br>")

        }
    } else {
        alert("Este número é menor que 0. Escolha um maior que 0.")
    }
}

function Exer54() {

    let numero

    do {
        numero = parseInt(prompt("Digite um número"))
        if (numero < 0) {
            alert("Número menor que 0 (inválido)")
        }
    } while (numero < 0)

    for (let i = 1; i < numero + 1; i++) {

        document.write(i + "<br>")

    }

}

function Exer55() {

    for (let i = 1; i <= 10; i++) {
        document.write("8 x " + i + " = " + 8 * i + "<br>")
    }
}

function Exer56() {

    let numero

    do {
        numero = parseInt(prompt("Digite um número para calcular sua tabuada."))
        if (numero < 1 || numero > 10) {
            alert("Número inválido - Somente escreva numeros de 1 a 10")
        }
    } while (numero > 10 || numero < 1)

    for (let i = 1; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + numero * i + "<br>")
    }
}

function Exer57() {
    let i = 1
    do {
        document.write(i + "<br>")

        i++
    } while (i < 11)

}

function Exer58() {
    let i = 10
    do {
        document.write(i + "<br>")

        i--
    } while (i > 0)

}

function Exer59() {
    let numero
    let quantidade = 0
    for (let i = 1; i <= 10; i++) {
        numero = parseInt(prompt("Digite o " + i + "º numero"))

        if (numero < 0) {
            quantidade = quantidade + 1
        }
    }

    alert("No total, foram escritos " + quantidade + " números negativos")
}

function Exer60() {
    let numero
    let qntd = 0
    let fora = 0

    for (let i = 1; i < 11; i++) {

        numero = parseInt(prompt("Digite o " + i + "º número:"))
        if (numero >= 10 && numero <= 20) {
            qntd = qntd + 1
        } else {
            fora = fora + 1
        }
    }
    alert("Existem " + qntd + " números entre 10 e 20.\nExistem " + fora + " números fora desse intervalo.")
}

function Exer61() {
    let numero
    let soma = 0

    for (let i = 1; i < 11; i++) {

        numero = parseInt(prompt("Digite o " + i + "º número:"))

        soma = soma + numero
    }
    alert("A média dos 10 números é igual a " + soma / 10)
}

function Exer62() {

    let aluno = parseInt(prompt("Digite quantos alunos estão em sua turma."))
    let nota
    let soma = 0

    for (let i = 1; i < aluno + 1; i++) {
        nota = parseInt(prompt("Digite a nota do " + i + " º aluno."))

        soma = soma + nota
    }

    alert("A média desses alunos é igual a " + soma / aluno)
}

function Exer63() {
    let numero
    let soma = 0

    for (let i = 1; i < 11; i++) {

        numero = parseInt(prompt("Digite o " + i + "º número:"))

        soma = soma + numero
    }
    alert("A soma dos 10 números é igual a " + soma)
}

function Exer64() {
    let numero
    let soma = 0
    let qntd = 0

    for (i = 1; i < 11; i++) {
        numero = parseInt(prompt("Digite o " + i + "º número"))

        if (numero < 40) {
            qntd = qntd + 1
            soma = soma + numero
        }
    }
    alert("A soma dos " + qntd + " números abaixo de 40 é " + soma)
}

function Exer65() {

    let num1 = parseInt(prompt("Digite o primeiro número"))
    let num2
    let soma = 0

    do {
        num2 = parseInt(prompt("Digite o segundo número"))
        if (num2 < num1) {
            alert("O segundo número deve ser maior que o primeiro")
        }
    } while (num2 < num1)

    for (let i = num1; i < num2 + 1; i++) {
        soma = soma + i
    }
    alert("A soma dos números entre " + num1 + " e " + num2 + " (incluídos) é " + soma)
}

function Exer66() {
    let num1 = parseInt(prompt("Digite o primeiro número"))
    let num2 = parseInt(prompt("Digite o segundo número"))
    let soma = 0

    if (num1 < num2) {

        for (let i = num1; i < num2 + 1; i++) {
            soma = soma + i
        }
        alert("A soma dos números entre " + num1 + " e " + num2 + " (incluídos) é " + soma)
    }else{ // num1>num2
        //5 4
        for(let i = num1; i > num2-1; i--){
            soma = soma + i
        }
        alert("A soma dos números entre " + num2 + " e " + num1 + " (incluídos) é " + soma)
    }
}

function Exer67(){

    let soma = 0
    let quantidade = 0

    for (let i = 15; i <101; i++){
        quantidade = quantidade + 1
        soma = soma + i
    }

    alert("A soma entre 15 e 100 e sua média aritmética são, respectivamente\n"+soma+ " e " + soma/quantidade)
}

function Exer68(){
    let mercadoria = parseInt(prompt("Digite o número total de mercadorias no estoque"))
    let valor = 0
    let soma = 0
    let qntd = 0

    for(i = 1; i <=mercadoria; i++){
        valor = parseFloat(prompt("Digite o valor da "+i+"º  mercadoria"))
        soma = soma + valor
        qntd = qntd + 1
    }
    let media = soma / qntd
    alert("O valor total em estoque é R$    "+soma+"\n A média dos valores é "+ media)
}

function Exer69(){
    let mercadoria = parseInt(prompt("Digite o número total de mercadorias no estoque"))
    let valor = 0
    let soma = 0
    let qntd = 0

    for(i = 1; i <=mercadoria; i++){
        valor = parseFloat(prompt("Digite o valor da "+i+"º  mercadoria"))
        soma = soma + valor
        qntd = qntd + 1
    }
    let media = soma / qntd
    alert("O valor total em estoque é R$    "+soma+"\n A média dos valores é "+ media)
}


