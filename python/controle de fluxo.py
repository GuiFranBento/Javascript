def check_admin(username):
    admin = 'root@tdi'

    if username == admin:
     msg = "e admin"

    else:
     msg = "não e admin"   

    return msg

    print(check_admin("guilherme@tdi"))
    print(check_admin("root@tdi"))
    