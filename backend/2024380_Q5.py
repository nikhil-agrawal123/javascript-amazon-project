def demand(x):
    return 10 - 1.05*x

def supply(x):
    return 1 + 1.06*x

def main(x):
    price = x
    i = 1
    while i<100:
        if int(demand(price)) ==  int(supply(price)):
            return int(price), int(demand(price)), int(supply(price))
        else:
            price *= 1.05	
            i +=1
    return "No such price exists"

        
        
print(main(int(input())))
