def similarity(a, b):
    arr1 = []
    arr2 = []
    for i in a:
        if(i in b):
            arr1.append(i)
        arr2.append(i)
    for i in b:
        if(i not in arr2):
            arr2.append(i)
            
    return len(arr1) / len(arr2)