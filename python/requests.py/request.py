import requests

url = 'https://sociotorcedor.com.br/'
lista = ["admin", "login", "css", "sport", "css"]


for i in lista:
  sub_to_check = f"https://{i}.{url}"
  r = requests.get(sub_to_check)
  if r.status_code == 200:
    print(sub_to_check)
    print(r.status_code)
    print("############")

  else:
    print("nao e 200")
    continue

    