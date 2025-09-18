def solution(number):
    multiple_sum = 0
    for i in range(number):
        if (i % 3) == 0 or (i % 5) == 0:
            multiple_sum += i
    return multiple_sum