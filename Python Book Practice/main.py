import requests as req

response = req.get('https://www.nba.com/standings')
html = response.text

print(html)

