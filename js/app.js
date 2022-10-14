const btnHourly = document.querySelector(".hourly");
const btnDaliy = document.querySelector(".daily");
const btnWeekly = document.querySelector(".weekly");
const btnMounthly = document.querySelector(".mounthly");
const times = document.querySelector(".times");

let data = [];
const ctx = document.getElementById("lineChart");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        label: "traffic",
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2200, 1500, 2500],
        backgroundColor: ["rgba(116, 119, 191, 0.2)"],
        borderColor: ["rgb(116 119 191)"],
        borderWidth: 0.8,
        tension: 0.4,
        fill: true,
        maintainAspectRatio: false,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function chart() {
  myChart.data.datasets[0].data = data;
  if (data[0] === 750) {
    btnHourly.id = "selected";
  } else if (data[0] !== 750) {
    btnHourly.id = "";
  }
  if (data[0] === 500) {
    btnDaliy.id = "selected";
  } else if (data[0] !== 500) {
    btnDaliy.id = "";
  }
  if (data[0] === 300) {
    btnWeekly.id = "selected";
  } else if (data[0] !== 300) {
    btnWeekly.id = "";
  }
  if (data[0] === 1000) {
    btnMounthly.id = "selected";
  } else if (data[0] !== 1000) {
    btnMounthly.id = "";
  }
  myChart.update();
}

btnHourly.addEventListener("click", () => {
  data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2200, 1500, 2500];
  chart();
});
btnDaliy.addEventListener("click", () => {
  data = [500, 1000, 1250, 2100, 1000, 1700, 1270, 2000, 1750, 1650, 2100];
  chart();
});
btnWeekly.addEventListener("click", () => {
  data = [300, 650, 1250, 1800, 600, 1000, 1350, 1850, 2100, 1300, 1600];
  chart();
});
btnMounthly.addEventListener("click", () => {
  data = [1000, 1250, 1150, 1200, 1500, 1750, 1750, 1850, 2200, 2350, 2500];
  chart();
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";
});

const ctx_b = document.getElementById("barChart").getContext("2d");
const BarChart = new Chart(ctx_b, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "# of Votes",
        data: [75, 115, 175, 120, 225, 200, 100],
        backgroundColor: ["rgb(116 119 191)"],
        borderWidth: 1,
        maintainAspectRatio: false,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx_p = document.getElementById("pieChart").getContext("2d");
const myChart_p = new Chart(ctx_p, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 15, 15],
        backgroundColor: [
          "rgb(116 119 191",
          "rgb(129 201 143)",
          "rgb(81 182 200)",
        ],
        borderColor: ["rgb(116 119 191", "rgb(129 201 143)", "rgb(81 182 200)"],
        borderWidth: 1,
        maintainAspectRatio: false,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          borderColor: "white",
        },
      },
    },
  },
});
