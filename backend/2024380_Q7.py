import math
z = int(input('enter a number to find from'))

def gcd(x,y):
    a = min(x,y)
    b = max(x,y)

    if a == 0 or b==0:
        return 'no such space found'
    else:
        while b%a != 0:
            a -= 1

        return a

def visible(x):
    out = 0
    for i in range(x):
        for j in range(x):
            if gcd(i,j) == 1:
                out +=1
    return out

def density(y):
    return visible(y)/(y*y)

def converge(x):
    i = 1
    while density(i)< (6/math.pi**2)*(x/100):
        i +=1
    return i

def test():
    assert gcd(0,0) == 'no such space found'
    assert gcd(0,5) == 'no such space found'
    assert density(1) == 0

test()

print(visible(z))
print(density(z))
print(converge(float(input('Enter a percentage to find from'))))