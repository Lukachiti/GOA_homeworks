def matrixfy(st):
    arr = []
    if(st == ''):
        return "name must be at least one letter"
    elif(len(st) == 1):
        return [[st]]


    elif(len(st) < 4 and len(st) > 1):
        for i in range(4):
            if(len(st) <= i):
                arr.append(".")

            else:
                arr.append(st[i])
    elif(len(st) > 4):
        for i in range(9):
            if(len(st) <= i):
                arr.append(".")

            else:
                arr.append(st[i])
    return arr