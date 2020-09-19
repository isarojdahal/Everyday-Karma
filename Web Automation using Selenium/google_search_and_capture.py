from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome(
    executable_path="/home/sdsys/.wdm/drivers/chromedriver/linux64/84.0.4147.30/chromedriver")

driver.get("https://google.com")

input_field = driver.find_element_by_xpath(
    '//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input')

input_field.send_keys("president of Nepal")

input_field.send_keys(Keys.ENTER)

driver.get_screenshot_as_file("capture.png")
