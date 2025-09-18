def capitalize(s, ind):
    arr = []
    res = ""
    for i in s:
        arr.append(i)
    for k in range(len(arr)):
        if(k in ind):
                res = res + arr[k].capitalize()
        else:
                res = res + arr[k]


    return res

def cube_odd(arr):
    sum = 0
    for i in arr:
        if(type(i) != int and (i * i * i) % 2 == 0):
            return None
        elif((i * i * i) % 2 == 1):
            sum = sum + i * i * i

    return sum