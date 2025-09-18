def numm(arr):
    lens = []
    for i in arr:
        lens.append(len(i))
    
    return lens

print(numm([[1, 1, 1, 1], [1, 1, 1, 1]]))