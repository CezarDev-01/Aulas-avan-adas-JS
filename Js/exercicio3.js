ATIVIDADE JÚLIO CEZAR DS 2° Módulo

//1 Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido
let nota;
do {
  nota = parseFloat(prompt("Informe uma nota entre 0 e 10:"));
  if (nota < 0 || nota > 10) alert("Nota inválida.");
} while (nota < 0 || nota > 10);

//2 Crie um loop que imprima todos os números de 1 a 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//3 Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
let usuario, senha;
do {
  usuario = prompt("Informe o nome de usuário:");
  senha = prompt("Informe a senha:");
  if (usuario === senha) alert("Erro: a senha não pode ser igual ao nome de usuário.");
} while (usuario === senha);

//4 Faça um programa que leia e valide as seguintes informações:
//a. Nome: maior que 3 caracteres;
//b. Idade: entre 0 e 150;
//c. Salário: maior que zero;
//d. Sexo: 'f' ou 'm';
//e. Estado Civil: 's', 'c', 'v', 'd';
//Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
let nome, idade, salario, sexo, estadoCivil;
do {
  nome = prompt("Informe seu nome:");
} while (nome.length <= 3);

do {
  idade = parseInt(prompt("Informe sua idade:"));
} while (idade < 0 || idade > 150);

do {
  salario = parseFloat(prompt("Informe seu salário:"));
} while (salario <= 0);

do {
  sexo = prompt("Informe seu sexo (f/m):");
} while (sexo !== 'f' && sexo !== 'm');

do {
  estadoCivil = prompt("Informe seu estado civil (s, c, v, d):");
} while (!['s', 'c', 'v', 'd'].includes(estadoCivil));

//5 Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual
//de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de
//crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para
//que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de
//crescimento.
let populacaoA = 80000, populacaoB = 200000, taxaA = 1.03, taxaB = 1.015, anos = 0;
while (populacaoA < populacaoB) {
  populacaoA *= taxaA;
  populacaoB *= taxaB;
  anos++;
}
console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a de B.`);

//6 Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
do {
  populacaoA = parseFloat(prompt("Informe a população inicial do país A:"));
  populacaoB = parseFloat(prompt("Informe a população inicial do país B:"));
  taxaA = parseFloat(prompt("Informe a taxa de crescimento do país A (%):")) / 100 + 1;
  taxaB = parseFloat(prompt("Informe a taxa de crescimento do país B (%):")) / 100 + 1;
  anos = 0;

  if (populacaoA > 0 && populacaoB > 0 && taxaA > 1 && taxaB > 1) {
    while (populacaoA < populacaoB) {
      populacaoA *= taxaA;
      populacaoB *= taxaB;
      anos++;
    }
    console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a de B.`);
  } else {
    alert("Dados inválidos.");
  }
} while (confirm("Deseja fazer outra operação?"));

//7 Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log(Array.from({length: 20}, (_, i) => i + 1).join(" "));

//8 Faça um programa que leia 5 números e informe o maior número.
let maior = -Infinity;
for (let i = 0; i < 5; i++) {
  const numero = parseFloat(prompt(`Informe o número ${i + 1}:`));
  if (numero > maior) maior = numero;
}
console.log(`O maior número é: ${maior}`);

//9 Faça um programa que leia 5 números e informe a soma e a média dos números.
let soma = 0;
for (let i = 0; i < 5; i++) {
  const numero = parseFloat(prompt(`Informe o número ${i + 1}:`));
  soma += numero;
}
console.log(`Soma: ${soma}, Média: ${soma / 5}`);

//10 Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

//11 Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
let num1 = parseInt(prompt("Informe o primeiro número:"));
let num2 = parseInt(prompt("Informe o segundo número:"));
let menor = Math.min(num1, num2);
let maior = Math.max(num1, num2);
for (let i = menor + 1; i < maior; i++) {
  console.log(i);
}

//12 Altere o programa anterior para mostrar no final a soma dos números.
let soma = 0;
for (let i = menor + 1; i < maior; i++) {
  console.log(i);
  soma += i;
}
console.log(`Soma dos números no intervalo: ${soma}`);

//13 Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro
//entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser
//conforme o exemplo abaixo:
//a. Tabuada de 5:
//5 X 1 = 5
//5 X 2 = 10
//...
//5 X 10 = 50
//b. Como fazer a tabuada
let numero = parseInt(prompt("Informe um número para ver a tabuada (1 a 10):"));
if (numero >= 1 && numero <= 10) {
  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
}

//14 Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.
let base = parseInt(prompt("Informe a base:"));
let expoente = parseInt(prompt("Informe o expoente:"));
let resultado = 1;
for (let i = 0; i < expoente; i++) {
  resultado *= base;
}
console.log(`Resultado: ${resultado}`);

//15 Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.
let pares = 0;
let impares = 0;
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Informe o número ${i + 1}:`));
  if (numero % 2 === 0) pares++;
  else impares++;
}
console.log(`Pares: ${pares}, Ímpares: ${impares}`);

//16 A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. Sequência de Fibonacci com laços
let n = parseInt(prompt("Informe o número de termos da sequência de Fibonacci:"));
let a = 1, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= n; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}

//17 A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.
a = 0;
b = 1;
console.log(a);
console.log(b);
while (true) {
  let proximo = a + b;
  if (proximo > 500) break;
  console.log(proximo);
  a = b;
  b = proximo;
}

//18 Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.:5!=5.4.3.2.1=120 Calcular fatorial com laços
let numeroFatorial = parseInt(prompt("Informe um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = numeroFatorial; i > 1; i--) {
  fatorial *= i;
}
console.log(`Fatorial de ${numeroFatorial} é: ${fatorial}`);

//19 Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.
let nValores = parseInt(prompt("Informe a quantidade de números do conjunto:"));
let valores = [];
for (let i = 0; i < nValores; i++) {
  valores.push(parseInt(prompt(`Informe o número ${i + 1}:`)));
}
let menorValor = Math.min(...valores);
let maiorValor = Math.max(...valores);
let somaValores = valores.reduce((a, b) => a + b, 0);
console.log(`Menor: ${menorValor}, Maior: ${maiorValor}, Soma: ${somaValores}`);

//20 Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
valores = [];
for (let i = 0; i < nValores; i++) {
  let numero;
  do {
    numero = parseInt(prompt(`Informe um número entre 0 e 1000 (${i + 1}):`));
  } while (numero < 0 || numero > 1000);
  valores.push(numero);
}
menorValor = Math.min(...valores);
maiorValor = Math.max(...valores);
somaValores = valores.reduce((a, b) => a + b, 0);
console.log(`Menor: ${menorValor}, Maior: ${maiorValor}, Soma: ${somaValores}`);

//21 Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.
do {
  let numero = parseInt(prompt("Informe um número para calcular o fatorial (entre 1 e 15):"));
  if (numero > 0 && numero < 16) {
    let fatorial = 1;
    for (let i = numero; i > 1; i--) {
      fatorial *= i;
    }
    console.log(`Fatorial de ${numero} é: ${fatorial}`);
  } else {
    console.log("Número inválido.");
  }
} while (confirm("Deseja calcular outro fatorial?"));

//22 Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1. Números primos com laços
let numeroPrimo = parseInt(prompt("Informe um número para verificar se é primo:"));
let ehPrimo = true;
for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
  if (numeroPrimo % i === 0) {
    ehPrimo = false;
    break;
  }
}
console.log(ehPrimo ? `${numeroPrimo} é primo` : `${numeroPrimo} não é primo`);

//23 Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.
ehPrimo = true;
let divisores = [];
for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
  if (numeroPrimo % i === 0) {
    ehPrimo = false;
    divisores.push(i);
  }
}
console.log(ehPrimo ? `${numeroPrimo} é primo` : `${numeroPrimo} não é primo e é divisível por ${divisores.join(", ")}`);

//24 Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. 
//Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.
let n = parseInt(prompt("Informe o valor de N:"));
let divisoes = 0;
for (let num = 2; num <= n; num++) {
  let primo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    divisoes++;
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
  if (primo) console.log(num);
}
console.log(`Total de divisões realizadas: ${divisoes}`);

//25 Faça um programa que calcule o mostre a média aritmética de N notas.
let qtdNotas = parseInt(prompt("Informe a quantidade de notas:"));
let somaNotas = 0;
for (let i = 0; i < qtdNotas; i++) {
  somaNotas += parseFloat(prompt(`Informe a nota ${i + 1}:`));
}
console.log(`Média das notas: ${somaNotas / qtdNotas}`);

//26 Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar  se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma
//é jovem, adulta ou idosa, conforme a média calculada.
let qtdPessoas = parseInt(prompt("Informe a quantidade de pessoas:"));
let somaIdades = 0;
for (let i = 0; i < qtdPessoas; i++) {
  somaIdades += parseInt(prompt(`Informe a idade da pessoa ${i + 1}:`));
}
let mediaIdade = somaIdades / qtdPessoas;
if (mediaIdade <= 25) console.log("Turma jovem");
else if (mediaIdade <= 60) console.log("Turma adulta");
else console.log("Turma idosa");

//27 Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
let qtdEleitores = parseInt(prompt("Informe o número total de eleitores:"));
let votos = [0, 0, 0];
for (let i = 0; i < qtdEleitores; i++) {
  let voto = parseInt(prompt("Vote em 1, 2 ou 3:"));
  if (voto >= 1 && voto <= 3) votos[voto - 1]++;
  else console.log("Voto inválido.");
}
console.log(`Candidato 1: ${votos[0]} votos, Candidato 2: ${votos[1]} votos, Candidato 3: ${votos[2]} votos`);

//28 Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.
let qtdTurmas = parseInt(prompt("Informe a quantidade de turmas:"));
let totalAlunos = 0;
for (let i = 0; i < qtdTurmas; i++) {
  let alunos;
  do {
    alunos = parseInt(prompt(`Informe a quantidade de alunos na turma ${i + 1} (máximo 40):`));
  } while (alunos > 40 || alunos < 0);
  totalAlunos += alunos;
}
console.log(`Média de alunos por turma: ${totalAlunos / qtdTurmas}`);

//29 Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.
let qtdCds = parseInt(prompt("Informe a quantidade de CDs na coleção:"));
let totalInvestido = 0;
for (let i = 0; i < qtdCds; i++) {
  totalInvestido += parseFloat(prompt(`Informe o valor do CD ${i + 1}:`));
}
console.log(`Valor total investido: R$ ${totalInvestido}, Valor médio por CD: R$ ${totalInvestido / qtdCds}`);

//30 O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas.
//Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o
//número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do
//caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você
//foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os
//preços de 1 até 50 produtos, conforme o exemplo abaixo:
//a. Lojas Quase Dois - Tabela de preços
//1 - R$ 1.99
//2 - R$ 3.98
//...
//50 - R$ 99.50 
console.log("Lojas Quase Dois - Tabela de preços");
for (let i = 1; i <= 50; i++) {
  console.log(`${i} - R$ ${(i * 1.99).toFixed(2)}`);
}

//31 31. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia
//da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o
//programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão
//informado pelo usuário, conforme o exemplo abaixo:
//a. Preço do pão: R$ 0.18
//Panificadora Pão de Ontem - Tabela de preços
//1 - R$ 0.18
//2 - R$ 0.36
//...
//50 - R$ 9.00
let precoPao = parseFloat(prompt("Informe o preço do pão:"));
console.log("Panificadora Pão de Ontem - Tabela de preços");
for (let i = 1; i <= 50; i++) {
  console.log(`${i} - R$ ${(i * precoPao).toFixed(2)}`);
}

//32 O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui
//uma loja de conveniências. Faça um programa que implemente uma caixa registradora
//rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços
//das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra.
//O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente
//forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá
//voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo
//abaixo:
//a. Lojas Tabajara
//Produto 1: R$ 2.20
//Produto 3: R$ 0
//Total: R$ 9.00
//Dinheiro: R$ 20.00
//Troco: R$ 11.00
do {
  let total = 0, produto, count = 1;
  console.log("Lojas Tabajara");
  while ((produto = parseFloat(prompt(`Produto ${count}:`))) !== 0) {
    total += produto;
    console.log(`Produto ${count}: R$ ${produto.toFixed(2)}`);
    count++;
  }
  console.log(`Total: R$ ${total.toFixed(2)}`);
  let dinheiro = parseFloat(prompt("Dinheiro:"));
  console.log(`Troco: R$ ${(dinheiro - total).toFixed(2)}`);
} while (confirm("Deseja registrar uma nova compra?"));

//33 O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.
let temperaturas = [];
let temp;
while ((temp = prompt("Informe uma temperatura ou deixe vazio para finalizar:")) !== "") {
  temperaturas.push(parseFloat(temp));
}
let menor = Math.min(...temperaturas);
let maior = Math.max(...temperaturas);
let media = temperaturas.reduce((a, b) => a + b, 0) / temperaturas.length;
console.log(`Menor: ${menor}, Maior: ${maior}, Média: ${media.toFixed(2)}`);

//34 Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
let numPrimo = parseInt(prompt("Informe um número para verificar se é primo:"));
let ehPrimo = numPrimo > 1;
for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
  if (numPrimo % i === 0) {
    ehPrimo = false;
    break;
  }
}
console.log(ehPrimo ? `${numPrimo} é primo` : `${numPrimo} não é primo`);

//35 Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário.
let limite = parseInt(prompt("Informe o limite superior para verificar números primos:"));
for (let num = 2; num <= limite; num++) {
  let primo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
  if (primo) console.log(num);
}

//36 Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado
//pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor
//inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
//a. Montar a tabuada de: 5
//Começar por: 4
//Terminar em: 7
//Vou montar a tabuada de 5 começando em 4 e terminando em 7:
//5 X 4 = 20
//5 X 5 = 25
//5 X 6 = 30
//5 X 7 = 35
//Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.
let tabuada = parseInt(prompt("Informe o número para a tabuada:"));
let inicio = parseInt(prompt("Informe o valor inicial:"));
let fim = parseInt(prompt("Informe o valor final:"));
if (fim >= inicio) {
  console.log(`Tabuada de ${tabuada} começando em ${inicio} e terminando em ${fim}:`);
  for (let i = inicio; i <= fim; i++) {
    console.log(`${tabuada} X ${i} = ${tabuada * i}`);
  }
} else {
  console.log("O valor final deve ser maior ou igual ao valor inicial.");
}

//37 Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais
//baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada
//um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve
//ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve
//ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais
//magro, além da média das alturas e dos pesos dos clientes
let codigo, maiorAltura = 0, menorAltura = Infinity, maiorPeso = 0, menorPeso = Infinity;
let codigoMaiorAltura, codigoMenorAltura, codigoMaiorPeso, codigoMenorPeso;
let totalAltura = 0, totalPeso = 0, count = 0;
while ((codigo = parseInt(prompt("Informe o código do cliente ou 0 para finalizar:"))) !== 0) {
  let altura = parseFloat(prompt("Informe a altura:"));
  let peso = parseFloat(prompt("Informe o peso:"));
  totalAltura += altura;
  totalPeso += peso;
  count++;
  if (altura > maiorAltura) {
    maiorAltura = altura;
    codigoMaiorAltura = codigo;
  }
  if (altura < menorAltura) {
    menorAltura = altura;
    codigoMenorAltura = codigo;
  }
  if (peso > maiorPeso) {
    maiorPeso = peso;
    codigoMaiorPeso = codigo;
  }
  if (peso < menorPeso) {
    menorPeso = peso;
    codigoMenorPeso = codigo;
  }
}
console.log(`Cliente mais alto: Código ${codigoMaiorAltura}, Altura: ${maiorAltura}`);
console.log(`Cliente mais baixo: Código ${codigoMenorAltura}, Altura: ${menorAltura}`);
console.log(`Cliente mais gordo: Código ${codigoMaiorPeso}, Peso: ${maiorPeso}`);
console.log(`Cliente mais magro: Código ${codigoMenorPeso}, Peso: ${menorPeso}`);
console.log(`Média de altura: ${(totalAltura / count).toFixed(2)}, Média de peso: ${(totalPeso / count).toFixed(2)}`);

//38 Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
//a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
//b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
//c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual
//do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir
//isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.
let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário:"));
let ano = 1996;
let salario = salarioInicial * 1.015;
let aumento = 1.015;
while (ano <= new Date().getFullYear()) {
  aumento *= 2;
  salario += salarioInicial * aumento;
  ano++;
}
console.log(`Salário atual: R$ ${salario.toFixed(2)}`);

//39 Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de
//trânsito. Foram obtidos os seguintes dados:
//a. Código da cidade;
//b. Número de veículos de passeio (em 1999);
//c. Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
//d. Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
//e. Qual a média de veículos nas cinco cidades juntas;
//f. Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.
let veiculosTotal = 0, acidentesTotal = 0, acidentesMenor2000 = 0, countMenor2000 = 0;
let maiorIndice = 0, menorIndice = Infinity, codigoMaiorIndice, codigoMenorIndice;
for (let i = 1; i <= 5; i++) {
  let codigoCidade = prompt(`Informe o código da cidade ${i}:`);
  let veiculos = parseInt(prompt("Informe o número de veículos de passeio:"));
  let acidentes = parseInt(prompt("Informe o número de acidentes com vítimas:"));
  let indice = acidentes / veiculos;
  veiculosTotal += veiculos;
  if (indice > maiorIndice) {
    maiorIndice = indice;
    codigoMaiorIndice = codigoCidade;
  }
  if (indice < menorIndice) {
    menorIndice = indice;
    codigoMenorIndice = codigoCidade;
  }
  if (veiculos < 2000) {
    acidentesMenor2000 += acidentes;
    countMenor2000++;
  }
}
console.log(`Maior índice de acidentes: ${maiorIndice.toFixed(2)} na cidade ${codigoMaiorIndice}`);
console.log(`Menor índice de acidentes: ${menorIndice.toFixed(2)} na cidade ${codigoMenorIndice}`);
console.log(`Média de veículos: ${(veiculosTotal / 5).toFixed(0)}`);
console.log(`Média de acidentes em cidades com menos de 2000 veículos: ${(acidentesMenor2000 / countMenor2000).toFixed(0)}`);

//40 Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes
//dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
//a. Os juros e a quantidade de parcelas seguem a tabela abaixo:
//Quantidade de Parcelas % de Juros sobre o valor inicial da dívida
//1 0
//3 10
//6 15
//9 20
//12 25
//Exemplo de saída do programa:
//Valor da Dívida Valor dos Juros Quantidade de Parcelas Valor da Parcela
//R$ 1.000,00 0 1 R$ 1.000,00
//R$ 1.100,00 100 3 R$ 366,00
//R$ 1.150,00 150 6 R$ 191,67
let divida = parseFloat(prompt("Informe o valor da dívida:"));
let parcelas = [1, 3, 6, 9, 12];
let juros = [0, 10, 15, 20, 25];

console.log("Valor da Dívida | Valor dos Juros | Quantidade de Parcelas | Valor da Parcela");
for (let i = 0; i < parcelas.length; i++) {
  let valorJuros = (divida * juros[i]) / 100;
  let valorDivida = divida + valorJuros;
  let valorParcela = valorDivida / parcelas[i];
  console.log(
    `R$ ${valorDivida.toFixed(2)} | R$ ${valorJuros.toFixed(2)} | ${parcelas[i]} | R$ ${valorParcela.toFixed(2)}`
  );
}

//41 O cardápio de uma lanchonete é o seguinte:
//a. Especificação Código Preço
//Cachorro Quente 100 R$ 1,20
//Bauru Simples 101 R$ 1,30
//Bauru com ovo 102 R$ 1,50
//Hambúrguer 103 R$ 1,20
//Cheeseburguer 104 R$ 1,30
//Refrigerante 105 R$ 1,00
//Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
//Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do
//pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.
let cardapio = {
  100: { item: "Cachorro Quente", preco: 1.2 },
  101: { item: "Bauru Simples", preco: 1.3 },
  102: { item: "Bauru com ovo", preco: 1.5 },
  103: { item: "Hambúrguer", preco: 1.2 },
  104: { item: "Cheeseburguer", preco: 1.3 },
  105: { item: "Refrigerante", preco: 1.0 },
};

let total = 0;
let pedido;
while ((pedido = parseInt(prompt("Informe o código do item ou 0 para encerrar o pedido:"))) !== 0) {
  if (cardapio[pedido]) {
    let quantidade = parseInt(prompt(`Informe a quantidade de ${cardapio[pedido].item}:`));
    let valorItem = cardapio[pedido].preco * quantidade;
    total += valorItem;
    console.log(`${cardapio[pedido].item} - ${quantidade} x R$ ${cardapio[pedido].preco.toFixed(2)} = R$ ${valorItem.toFixed(2)}`);
  } else {
    console.log("Código inválido.");
  }
}
console.log(`Total do pedido: R$ ${total.toFixed(2)}`);

//42 Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de
//código. Os códigos utilizados são:
//a. 1 , 2, 3, 4 - Votos para os respectivos candidatos
//(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
//5 - Voto Nulo
//6 - Voto em Branco
//Faça um programa que calcule e mostre:
//b. O total de votos para cada candidato;
//c. O total de votos nulos;
//d. O total de votos em branco;
//e. A percentagem de votos nulos sobre o total de votos;
//f. A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos
//tem-se o valor zero.
let votos = [0, 0, 0, 0, 0, 0];
let voto;
while ((voto = parseInt(prompt("Digite o código do voto (1-4 para candidatos, 5 para nulo, 6 para branco, 0 para encerrar):"))) !== 0) {
  if (voto >= 1 && voto <= 6) votos[voto - 1]++;
}

let totalVotos = votos.reduce((a, b) => a + b, 0);
let percNulos = ((votos[4] / totalVotos) * 100).toFixed(2);
let percBrancos = ((votos[5] / totalVotos) * 100).toFixed(2);

console.log(`Votos candidato 1: ${votos[0]}`);
console.log(`Votos candidato 2: ${votos[1]}`);
console.log(`Votos candidato 3: ${votos[2]}`);
console.log(`Votos candidato 4: ${votos[3]}`);
console.log(`Votos nulos: ${votos[4]} (${percNulos}%)`);
console.log(`Votos em branco: ${votos[5]} (${percBrancos}%)`);

//43 Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o
//programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito
//da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após
//cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema.
//Após todos os alunos terem respondido informar:
//a. Maior e Menor Acerto;
//b. Total de Alunos que utilizaram o sistema;
//c. A Média das Notas da Turma.
let gabarito = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B"];
let maiorAcerto = 0, menorAcerto = 10, totalNotas = 0, totalAlunos = 0;
let repetir;

do {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    let resposta = prompt(`Resposta da questão ${i + 1}:`).toUpperCase();
    if (resposta === gabarito[i]) acertos++;
  }
  console.log(`Total de acertos: ${acertos}`);
  maiorAcerto = Math.max(maiorAcerto, acertos);
  menorAcerto = Math.min(menorAcerto, acertos);
  totalNotas += acertos;
  totalAlunos++;

  repetir = confirm("Outro aluno vai utilizar o sistema?");
} while (repetir);

let media = totalNotas / totalAlunos;
console.log(`Maior Acerto: ${maiorAcerto}`);
console.log(`Menor Acerto: ${menorAcerto}`);
console.log(`Total de Alunos: ${totalAlunos}`);
console.log(`Média da Turma: ${media.toFixed(2)}`);


