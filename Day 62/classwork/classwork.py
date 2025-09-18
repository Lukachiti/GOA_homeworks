def arrr(arr):
    help = 0
    for i in range(len(arr)):
        for j in range(0, len(arr)-1, 1):
            if (arr[j] > arr[j + 1]):
                help = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = help
    print(arr)

arrr([9, 8, 7, 6, 5])


def arrrr(arr, arr2):
    for i in arr:
        if (i in arr2):
            arr.remove(i)
            arr2.remove(i)

    print(arr, arr2)

arrrr([5, 6, 7, 8, 9, ], [6, 7, 8, 10])

def ar(abb, abb2):
    
    for i in abb:
        if i in abb2:
            abb.remove(i)

    return abb
    

    
