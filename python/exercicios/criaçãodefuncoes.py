def adiciona_na_lista(o_ip, a_lista):
  a_lista.append(o_ip)

alvos2 = ["11.222.222.22"]
alvos = ["1.92.11.222"]
adiciona_na_lista("111.111.111.111", alvos)

print(alvos)

###################

def remover_lista(o_ip, a_lista):
  a_lista.remove(o_ip)

remover_lista("111.111.111.111", alvos)

print(alvos)

print("##########")

######################



def pegar_alvo(posicao, a_lista):
  return a_lista[posicao]


print(pegar_alvo(0, alvos))

adiciona_na_lista("199.222.222.222", alvos)
print(alvos)
print("########")

#########################

def soma_lista(lista_1, lista_2):
  return len(lista_1) + len(lista_2)


print(soma_lista(alvos, alvos2))

print("###########")

#########################

def junta_listas(lista1, lista2):
  return lista1 + lista2


print(junta_listas(alvos, alvos2))

print("###############")

############################
def contar_lista(valor, lista):
  return lista.count(valor)

  print(float(contar_lista("1.92.11.222", alvos)))


