"""
Exercícios de Lógica de Programação
------------------------------------
Coleção de 10 exercícios curtos cobrindo os fundamentos de lógica:
condicionais, loops (for/while), operadores e um algoritmo clássico
de verificação de número primo.
"""

# Questão 1 - Par ou ímpar
numero = int(input("Digite um número: "))
if numero % 2 == 0:
    print("Seu número é par")
else:
    print("Seu número é ímpar")


# Questão 2 - Média de duas notas com aprovação/reprovação
nota1 = int(input("Diga uma nota: "))
nota2 = int(input("Diga outra nota: "))
media = (nota1 + nota2) / 2

if media >= 6:
    print("Você foi aprovado e sua média foi:", media)
else:
    print("Você foi reprovado e sua média foi:", media)


# Questão 3 - Qual número é maior
numero_a = int(input("Digite um número: "))
numero_b = int(input("Digite outro número: "))

if numero_a > numero_b:
    print("O primeiro número é maior")
else:
    print("O segundo número é maior")


# Questão 4 - Positivo, negativo ou zero
numero_sinal = int(input("Digite um número para ver se é positivo, negativo ou zero: "))

if numero_sinal > 0:
    print("Seu número é positivo")
elif numero_sinal < 0:
    print("Seu número é negativo")
else:
    print("Seu número é zero")


# Questão 5 - Contagem de 1 a 10
for i in range(1, 11):
    print(i)


# Questão 6 - Tabuada
numero_tabuada = int(input("Digite o número para ver sua tabuada: "))
for i in range(1, 11):
    print(numero_tabuada * i)


# Questão 7 - Soma de números digitados até informar 0
soma = 0
numero_soma = int(input("Digite um número (0 para parar): "))
while numero_soma != 0:
    soma += numero_soma
    numero_soma = int(input("Digite um número (0 para parar): "))
print("Soma total:", soma)


# Questão 8 - Calculadora simples
valor_a = int(input("Me diga um número: "))
valor_b = int(input("Me diga outro número: "))
operacao = input("Me diga sua operação (+, -, *, /, %): ")

if operacao == "+":
    resultado = valor_a + valor_b
elif operacao == "-":
    resultado = valor_a - valor_b
elif operacao == "*":
    resultado = valor_a * valor_b
elif operacao == "/":
    resultado = valor_a / valor_b if valor_b != 0 else "Não é possível dividir por zero!"
elif operacao == "%":
    resultado = valor_a % valor_b
else:
    resultado = "Operação inválida!"

print("Seu resultado foi:", resultado)


# Questão 9 - Verificação de senha em loop
senha_correta = 12182009
senha_digitada = int(input("Digite a senha: "))
while senha_digitada != senha_correta:
    print("Você errou a senha")
    senha_digitada = int(input("Digite a senha: "))
print("Senha correta!")


# Questão 10 - Verificação de número primo
numero_primo = int(input("Digite um número: "))

if numero_primo <= 1:
    print("Não é primo")
else:
    eh_primo = True
    for i in range(2, numero_primo):
        if numero_primo % i == 0:
            eh_primo = False
            break
    print("É primo" if eh_primo else "Não é primo")
