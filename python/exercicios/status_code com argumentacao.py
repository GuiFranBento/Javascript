import requests
import sys

status_on = [200, 403, 404, 302, 301]
site = str(sys.argv[1])

if "." not in site:
  print("Dominio invalido")
    # site = f"{site}.com
if "https://" not in site:
  print("tem que por https://") 
  #ou senão formata : site = f"https://{site}" e tira a mensagem

else:
  r = requests.get(site)
  if r.status_code in status_on:
    print("site online")
    print(r.status_code)
  else: 
    print("site offline")
    print(r.status_code)

#python main.py