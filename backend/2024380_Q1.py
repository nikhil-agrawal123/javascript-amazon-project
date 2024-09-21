import math

def velocity(x):
    return 2000*math.log(140000/(140000-2100*x))-9.8*x

def average_velocity(x1,x2):
    return (velocity(x1)+velocity(x2))/2

def displacement(x1,x2):
    distance = 0
    while x2>x1:
        distance += average_velocity(x1,x1+0.25)*(0.25)
        x1 += 0.25

    return distance

print(displacement(0,2.25))