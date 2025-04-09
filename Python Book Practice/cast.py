import requests

response = requests.get("https://edition.cnn.com/business")

with open("content.html", "w") as f:
    f.write(response.text)
    