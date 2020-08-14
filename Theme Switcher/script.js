const bodyTag = document.getElementsByTagName("body")[0];
const themeData = localStorage.getItem("theme");

if (themeData) {
  console.log("we have value for theme");
  bodyTag.setAttribute("class", themeData);
} else {
  console.log("Theme is not set.");
}

function switchTheme() {
  var themeValue = bodyTag.getAttribute("class");

  if (themeValue === "light-theme") {
    bodyTag.setAttribute("class", "dark-theme");
    storeThemeStatus("dark-theme");
  } else {
    bodyTag.setAttribute("class", "light-theme");
    storeThemeStatus("light-theme");
  }
}

function storeThemeStatus(value) {
  localStorage.setItem("theme", value);
}
