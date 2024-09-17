def ones(n):
    if n == 1:
        return ("one")
    elif n == 2:
        return ("two")
    elif n == 3:
        return ("three")
    elif n == 4:
        return ("four")
    elif n == 5:
        return ("five")
    elif n == 6:
        return ("six")
    elif n == 7:
        return ("seven")
    elif n == 8:
        return ("eight")
    elif n == 9:
        return ("nine")

def tens(n):
    if n == 1:
        return ("ten")
    elif n == 2:
        return ("twenty")
    elif n == 3:
        return ("thirty")
    elif n == 4:
        return ("forty")
    elif n == 5:
        return ("fifty")
    elif n == 6:
        return ("sixty")
    elif n == 7:
        return ("seventy")
    elif n == 8:
        return ("eighty")
    elif n == 9:
        return ("ninety")
    
def hundreds(n):
    if n == 1:
        return ("one hundred")
    elif n == 2:
        return ("two hundred")
    elif n == 3:
        return ("three hundred")
    elif n == 4:
        return ("four hundred")
    elif n == 5:
        return ("five hundred")
    elif n == 6:
        return ("six hundred")
    elif n == 7:
        return ("seven hundred")
    elif n == 8:
        return ("eight hundred")
    elif n == 9:
        return ("nine hundred")

def thousands(n):
    if n == 1:
        return ("one thousand")
    elif n == 2:
        return ("two thousand")
    elif n == 3:
        return ("three thousand")
    elif n == 4:
        return ("four thousand")
    elif n == 5:
        return ("five thousand")
    elif n == 6:
        return ("six thousand")
    elif n == 7:
        return ("seven thousand")
    elif n == 8:
        return ("eight thousand")
    elif n == 9:
        return ("nine thousand")

"""
def ten_thousands(n):
    if n == 1:
        return ("ten thousand")
    elif n == 2:
        return ("twenty thousand")
    elif n == 3:
        return ("thirty thousand")
    elif n == 4:
        return ("forty thousand")
    elif n == 5:
        return ("fifty thousand")
    elif n == 6:
        return ("sixty thousand")
    elif n == 7:
        return ("seventy thousand")
    elif n == 8:
        return ("eighty thousand")
    elif n == 9:
        return ("ninety thousand")

def lakh(n):
    if n == 1:
        return ("one lakh")
    elif n == 2:
        return ("two lakh")
    elif n == 3:
        return ("three lakh")
    elif n == 4:
        return ("four lakh")
    elif n == 5:
        return ("five lakh")
    elif n == 6:
        return ("six lakh")
    elif n == 7:
        return ("seven lakh")
    elif n == 8:
        return ("eight lakh")
    elif n == 9:
        return ("nine lakh")

def ten_lakh(n):
    if n == 1:
        return ("ten lakh")
    elif n == 2:
        return ("twenty lakh")
    elif n == 3:
        return ("thirty lakh")
    elif n == 4:
        return ("forty lakh")
    elif n == 5:
        return ("fifty lakh")
    elif n == 6:
        return ("sixty lakh")
    elif n == 7:
        return ("seventy lakh")
    elif n == 8:
        return ("eighty lakh")
    elif n == 9:
        return ("ninety lakh")

def crore(n):
    if n == 1:
        return ("one crore")
    elif n == 2:
        return ("two crore")
    elif n == 3:
        return ("three crore")
    elif n == 4:
        return ("four crore")
    elif n == 5:
        return ("five crore")
    elif n == 6:
        return ("six crore")
    elif n == 7:
        return ("seven crore")
    elif n == 8:
        return ("eight crore")
    elif n == 9:
        return ("nine crore")

def ten_crore(n):
    if n == 1:
        return ("ten crore")
    elif n == 2:
        return ("twenty crore")
    elif n == 3:
        return ("thirty crore")
    elif n == 4:
        return ("forty crore")
    elif n == 5:
        return ("fifty crore")
    elif n == 6:
        return ("sixty crore")
    elif n == 7:
        return ("seventy crore")
    elif n == 8:
        return ("eighty crore")
    elif n == 9:
        return ("ninety crore")

def hundred_crore(n):
    if n == 1:
        return ("one hundred crore")
    elif n == 2:
        return ("two hundred crore")
    elif n == 3:
        return ("three hundred crore")
    elif n == 4:
        return ("four hundred crore")
    elif n == 5:
        return ("five hundred crore")
    elif n == 6:
        return ("six hundred crore")
    elif n == 7:
        return ("seven hundred crore")
    elif n == 8:
        return ("eight hundred crore")
    elif n == 9:
        return ("nine hundred crore")
"""
x = int(input())
x = str(x)
if len(x) == 1:
    print(ones(int(x)))

elif len(x) == 2:
    if int(x)>10 and int(x)<20:
        if x == 11:
            print("eleven")
        elif x == 12:
            print("twelve")
        elif x == 13:
            print("thirteen")
        elif x == 14:
            print("fourteen")
        elif x == 15:
            print("fifteen")
        elif x == 16:
            print("sixteen")
        elif x == 17:
            print("seventeen")
        elif x == 18:
            print("eighteen")
        elif x == 19:
            print("nineteen")
    print(tens(int(x[0])),ones(int(x[1])),end=' ')

elif len(x) == 3:
    if int(x[2]) == 0:
        print(hundreds(int(x[0])),tens(int(x[1])),end=' ')
    elif int(x[1]) == 0:
        print(hundreds(int(x[0])),ones(int(x[2])),end=' ')
    else:
        print(hundreds(int(x[0])),tens(int(x[1])),ones(int(x[2])),end=' ')

elif len(x) == 4:
    if int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0:
        print(thousands(int(x[0])),end=' ')
    elif int(x[1]) == 0 and int(x[2]) == 0:
        print(thousands(int(x[0])),ones(int(x[3])),end=' ')
    elif int(x[1]) == 0 and int(x[3]) == 0:
        print(thousands(int(x[0])),tens(int(x[1])),end=' ')
    elif int(x[1]) == 0:
        print(thousands(int(x[0])),tens(int(x[1])),ones(int(x[2])),end=' ')
    else:
        print(thousands(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')

"""
elif len(x) == 5:
    if int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0:
        print(ten_thousands(int(x[0])),end=' ')
    elif int(x[2]) == 0 and int(x[3]) == 0:
        print(ten_thousands(int(x[0])),ones(int(x[4])),end=' ')
    elif int(x[3]) == 0 and int(x[4]) == 0:
        print(ten_thousands(int(x[0])),tens(int(x[2])),end=' ')
    elif int(x[4]) == 0:
        print(ten_thousands(int(x[0])),tens(int(x[2])),ones(int(x[3])),end=' ')
    else:
        print(ten_thousands(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')

elif len(x) == 6:
    if int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0:
        print(lakh(int(x[0])),end=' ')
    elif int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0:
        print(lakh(int(x[0])),ones(int(x[5])),end=' ')
    elif int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0:
        print(lakh(int(x[0])),tens(int(x[1])),end=' ')
    elif int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0:
        print(lakh(int(x[0])),tens(int(x[1])),ones(int(x[2])),end=' ')
    elif int(x[4]) == 0 and int(x[5]) == 0:
        print(lakh(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),end=' ')
    elif int(x[5]) == 0:
        print(lakh(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')
    else:
        print(lakh(int(x[0])),thousands(int(x[1])),hundreds(int(x[2])),tens(int(x[3])),ones(int(x[4])),end=' ')

elif len(x) == 7:
    if int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0:
        print(ten_lakh(int(x[0])),end=' ')
    elif int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0:
        print(ten_lakh(int(x[0])),ones(int(x[6])),end=' ')
    elif int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0:
        print(ten_lakh(int(x[0])),tens(int(x[2])),end=' ')
    elif int(x[1]) == 0:
        print(ten_lakh(int(x[0])),ten_thousands(int(x[2])),thousands(int(x[3])),hundreds(int(x[4])),tens(int(x[5])),ones(int(x[6])),end=' ')
    elif int(x[4]) == 0 and int(x[5]) == 0:
        print(ten_lakh(int(x[0])),tens(int(x[2])),ones(int(x[3])),end=' ')
    elif int(x[5]) == 0:
        print(ten_lakh(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),end=' ')
    elif int(x[6]) == 0:
        print(ten_lakh(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')
    else:
        print(ten_lakh(int(x[0])),thousands(int(x[1])),hundreds(int(x[2])),tens(int(x[3])),ones(int(x[4])),end=' ')

elif len(x) == 8:
    if int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0:
        print(crore(int(x[0])),end=' ')
    elif int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0:
        print(crore(int(x[0])),ones(int(x[7])),end=' ')
    elif int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0:
        print(crore(int(x[0])),tens(int(x[1])),end=' ')
    elif int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0:
        print(crore(int(x[0])),tens(int(x[1])),ones(int(x[2])),end=' ')
    elif int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0:
        print(crore(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),end=' ')
    elif int(x[5]) == 0 and int(x[6]) == 0:
        print(crore(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')
    elif int(x[6]) == 0:
        print(crore(int(x[0])),lakh(int(x[1])),hundreds(int(x[2])),tens(int(x[3])),ones(int(x[4])),end=' ')
    else:
        print(crore(int(x[0])),ten_lakh(int(x[1])),thousands(int(x[2])),hundreds(int(x[3])),tens(int(x[4])),ones(int(x[5])),end=' ')

elif len(x) == 9:
    if int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(ten_crore(int(x[0])),end=' ')
    elif int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0:
        print(ten_crore(int(x[0])),ones(int(x[8])),end=' ')
    elif int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0:
        print(ten_crore(int(x[0])),tens(int(x[2])),end=' ')
    elif int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0:
        print(ten_crore(int(x[0])),tens(int(x[2])),ones(int(x[3])),end=' ')
    elif int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0:
        print(ten_crore(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),end=' ')
    elif int(x[6]) == 0 and int(x[7]) == 0:
        print(ten_crore(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')
    elif int(x[7]) == 0:
        print(ten_crore(int(x[0])),lakh(int(x[1])),hundreds(int(x[2])),tens(int(x[3])),ones(int(x[4])),end=' ')
    else:
        print(ten_crore(int(x[0])),ten_lakh(int(x[1])),thousands(int(x[2])),hundreds(int(x[3])),tens(int(x[4])),ones(int(x[5])),end=' ')

elif len(x) == 10:

    if int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0 and int(x[9]) == 0:
        print(hundred_crore(int(x[0])),end=' ')
    elif int(x[1]) == 0 and int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),ones(int(x[9])),end=' ')
    elif int(x[2]) == 0 and int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),tens(int(x[1])),end=' ')
    elif int(x[3]) == 0 and int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),tens(int(x[1])),ones(int(x[2])),end=' ')
    elif int(x[4]) == 0 and int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),end=' ')
    elif int(x[5]) == 0 and int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),hundreds(int(x[1])),tens(int(x[2])),ones(int(x[3])),end=' ')
    elif int(x[6]) == 0 and int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),lakh(int(x[1])),hundreds(int(x[2])),tens(int(x[3])),end=' ')
    elif int(x[7]) == 0 and int(x[8]) == 0:
        print(hundred_crore(int(x[0])),lakh(int(x[1])),hundreds(int(x[2])),tens(int(x[3])),ones(int(x[4])),end=' ')
    elif int(x[8]) == 0:
        print(hundred_crore(int(x[0])),lakh(int(x[1])),thousands(int(x[2])),hundreds(int(x[3])),tens(int(x[4])),end=' ')
    else:
        print(hundred_crore(int(x[0])),ten_lakh(int(x[1])),thousands(int(x[2])),hundreds(int(x[3])),tens(int(x[4])),ones(int(x[5])),end=' ')
"""