from bs4 import BeautifulSoup

with open('index.html') as file:
    contents = file.read()

    soup = BeautifulSoup(contents, "lxml")

    for link in soup.find_all('a'):
        print(link["href"])
