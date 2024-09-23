import math

def demand(x):
    return math.exp(10 - 1.05*x)

def supply(x):
    return math.exp(1 + 1.06*x)

def main(x):
    price = x
    i = 1
    while i<50:
        if (demand(price)) - (supply(price)) <0.001  :
            return (price), (demand(price)), (supply(price))
        else:
            price += price*0.05	
            i +=1
    return "No such price exists"
        
print(main(float(input())))
