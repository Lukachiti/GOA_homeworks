def smallest_integer(matrix):
    arr = []
    for i in range(len(matrix)):
        for j in matrix[i]:
            arr.append(j)
    for k in range(len(arr) + 1):
        if(k not in arr):
            return k
