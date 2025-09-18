def funk(arr):
    arrr = []
    
    for i in arr:
        if (i not in arrr):
            arrr.append(i)
        else:
            arrr.remove(i)
            
    return arrr

print(funk([3, 3, 8, 9, 2, ]))



        