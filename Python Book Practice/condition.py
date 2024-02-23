a = 1
b = 2 

print('\nVariable a is:','One' if(a==1) else 'Not one')
print('Varibale a is even:','Even' if(a%2==0) else'Odd')
print('Variable b is:','Two' if (b==2) else 'Not two')
print('Variable b is even:','Even' if(b%2==0) else 'Odd')


print('a=',a,'b=',b,'These values are the same?:','Yes, same value' if (a==b) else 'No, they are different')

max = a if(a>2) else b

print('The max is',max)

bucksCoach = 'Doc Rivers'
team = 'Bucks'

city = input('What city are you from?:')

print('The',city.capitalize(),team,'have the',bucksCoach,'as their head coach.') if True else 'No info provided'

def cityTeamCoach(city,team,bucksCoach):
    for i in range(3):
        print('The',city.capitalize(),team,'have the',bucksCoach,'as their head coach.') if True else 'No info provided'

cityTeamCoach('houston','Rockets','Ime Udoka')