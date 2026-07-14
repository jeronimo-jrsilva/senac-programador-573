// Definição da Classe Aluno (Orientação a Objetos)
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = parseFloat(nota);
    }

    obterStatus() {
        return this.nota >= 7 ? "Aprovado" : "Reprovado";
    }
}

// Captura dos elementos do HTML (DOM)
const inputNome = document.getElementById("nome");
const inputNota = document.getElementById("nota");
const botaoVerificar = document.getElementById("btnVerificar");
const textoResultado = document.getElementById("resultado");

// Escuta o evento de clique no botão
botaoVerificar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const notaTexto = inputNota.value;

    // Validação simples de campos vazios
    if (nome === "" || notaTexto === "") {
        textoResultado.textContent = "Erro: Preencha todos os campos.";
        textoResultado.className = ""; // Remove classes de cor
        return;
    }

    const nota = parseFloat(notaTexto);

    // Validação do intervalo de notas
    if (isNaN(nota) || nota < 0 || nota > 10) {
        textoResultado.textContent = "Erro: A nota deve ser entre 0 e 10.";
        textoResultado.className = "";
        return;
    }

    // Instancia o objeto usando a Classe Aluno
    const estudante = new Aluno(nome, nota);
    const status = estudante.obterStatus();

    // Atualiza a tela com o resultado e altera as classes CSS
    textoResultado.textContent = `${estudante.nome} está ${status} (Média: ${estudante.nota})`;
    
    if (status === "Aprovado") {
        textoResultado.className = "aprovado"; // Aplica cor verde do CSS
    } else {
        textoResultado.className = "reprovado"; // Aplica cor vermelha do CSS
    }
});
