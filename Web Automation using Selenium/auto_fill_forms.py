from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options


chrome_options = Options()
chrome_options.add_argument("--headless")

driver = webdriver.Chrome(
    options=chrome_options,
    executable_path="/home/sdsys/.wdm/drivers/chromedriver/linux64/84.0.4147.30/chromedriver")


driver.get("https://meroform.netlify.com")

# fullname
fullname_field = driver.find_element_by_xpath('/html/body/form/input[2]')
fullname_field.send_keys("Suraj Dahal")

# email
email_field = driver.find_element_by_xpath('/html/body/form/input[3]')
email_field.send_keys("saroj@gmail.com")

# gender ; selects male
driver.find_element_by_xpath('/html/body/form/input[4]').click()

# yoga
# Vinyasa Yoga
driver.find_element_by_xpath('//*[@id="checkbox_vinyasa"]').click()

# kundalini yoga
driver.find_element_by_xpath('//*[@id="checkbox_kundalini"]').click()

shifts = Select(driver.find_element_by_xpath('/html/body/form/select'))

options = shifts.options

# shifts.select_by_visible_text("Evening")
shifts.select_by_index(2)


# message box

message_field = driver.find_element_by_xpath('/html/body/form/textarea')
message_field.send_keys("hello world")


# click button

submit_button = driver.find_element_by_css_selector('input[type="submit"]')
submit_button.click()

print("Form has been submitted")
