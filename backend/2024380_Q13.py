x,y=map(int,input().split())

def reverse(x,y):
    c = 0
    while x > 0:
        x = x//10
        c += 1

    remainder = x%(10**(c-y))
    quotiont = x//(10**(c-y))
    a = remainder*10**y + quotiont
    return a,c


def even_odd_sum(x,y):
    even_sum = 0
    odd_sum = 0
    
    z,y = reverse(x,y)
    for i in range(1,y+1):
        if i%2 == 0:
            even_sum += z%10
            z = z//10
        else:
            odd_sum += z%10
            z = z//10
    
    if odd_sum <= even_sum:
        return f'{x} is the lucky number'
    else:
        return f'{x-1} is the lucky number'
    
    



#print(even_odd_sum(x))

print(reverse(x,y))