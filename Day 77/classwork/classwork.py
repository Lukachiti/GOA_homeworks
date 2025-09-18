def get_grade(s1, s2, s3):
    sum = (s1 + s2 + s3) / 3
    if(sum >= 90 and sum <= 100):
        return "A"
    elif(sum >= 80 and sum < 90):
        return "B"
    elif(sum >= 70 and sum < 80):
        return "C"
    elif(sum >= 60 and sum < 70):
        return "D"
    else:
        return "F"
    

def points(games):
    scor = 0
    for i in games:
        spl = i.split(":")
        if(spl[0] > spl[1]):
            scor = scor + 3
        elif(spl[0] < spl[1]):
            scor = scor + 0
        else:
            scor = scor + 1
    return scor