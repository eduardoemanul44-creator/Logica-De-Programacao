function enviarEmails() {
  let aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Página1");
  let dados = aba.getDataRange().getValues();

  for (let i = 1; i < dados.length; i++) {
    let nome  = dados[i][0];
    let email = dados[i][1];
    let nota  = dados[i][2];

    let status = verificarStatus(nota);

    let mensagem = 'Olá, ' + nome + '! Nota: ' + nota + '. Situação: ' + status;

    GmailApp.sendEmail(email, 'Resultado da Avaliação', mensagem);
  }
}

function aoEditar(e) {
  let aba   = e.source.getActiveSheet();
  let linha = e.range.getRow();

  if (linha === 1) return;

  let nome  = aba.getRange(linha, 1).getValue();
  let email = aba.getRange(linha, 2).getValue();
  let nota  = aba.getRange(linha, 3).getValue();

  if (nome === '' || email === '' || nota === '') return;

  let confirmacao = aba.getRange(linha, 4).getValue();

  if (confirmacao === '✅ Enviado') return;

  let status   = verificarStatus(nota);

  let mensagem = 'Olá, ' + nome + '! Nota: ' + nota + '. Situação: ' + status;

  GmailApp.sendEmail(email, 'Resultado da Avaliação', mensagem);

  aba.getRange(linha, 4).setValue('✅ Enviado');
}

function verificarStatus(nota) {
  if (nota >= 7) return 'Aprovado';
  else if (nota <= 3) return 'Reprovado';
  return 'Recuperação';
}
