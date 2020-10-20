from bs4 import BeautifulSoup
import requests

contents = requests.get(
    "https://geographyfieldwork.com/WorldCapitalCities.htm").content

soup = BeautifulSoup(contents, "lxml")

table = soup.find('table', class_="sortable", id="anyid")

for row in table.find_all('tr'):
    if row.td != None:
        data = row.find_all('td')
        for d in data:
            print(d.text)
        print("\n\n")
