def func():
    pas = "12345678"
    pasusr = input("input here:")
    if (pasusr == pas):
        return True
    else:
        func()

func()
    
        