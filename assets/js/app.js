const ctx = document.getElementById("myChart");
const chartA = document.getElementById("chartA");
const chartB = document.querySelector("#chartB");
const perChart = document.querySelector("#perChart");
const earningGraph = document.querySelector("#earningGraph");

new Chart(earningGraph, {
  type: "doughnut",
  data: {
    // labels: [
    //   'Red',
    //   'Blue',
    //   'Yellow'
    // ],
    datasets: [
      {
        // label: 'Earning',
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 8,
      },
    ],
  },
});

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "* All values are in crore",
        data: [12, 19, 15, 14, 18, 23],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(chartA, {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 50,
            y: 30,
            r: 10,
          },
          {
            x: 40,
            y: 60,
            r: 8,
          },
          {
            x: 35,
            y: 50,
            r: 10,
          },
          {
            x: 30,
            y: 55,
            r: 20,
          },
          {
            x: 40,
            y: 42,
            r: 15,
          },
          {
            x: 50,
            y: 40,
            r: 20,
          },
          {
            x: 55,
            y: 40,
            r: 12,
          },
        ],
        backgroundColor: "rgb(80 205 137)",
      },
    ],
  },
});

new Chart(chartB, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [250, 80, 120],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});
