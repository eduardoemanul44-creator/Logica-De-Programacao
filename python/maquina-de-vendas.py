"""
Máquina de Vendas (simulação em CLI)
-------------------------------------
Simula uma máquina de vendas automática: mostra o catálogo de produtos,
processa a compra, aplica desconto por faixa de valor e calcula troco
ou valida senha do cartão.

Conceitos praticados: dicionários aninhados, loops (while/for),
condicionais encadeadas e validação de entrada do usuário.
"""

produtos = {
    "Chocolate": {"valor": 6, "estoque": 98},
    "Refri": {"valor": 5, "estoque": 67},
    "Salgadinho": {"valor": 15, "estoque": 67},
    "Bolacha": {"valor": 8, "estoque": 67},
    "Agua": {"valor": 1, "estoque": 337},
    "Suco": {"valor": 7, "estoque": 57},
    "Cerveja": {"valor": 2, "estoque": 47},
    "Achocolatado": {"valor": 4, "estoque": 77},
    "Barrinha": {"valor": 3, "estoque": 87},
    "Energetico": {"valor": 11, "estoque": 57},
}

while True:
    # Mostra o catálogo completo a cada rodada
    for nome, info in produtos.items():
        print(nome)
        print(info["valor"])
        print(info["estoque"])

    escolha = input("Bom dia! Qual produto você gostaria hoje? ")

    if escolha in produtos:
        produto_escolhido = produtos[escolha]
    else:
        print("Produto não encontrado")
        continue

    quantidade = int(input("Quantos você gostaria? "))

    # Valida estoque antes de qualquer cálculo (isso evita o bug original,
    # em que "total" podia não existir se o estoque fosse insuficiente)
    if quantidade > produto_escolhido["estoque"]:
        print("Solicitação maior que o estoque disponível")
        continue

    total = quantidade * produto_escolhido["valor"]
    produtos[escolha]["estoque"] -= quantidade

    # Regra de desconto por faixa de valor (corrigido: antes o código
    # multiplicava o total pelo percentual, o que ZERAVA quase todo o
    # valor da compra ao invés de aplicar o desconto sobre ele)
    if total >= 200:
        desconto = total * 0.20
        total -= desconto
        print("Parabéns, você obteve 20% de desconto!")
    elif total >= 100:
        desconto = total * 0.10
        total -= desconto
        print("Parabéns, você obteve 10% de desconto!")
    else:
        print("Sem desconto")

    print("O valor total da sua compra foi:", total)

    forma_pagamento = input("Qual seria sua forma de pagamento? (dinheiro/cartão) ")

    if forma_pagamento == "dinheiro":
        valor_pago = float(input("Quanto de dinheiro? "))
        if valor_pago >= total:
            print("Perfeito! Seu troco foi de:", valor_pago - total)
        else:
            print("Dinheiro insuficiente")

    elif forma_pagamento == "cartão":
        senha = input("Digite sua senha: ")
        if senha == "1234":
            print("Senha correta")
            print("COMPRA APROVADA!")
        else:
            print("Senha incorreta")
            print("COMPRA CANCELADA!")

    continuar = input("Deseja mais alguma coisa? (ou 'sair'): ")
    if continuar == "sair":
        break
