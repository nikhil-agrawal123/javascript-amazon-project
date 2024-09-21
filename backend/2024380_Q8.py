def dydx(x,y):
    return x+y

def output(x,y,h):
    y_init = 1

    while x<y:
        y_new = y_init + h*dydx(x,y_init)
        x = x+h
        y_init = y_new

    return (y_new)

print(output(0,int(input()),0.1))