import requests
from bs4 import BeautifulSoup

file = open('blogs.txt', 'w')


def do_scrapping(soup):
    for article in soup.find_all('div', class_="media article"):
        heading = article.find('h2', class_="media-heading")
        # print(heading.text)
        file.write(heading.text)
        date = article.find('span', class_="date")
        # print(date.text)
        file.write("\n"+date.text+"\n")
        description = article.find('div', class_="content").a.p.text
        # print(description)
        file.write(description)
        # print("\n========================\n")
        file.write("\n========================\n")


page = 1

while page != 6:
    print(f"Scrapping PAGE {page} ....", end="\n\n\n")
    contents = requests.get(
        "https://economictimes.indiatimes.com/blogs/author/saroj-bhushan-chadha/page/"+str(page)+"/").content
    soup = BeautifulSoup(contents, "lxml")
    do_scrapping(soup)
    page = page + 1

file.close()
