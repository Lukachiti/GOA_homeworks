def update_light(current):
    if(current == "green"):
        return "yellow"

    elif(current == "yellow"):
        return "red"

    else:
        return "green"
    

def set_alarm(employed, vacation):
    if(employed and vacation):
        return False
    if(employed and vacation == False):
        return True
    if(employed == False and vacation):
        return False
    else:
        return False