def most_frequent_item_count(collection):
    fre = 0
    for i in collection:
        num = 0
        for j in collection:
            if(j == i):
                num = num + 1
        if(fre < num):
            fre = num
    return fre

def xo(s):
    xs = 0
    os = 0
    for i in s:
        if(i == 'o' or i == 'O'):
            xs = xs + 1
        
        elif(i == 'x'or i == 'X'):
            os = os + 1
    if(xs == os):
        return True
    
    else:
        return False
            
        