def solution(text, ending):
    ln = len(ending)
    ln2 = len(text)
    sth = text[ln2-ln:ln2]
    if(ending == sth):
        return True
    else:
        return False


def cat_mouse(x):
    if((len(x) - 2) == 3 or (len(x) - 2) <= 3):
        return "Caught!"
    else:
        return "Escaped!"
    
def even_numbers(arr,n):
    arr2 = []
    for i in range(len(arr), 0, 1):
        if(len(arr2) == n):
            return arr2
        elif(arr[i] % 2 == 0):
            arr2.append(arr[i])
    return arr2