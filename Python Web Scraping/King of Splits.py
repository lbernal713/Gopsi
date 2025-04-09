import os

curr_dir = os.path.dirname(os.path.abspath(__file__)) 
os.chdir(curr_dir)

with open("content.html", encoding="utf-8") as f:
    content = f.read()

players = content.split('{"player":{"displayName":')[1:]

for player in players:
    with open("players.txt","a", encoding="utf-8") as txt:
        txt.write(player[:2000]+'\n')
