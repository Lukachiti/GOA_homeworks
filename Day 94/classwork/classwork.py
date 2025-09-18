arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

arr2 = list(filter(lambda x : x % 12 == 0, arr))


def count_red_beads(n):
    if(n < 2):
        return 0

    return (n - 1) * 2

def small_enough(array, limit):
    for i in array:
        if(limit < i and i != limit):
            return False
    return True