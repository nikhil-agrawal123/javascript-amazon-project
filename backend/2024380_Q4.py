def total_populaton(x):
    return sum(x)

def max_population(x,rog): #rog is rate of growth
    max_population = 0
    rog = rog/100
    out = 0
    d = []
    while True:
        y =[]
        for i in range(len(x)):
            y.append(x[i]*(1 + (rog - 0.004*i)))
            out += 1
            rog -= 0.001
        x = y
        if total_populaton(y) > max_population:
            max_population = total_populaton(y)
            d = y
        else:
            break

    return out

def inputs(years,rog,popluation): #if specific population and other rog is required
    return max_population(popluation,rog - 0.1*years)

def test():
    assert max_population([50, 1450, 1400, 1700, 1500, 600, 1200],2.5) == 21
    assert total_populaton([50, 1450, 1400, 1700, 1500, 600, 1200]) == 7900


print(f'The current population is: {total_populaton([50, 1450, 1400, 1700, 1500, 600, 1200])}') 
print(f'The max population will be in the year: {inputs(int(input("Enter the number of years: ")),float(input("Enter the rate of growth: ")),list(map(int,input("Enter the population: ").split())))}')