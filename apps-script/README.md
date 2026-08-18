<div align="center">

# apps-script/

<img src="https://img.shields.io/badge/Google_Apps_Script-000000?style=for-the-badge&logo=googleappsscript&logoColor=a855f7&labelColor=0d0d14"/>
<img src="https://img.shields.io/badge/Google_Sheets-000000?style=for-the-badge&logo=googlesheets&logoColor=a855f7&labelColor=0d0d14"/>
<img src="https://img.shields.io/badge/Gmail-000000?style=for-the-badge&logo=gmail&logoColor=a855f7&labelColor=0d0d14"/>

</div>

## Sobre

Sistema de notificação automática de notas via Google Apps Script. Lê os dados de uma planilha do Google Sheets e envia um e-mail personalizado para cada aluno com a nota e a situação (Aprovado / Reprovado / Recuperação).

> **Atenção:** este código roda dentro do editor do Google Apps Script, vinculado a uma planilha do Google Sheets — não é um script Node.js comum. Ele está aqui como referência de portfólio; ajuste e teste antes de usar em produção.

## Arquivo

| Arquivo | Descrição |
| --- | --- |
| `notificacao-notas.gs` | Contém duas funções principais (`enviarEmails` e `aoEditar`) e uma função auxiliar (`verificarStatus`) |

## Como funciona

**`enviarEmails()`**
Percorre todas as linhas da planilha de uma vez e envia um e-mail para cada aluno. Útil para disparar tudo em lote, manualmente.

**`aoEditar(e)`**
Roda automaticamente sempre que alguém edita a planilha. Verifica se a linha editada está completa e se o e-mail ainda não foi enviado (marca "✅ Enviado" na coluna de confirmação) antes de disparar o envio.

**`verificarStatus(nota)`**
Função auxiliar que recebe a nota e devolve a situação do aluno:
- `nota >= 7` → Aprovado
- `nota <= 3` → Reprovado
- qualquer nota entre 4 e 6 → Recuperação

## Estrutura da planilha esperada

| Coluna | Conteúdo |
| --- | --- |
| A | Nome |
| B | Email |
| C | Nota |
| D | Confirmação de envio (preenchida automaticamente pelo script) |

## Como usar

1. Crie uma planilha no Google Sheets com as colunas acima (Nome, Email, Nota).
2. Abra **Extensões > Apps Script**.
3. Cole o conteúdo de `notificacao-notas.gs` no editor.
4. Ajuste o nome da aba em `getSheetByName("Página1")` para o nome real da sua aba.
5. Salve o projeto (ícone de disquete ou `Ctrl+S`).
6. Para o envio automático ao editar (`aoEditar`), configure um acionador: ícone de relógio (Acionadores) > **+ Adicionar acionador** > função `aoEditar` > evento "Ao editar".
7. Na primeira execução, o Google vai pedir autorização para acessar Gmail e a planilha — autorize.

## Contato

<div align="left">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=a855f7&labelColor=0d0d14)](https://www.linkedin.com/in/eduardo-machado-495128346/?skipRedirect=true)
[![Email](https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=gmail&logoColor=a855f7&labelColor=0d0d14)](mailto:eduardoemanul44@gmail.com)

</div>
