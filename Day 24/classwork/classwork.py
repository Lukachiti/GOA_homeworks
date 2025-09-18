def odd(list):
    for i in len(list):
        if list[i] % 2 != 0:
            list.pop(i)
        print(list)
odd([1, 2, 3, 4, 5, 6])

        