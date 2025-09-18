def xor(a,b):
    if(a and b == False or a == False and b):
        return True

    else:
        return False
    

def nth_even(n):
    return n * 2 - 2



def combat(health, damage):
    if(health - damage < 0):
        return 0
    else:
        return health - damage
    

def get_real_floor(n):
    if(n > 13):
        return n - 2
    elif(n == 0):
        return 0
    else:
        return n - 1
    
    