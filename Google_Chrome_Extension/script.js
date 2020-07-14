if (navigator.onLine) {
  fetch("https://api.covid19api.com/total/country/nepal")
    .then((response) => response.json())
    .then((data) => {
      data = data.reverse();

      document.getElementById("active").innerText = data[0].Active;
      document.getElementById("confirmed").innerText = data[0].Confirmed;
      document.getElementById("deaths").innerText = data[0].Deaths;

      console.log(data[0]);
    });
} else {
  document.getElementById("content").innerHTML =
    "<br/><br/>No Internet Connection<br/><br/>";
}
