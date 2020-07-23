var context = document.getElementById("myChart").getContext("2d");

new Chart(context, {
  type: "radar",

  data: {
    labels: ["Ashwini", "Varadi", "Kritika", "Rohini", "Adhra"],

    datasets: [
      {
        label: "First 5 Naskhetras",
        data: [12, 34, 12, 45, 2],
        backgroundColor: ["red", "orange", "yellow", "green", "blue"],
      },
    ],
  },

  options: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: "black",
      },
    },
  },
});
