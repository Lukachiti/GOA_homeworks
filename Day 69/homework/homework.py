def domain_name(url):
    if("//" in url and "www" not in url):
        list = url.split("//")
        list2 = list[1].split(".")
        return list2[0]
    elif("www" in url and "//" not in url):
        list = url.split(".")
        return list[1]
    elif("www" in url and "//" in url):
        list = url.split(".")
        return list[1]
    else:
        list = url.split(".")
        return list[0]
        
        
    