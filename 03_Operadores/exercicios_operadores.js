// =========================================================================
// SENAC CENTRO - PROGRAMADOR DE SISTEMAS
// EXERCÍCIOS - AULA 03: OPERADORES RELACIONAIS E LÓGICOS
// =========================================================================
// COLINHA DE REFERÊNCIA RÁPIDA (CHEAT SHEET)
// -------------------------------------------------------------------------
// 
// 1. INSTALAR A BIBLIOTECA DE ENTRADA (Uma vez no terminal da pasta):
//    npm install prompt-sync
//
// 2. IMPORTAR E INICIALIZAR NO INÍCIO DO ARQUIVO:
//    const prompt = require('prompt-sync')();
//
// 3. LER TEXTOS (String) DO TERMINAL:
//    let nome = prompt("Digite o nome: ");
//
// 4. LER NÚMEROS (Number) DO TERMINAL (Requer conversão!):
//    let idade = Number(prompt("Digite a idade: "));
//
// 5. OPERADORES RELACIONAIS (Retornam true ou false):
//    >  (Maior que)      |  <  (Menor que)
//    >= (Maior ou igual) |  <= (Menor ou igual)
//    === (Igual estrito - compara VALOR e TIPO)
//    !== (Diferente estrito - compara VALOR e TIPO)
//
// 6. OPERADORES LÓGICOS (Combinar condições):
//    && (AND / E)   -> Todas as condições devem ser verdadeiras (true)
//    || (OR / OU)   -> Pelo menos uma condição deve ser verdadeira (true)
//    !  (NOT / NÃO) -> Inverte o valor lógico (!true vira false, !false vira true)
// 
// 7. DICA DE CONFIGURAÇÃO DO VS CODE (Botão de Play / Code Runner):
//    Se o botão de Play der erro ou não deixar você digitar dados (aba Output):
//    A) Abra as Configurações com "Ctrl + ," (vírgula).
//    B) Pesquise por "Run In Terminal".
//    C) Marque a opção "Code-runner: Run In Terminal".
//    D) Agora, ao rodar pelo botão de play, ele executará diretamente no terminal interativo!
//
// =========================================================================

const prompt = require('prompt-sync')();

// ------------------------------------------
// EXERCÍCIO 1: Operadores Relacionais (Estoque)
// ------------------------------------------
// Instruções:
// A) Peça para o usuário digitar o "estoqueAtual" (número) via terminal.
// B) Peça para o usuário digitar o "estoqueMinimo" (número) via terminal.
// C) Crie uma variável booleana "precisaRepor" que será true se o estoque atual 
// for menor ou igual ao estoque mínimo.
// D) Imprima a mensagem explicativa: "O estoque precisa de reposição? [true/false]"

console.log("--- EXERCÍCIO 1: ESTOQUE ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 2: Operador Lógico AND (Validação de Login)
// ------------------------------------------
// Instruções:
// Crie duas constantes para o sistema: "usuarioSalvo" com valor "admin"
// e "senhaSalva" com valor "senac123".
// A) Peça para o usuário digitar o "usuarioDigitado" (string) via terminal.
// B) Peça para o usuário digitar a "senhaDigitada" (string) via terminal.
// C) Crie uma variável "loginSucesso" que deve ser true apenas se o usuário digitado 
// for igual ao salvo E a senha digitada for igual à salva.
// D) Imprima: "Login efetuado com sucesso? [true/false]"

console.log("\n--- EXERCÍCIO 2: LOGIN ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 3: Operador Lógico OR (Frete Grátis)
// ------------------------------------------
// Instruções:
// A) Peça para o usuário digitar o "valorCompra" (number) via terminal.
// B) Peça para o usuário responder se é VIP com "s" ou "n" e guarde em "respostaVip" (string).
// C) Defina a variável booleana "isClienteVip" avaliando se a resposta do usuário foi "s" ou "S".
// D) O cliente ganha frete grátis se o valor da compra for maior ou igual a R$ 150 
// OU se ele for um cliente VIP.
// E) Crie a variável booleana "ganhouFrete" e exiba o resultado no console.

console.log("\n--- EXERCÍCIO 3: FRETE GRÁTIS ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 4: Misturando Tudo (Aprovação de Crédito)
// ------------------------------------------
// Instruções:
// Regras de negócio de um banco para pré-aprovação de empréstimo:
// O cliente deve:
// 1. Ter idade maior ou igual a 18 anos.
// 2. Ter renda mensal maior que R$ 3.000.
// 3. NÃO ter restrição no CPF (ou seja, temRestricaoCPF deve ser false).
//
// A) Peça para o usuário digitar "idade" (number), "renda" (number) e responder se "temRestricaoCPF" (s/n).
// B) Converta as respostas para tipos apropriados (idade e renda como Number, restrição como Boolean).
// C) Monte a expressão lógica combinando os operadores relacionais e lógicos, 
// armazene em "creditoAprovado" e exiba no console de forma bonita.

console.log("\n--- EXERCÍCIO 4: CRÉDITO BANCÁRIO ---");
// Escreva seu código abaixo:
