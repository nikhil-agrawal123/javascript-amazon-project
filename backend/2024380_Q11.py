def side_view(x): #finally spacing ki galti sahi kar di :)
    for i in range(1,x+1):
        print(" "*(2*(x-i))+"*"*(4*i-3))	
        print()

def top_view(x):
    print("*"*(4*x-3))

top_view(5)