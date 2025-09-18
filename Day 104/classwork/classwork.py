def solve(a,b):
    res = ''
    for i in a:
        if(i not in b):
            res = res + i
    for j in b:
        if(j not in a):
            res = res + j

    return res

def generate_link(user):
    idk = ''
    for i in user:
        if(i != ' '):
            idk = idk + i
        else:
            idk = idk + "%20"
    return 'http://www.codewars.com/users/' + idk

def swap_values(args): 
    num = args[0]
    args[0] = args[1]
    args[1] = num
    return args

def valid_card(card):
    kk = 0
    for i in range(len(card), 0, 1):
        if(i % 5 == 0 or i == 1):
            if(card[i] * 2 > 9):
                kk = kk + (card[i] * 2) - 9

    if(kk % 10 != 0):
        return False
    else:
        return True