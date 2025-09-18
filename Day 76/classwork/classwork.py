def rental_car_cost(d):
    d2 = d * 40
    if(d >= 3 and d < 7):
        return d2 - 20
    elif(d >= 7):
        return d2 - 50
    else:
        return d2