import requests

url = 'terra.com.br'
lista = ["admin", "login", "css", "sport", "css", "painel", "mail"]


for i in lista:
  sub_to_check = f"https://{i}.{url}"
  
  try:
   r = requests.get(sub_to_check)
   print("sucesso")
   print(sub_to_check)
   print("############")
  except:
    print(f"Não consegui {sub_to_check}")
    continue