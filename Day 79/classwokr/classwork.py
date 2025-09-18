def is_flush(cards):
    for i in cards:
        sth = i.split('')
        l = i[1]
        if(sth[1] != l):
            return False
    return True