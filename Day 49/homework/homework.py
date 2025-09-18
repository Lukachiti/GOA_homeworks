def print_positions(rows, cols):
    for row in range(1, rows + 1):
        for col in range(1, cols + 1):
            print(f"row: {row}, col: {col}")
print_positions(4, 3)


def multipli_table():
    table = [[(i+1) * (j+1) for j in range(10)] for i in range(10)]
    return table

table = multipli_table()
for row in table:
    print(row)


def print_greater_pairs(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if j > i:
                print(f"({i}, {j})")

print_greater_pairs(3)


    




















      



