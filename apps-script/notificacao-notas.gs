function enviarEmails() {
   // Pega a planilha ativa e uma aba específica pelo nome
  // SpreadsheetApp é a classe do Google Sheets no Apps Script

  
  let aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Página1");

      // getDataRange() pega TODAS as células com dados
     // getValues() converte para uma matriz (array de arrays)
    // Exemplo: [["Nome", "Email", "Nota"], ["João", "joao@email.com", 8], ...]

  let dados = aba.getDataRange().getValues();

     // O loop começa em i = 1 porque a linha 0 (índice 0) é o CABEÇALHO
    // dados.length = número total de linhas com dados

  for (let i = 1; i < dados.length; i++) {
    let nome  = dados[i][0];
    let email = dados[i][1];
    let nota  = dados[i][2];

       // Chama a função verificarStatus() passando a nota como argumento
       // O resultado (Aprovado/Recuperação/Reprovado) é armazenado em 'status'

    let status = verificarStatus(nota);

         // Constrói a mensagem personalizada usando concatenação (+)

    let mensagem = 'Olá, ' + nome + '! Nota: ' + nota + '. Situação: ' + status;

         // GmailApp é a classe que permite enviar e-mails
        // sendEmail(destinatário, assunto, corpo da mensagem)

    GmailApp.sendEmail(email, 'Resultado da Avaliação', mensagem);
  }
}

/**
 * FUNÇÃO AUTOMÁTICA - Executa quando a planilha é editada
 * 
 * IMPORTANTE: Esta função SÓ funciona se você configurar um ACIONADOR
 * (Extensões > Apps Script > ícone de relógio > + Adicionar acionador)
 * 
 * Parâmetro 'e' = objeto com informações sobre a edição que ocorreu
 * - e.source = a planilha que foi editada
 * - e.range = a célula que foi editada
 */



function aoEditar(e) {

     // Obtém a planilha que foi editada

  let aba   = e.source.getActiveSheet();

// getRow() retorna o número da linha que foi editada (ex: 5)

  let linha = e.range.getRow();

// Se a linha editada for a linha 1 (cabeçalho), o script para aqui
  // Isso evita que o script tente enviar e-mail para "Nome", "Email", etc.

  if (linha === 1) return;   // ignora o cabeçalho

     // getRange(linha, ____) - pega o valor de uma célula específica
     // linha e coluna
  let nome  = aba.getRange(linha, 1).getValue(); //Coluna A
  let email = aba.getRange(linha, 2).getValue(); //Coluna B
  let nota  = aba.getRange(linha, 3).getValue(); //Coluna C

    // Verifica se algum campo está vazio
    // Se estiver, o script para aqui (return) e não envia e-mail
    // Isso garante que só enviamos quando a linha está completa

  if (nome === '' || email === '' || nota === '') return;

    // Verifica se o e-mail já foi enviado para esta linha
    // getRange(linha, 4) = Coluna D (coluna de confirmação)

  let confirmacao = aba.getRange(linha, 4).getValue();
     // Se já tiver "✅ Enviado" na coluna D, o script para aqui
    // Isso evita enviar e-mails duplicados se a linha for editada novamente

  if (confirmacao === '✅ Enviado') return;

     // Chama a função que verifica a situação do aluno

  let status   = verificarStatus(nota);

     // Monta a mensagem personalizada

  let mensagem = 'Olá, ' + nome + '! Nota: ' + nota + '. Situação: ' + status;
	
     // Envia o e-mail

  GmailApp.sendEmail(email, 'Resultado da Avaliação', mensagem);
  
   // Marca na coluna D que o e-mail foi enviado
  // setValue() escreve na célula da planilha

  aba.getRange(linha, 4).setValue('✅ Enviado');
}




function verificarStatus(nota) {
  if (nota >= 7) return 'Aprovado';
  else if (nota <= 3) return 'Reprovado';
  return 'Recuperação';
}
