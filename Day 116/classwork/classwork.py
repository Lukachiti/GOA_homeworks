
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