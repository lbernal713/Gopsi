from playwright.sync_api import sync_playwright
import os

curr_dir = os.path.dirname(os.path.abspath(__file__)) 
os.chdir(curr_dir)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://sports.yahoo.com/nba/stats/individual/?sortStatId=POINTS_PER_GAME&selectedTable=0",timeout=60000)
    

    page.screenshot(path="sc.jpg",full_page=True)

    content = page.content()

    with open("content.html","w", encoding="utf-8") as f:
        f.write(content)

    browser.close()

# response = requests.get("https://sports.yahoo.com/nba/stats/individual/?sortStatId=POINTS_PER_GAME&selectedTable=0") #https://www.nba.com/stats/players/traditional?PerMode=PerGame&dir=-1&sort=PTS
# with open("yahooNbaPpg.html", "w", encoding="utf-8") as f:
    #f.write(response.text)