def numeros_perfu():
    for n in range(1,10000):
        yield f"P - {n}"


def numeros_farm():
    for n in range(1,10000):
        yield f"F - {n}"


def numeros_cosm():
    for n in range(1,10000):
        yield f"C - {n}"


p = numeros_perfu()
f = numeros_farm()
c = numeros_cosm()

def decorador(rubro):
    print("\n" + "*"*23)
    print("Su número es: ")
    if rubro == "P":
        print(next(p))
    elif rubro == "F":
        print(next(f))
    else:
        print(next(c))

    print("Aguarde y será atendido")
    print("\n" + "*"*23)
