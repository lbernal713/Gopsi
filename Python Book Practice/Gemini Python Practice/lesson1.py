import random

player1_points = 28
player2_points = 22

totalpoints = player1_points + player2_points

teams = ['Houston Rockets','Los Angeles Lakers','Boston Celtics']
for team in teams:
    print(team.upper())

random_team = random.choice(teams)
print(random_team)

# useryear = input('Year:')
# if (int(useryear)/4) and (int(useryear) % 100 != 0):
#     print(useryear)
# else:
#     print('Problem')

# Toss a coin 10 times - count how many times lands on each
def coin_toss10():
    heads_count = 0
    tails_count = 0
    for i in range(10):
        coin_toss_rand = random.randint(1,2)
        if coin_toss_rand == 1:
            print('Heads')
            heads_count = heads_count + 1
        else:
            print('Tails')
            tails_count = tails_count + 1
    print('Heads count:',str(heads_count),'\nTails count:',(str(tails_count)))
coin_toss10()

def guess_game():
    random_num = random.randint(1,100)
    num_of_guess = 0
    user_num = input('Enter your guess between 1 and 100: ')
    while(int(user_num) != random_num):
        if(int(user_num) != random_num):
            print('Try again:')
            num_of_guess = num_of_guess + 1
        if(int(user_num) > random_num):
            print('You guessed too high. Try a lower number.')
            user_num = input('Enter your guess between 1 and 100: ')
        if(int(user_num) < random_num):
            print('You guessed too low. Try a higher number.')
            user_num = input('Enter your guess between 1 and 100: ')
    print('Bih you guessed it. The right answer was',random_num,'it took you',num_of_guess,'guesses.')

num_list = [2, 5, 10, 15, 20]
avg_list = sum(num_list) / len(num_list)
min_num = min(num_list)
max_num = max(num_list)
print(avg_list)
print(min_num)
print(max_num)

rand_int = random.randint(1,10)