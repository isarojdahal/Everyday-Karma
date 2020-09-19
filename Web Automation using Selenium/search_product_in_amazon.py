from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options


chrome_options = Options().add_argument("--headless")
driver = webdriver.Chrome(
    executable_path="/home/sdsys/.wdm/drivers/chromedriver/linux64/84.0.4147.30/chromedriver")

driver.maximize_window()
driver.get("https://amazon.com")


search_field = driver.find_element_by_id('twotabsearchtextbox')
search_field.send_keys("laptop")
search_field.send_keys(Keys.ENTER)


# 4 stars and up click
section = driver.find_element_by_tag_name('section')
if section.get_attribute("aria-label") == "4 Stars & Up":
    section.click()


product_name_list = driver.find_elements_by_css_selector('span.a-size-medium')

product_list_whole_price = driver.find_elements_by_css_selector(
    'span.a-price-whole')
product_list_fraction_price = driver.find_elements_by_css_selector(
    'span.a-price-fraction')

sn = 1
with open('product.txt', 'w') as file:
    for index, product in enumerate(product_name_list):
        file.write(str(sn)+". "+product.text+"\n Price : " +
                   product_list_whole_price[index].text+"."+product_list_fraction_price[index].text+"\n\n")
        sn = sn+1
