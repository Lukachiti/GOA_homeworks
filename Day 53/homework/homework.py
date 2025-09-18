def count_area(circ, square, trian):
    
    if trian == 0 and square == 0:
        print(3.14 * circ)
    elif trian == 0 and square >= 0:
        print(circ * square)
    elif circ >= 0 and square >= 0 and trian >= 0:
        print((circ * circ + square * square + trian * trian) / 2)
    else:
        print("you are stupid")        


count_area(5, 5, 0)

          

