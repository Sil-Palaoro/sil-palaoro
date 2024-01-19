from random import randint

numero_secreto = randint(1, 100)
intentos = 0
estimado = 0
nombre = input("Dime tu nombre: \n")

print(f"Bueno, {nombre}, he pensado un número entre 1 y 100,"
      f" y  tienes solo 8 intentos para adivinar cuál crees que es el número")


while intentos < 8:
    estimado = int(input("Decime un número: \n"))
    intentos += 1

    if estimado < numero_secreto:
        print("Mi número es más alto")
    elif estimado > numero_secreto:
        print("Mi número es más bajo")
    else:
        print("Felicitaciones! Adivinaste el número secreto.")
        break

if estimado != numero_secreto:
    print(f"Lo siento. No has adivinado el número a tiempo. El número era {numero_secreto}")

