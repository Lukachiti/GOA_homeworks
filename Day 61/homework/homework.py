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
