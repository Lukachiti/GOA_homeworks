def get_issuer(number):
    two = str(number)[0] + str(number)[1]
    if(len(str(number)) == 15 and (two == '34' or two == '37')):
        return "AMEX"
    elif(len(str(number)) == 16 and (str(number)[0] + str(number)[1] + str(number)[2] + str(number)[3] == '6011')):
         return "Discover"
    elif(len(str(number)) == 16 and (two == '51' or two == '52' or two == '53' or two == '54' or two == '55')):
         return "Mastercard"
    elif(str(number)[0] == "4" and (len(str(number)) == 13 or len(str(number)) == 16)):
         return "VISA"
    else:
         return 'Unknown'