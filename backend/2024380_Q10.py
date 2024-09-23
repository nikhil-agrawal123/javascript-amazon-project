def leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False
#leap year calculation formula taken from copilot

def month_number(month):
    if month == 'january':
        return 1
    elif month == 'feburary':
        return 2
    elif month == 'march':
        return 3
    elif month == 'april':
        return 4
    elif month == 'may':
        return 5
    elif month == 'june':
        return 6
    elif month == 'july':
        return 7
    elif month == 'august':
        return 8
    elif month == 'september':
        return 9
    elif month == 'october':
        return 10
    elif month == 'november':
        return 11
    else:
        return 12

def month_day(month, year):
    if month == 'january' or month == 'march' or month == 'may' or month=='july' or month=='august' or month =='october' or month=='december':
        return 31
    elif month == 'april' or month == 'june' or month == 'september' or month == 'november':
        return 30
    else:
        if leap_year(year):
            return 29
        else:
            return 28

def day_of_week(day, month, year):
    if year < 0:
        year = (year)*(-1) - 1

    if month < 3:
        month += 12
        year -= 1
    return (day + 13 * (month + 1) // 5 + year % 100 + (year % 100) // 4 + year // 400 - 2 * (year // 100)) % 7
#direct formula of calculation taken from wikipedia

def print_calendar(month, year):
    print('Mon Tue Wed Thu Fri Sat Sun')

    start = day_of_week(1, month, year)
    start = (start + 5) % 7

    print('    ' * start, end='')

    for day in range(1, month_day(month, year) + 1):
        print(f'{day:3}', end=' ')
        if (day + start) % 7 == 0:
            print()
    print()

def display_again(x,y):
    while True:
        a = input('Next/Precvious/exit ')
        if a == 'Next':
            if x == 12:
                return print_calendar(x+1,y+1)
            else:
                return print_calendar(x+1,y)
        elif a == 'Previous':
            if x == 1:
                return print_calendar(x-1,y-1)
            else:
                return print_calendar(x-1,y)
        else:
            break
input_month = input('enter month ')
input_year = int(input('enter year (for bc input negativce year) '))

print_calendar(month_number(input_month), input_year)

display_again(month_number(input_month), input_year)    