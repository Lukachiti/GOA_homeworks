def funk(arr):
    arrr = []
    for i in arr:
        arr.remove(i)
        if (i not in arr):
            arrr.append(i)
    return arrr
print(funk([1, 3, 1, 3]))


        