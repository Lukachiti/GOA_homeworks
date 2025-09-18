def two_sum(numbers, target):
    arr = []
    for i in range(len(numbers)):
        for f in range(len(numbers)):
            if(numbers[i] + numbers[f] == target and i != f):
                arr.append(i)
                arr.append(f)
                return arr
    