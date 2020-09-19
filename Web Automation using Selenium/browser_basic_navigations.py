from selenium import webdriver


driver = webdriver.Chrome(
    executable_path="/home/sdsys/.wdm/drivers/chromedriver/linux64/84.0.4147.30/chromedriver")


driver.maximize_window()
driver.get("https://phptravels.com")

driver.find_element_by_xpath(
    '//*[@id="mega-nav-navigation"]/div/ul[1]/li[11]/a').click()

print(driver.window_handles)

tabs = driver.window_handles

for tab in tabs:
    driver.switch_to.window(tab)
    print(driver.title)
