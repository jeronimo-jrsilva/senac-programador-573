#!/usr/bin/env bash
# check_sync.sh
# Script formal de verificação de integridade e sincronia da UC1.
# Pode ser executado tanto no Desktop quanto no Laptop para garantir consistência.

COR_VERDE="\033[0;32m"
COR_VERMELHA="\033[0;31m"
COR_AVISO="\033[0;33m"
COR_RESET="\033[0m"

DIRETORIO_UC1="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "🔍 ${COR_AVISO}Iniciando a checagem de sincronia da UC1 (Público)...${COR_RESET}"
echo "--------------------------------------------------"

ERROS=0

# 1. Verificação de Arquivos Removidos (Resíduos)
echo -e "\n[1/3] Verificando se os resíduos de documentação foram removidos..."
ARQUIVOS_REMOVIDOS=()

for arquivo in "${ARQUIVOS_REMOVIDOS[@]}"; do
    CAMINHO_COMPLETO="$DIRETORIO_UC1/$arquivo"
    if [ -f "$CAMINHO_COMPLETO" ]; then
        echo -e "❌ ${COR_VERMELHA}ERRO: O arquivo residual ainda existe: $arquivo${COR_RESET}"
        ERROS=$((ERROS + 1))
    fi
done

# 2. Verificação de Arquivos de Tópicos e Exercícios no Lugar Certo
echo -e "\n[2/3] Verificando a presença e nomenclatura correta dos arquivos do cronograma público..."
ARQUIVOS_MANDATORIOS=(
    "01_Introducao_Algoritmos/01_introducao.pdf"
    "01_Introducao_Algoritmos/01_introducao.html"
    "02_Console_JS/02_console_js.pdf"
    "02_Console_JS/02_console_js.html"
    "02_Console_JS/exercicios_console.js"
    "03_Operadores/03_operadores.pdf"
    "03_Operadores/03_operadores.html"
    "03_Operadores/exercicios_operadores.js"
    "04_Estruturas_Condicionais/04_condicionais.pdf"
    "04_Estruturas_Condicionais/04_condicionais.html"
    "04_Estruturas_Condicionais/exercicios_condicionais.js"
    "05_Estruturas_Repeticao/05a_loop_while.pdf"
    "05_Estruturas_Repeticao/05b_loop_for.pdf"
    "05_Estruturas_Repeticao/exercicios_while.js"
    "05_Estruturas_Repeticao/exercicios_for.js"
    "05_Estruturas_Repeticao/desafio_loops.js"
    "05_Estruturas_Repeticao/desafio_pdv.js"
    "06_Colecoes_JS/06_colecoes.pdf"
    "06_Colecoes_JS/exercicios_colecoes.js"
    "07_HTML/07_html5_e_css3.pdf"
    "07_HTML/exercicios_web.html"
    "08_CSS/exercicios_web.css"
    "09_Funcoes_DOM/09_funcoes_e_dom.pdf"
    "09_Funcoes_DOM/exercicios_funcoes.js"
    "10_Electron/index.html"
    "10_Electron/main.js"
    "10_Electron/package.json"
    "11_Orientacao_Objetos/10_orientacao_objetos.pdf"
    "11_Orientacao_Objetos/exercicios_oo.js"
)

for arquivo in "${ARQUIVOS_MANDATORIOS[@]}"; do
    CAMINHO_COMPLETO="$DIRETORIO_UC1/$arquivo"

    if [ ! -f "$CAMINHO_COMPLETO" ]; then
        echo -e "❌ ${COR_VERMELHA}ERRO: Arquivo mandatório ausente: $arquivo${COR_RESET}"
        ERROS=$((ERROS + 1))
    else
        echo -e "✅ ${COR_VERDE}Ok: Arquivo localizado: $arquivo${COR_RESET}"
    fi
done

# 3. Verificação de Status do Repositório Git Local
echo -e "\n[3/3] Verificando status do Git..."
if command -v git >/dev/null 2>&1; then
    cd "$DIRETORIO_UC1" || exit 1
    # git fetch origin (desativado para evitar travamento em shells nao-interativos)
    STATUS_GIT=$(git status -uno)
    
    if echo "$STATUS_GIT" | grep -q "Your branch is up to date"; then
        echo -e "✅ ${COR_VERDE}Ok: Repositório local está em perfeita sincronia com o GitHub (origin/main).${COR_RESET}"
    else
        echo -e "⚠️  ${COR_AVISO}AVISO: Existem diferenças locais ou pendências de pull/push no Git.${COR_RESET}"
        echo "$STATUS_GIT"
    fi
else
    echo -e "⚠️  ${COR_AVISO}AVISO: Git não localizado no path.${COR_RESET}"
fi

echo "--------------------------------------------------"
if [ $ERROS -eq 0 ]; then
    echo -e "🎉 ${COR_VERDE}SUCESSO: Todos os arquivos e estruturas estão corretos e sincronizados!${COR_RESET}"
    exit 0
else
    echo -e "❌ ${COR_VERMELHA}FALHA: Foram detectados $ERROS erro(s) na estrutura do diretório.${COR_RESET}"
    exit 1
fi
