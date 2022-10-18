const btnHourly = document.querySelector(".hourly");
const btnDaliy = document.querySelector(".daily");
const btnWeekly = document.querySelector(".weekly");
const btnMounthly = document.querySelector(".mounthly");
const times = document.querySelector(".times");
const bell = document.querySelector(".bell");
const not = document.querySelector(".not");
const ax = document.querySelector(".a");
const bx = document.querySelector(".b");
const cx = document.querySelector(".c");
const fc = document.querySelector(".fc");
const sc = document.querySelector(".sc");
const tc = document.querySelector(".tc");
const dot = document.querySelector(".dot");
const submit = document.querySelector(".submit");
const text = document.querySelector(".text");
const errmsg = document.querySelector(".err-msg");
const save = document.querySelector(".s");
const cancle = document.querySelector(".cancle");
const time = document.querySelector("#time");
const prof = document.querySelector(".prof");
const email = document.querySelector(".email");

let show = false;
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

function showf() {
  if (show === false && cls !== 3) {
    not.style.display = "flex";
    show = true;
  } else {
    not.style.display = "none";
    show = false;
  }
}
function hide() {
  if (cls === 3) {
    not.style.display = "none";
    dot.style.display = "none";
  }
}
bell.addEventListener("click", () => {
  showf();
});
let cls = 0;
ax.addEventListener("click", () => {
  fc.style.display = "none";
  cls++;
  hide();
});
bx.addEventListener("click", () => {
  sc.style.display = "none";
  cls++;
  hide();
});
cx.addEventListener("click", () => {
  tc.style.display = "none";
  cls++;
  hide();
});

// auto complete

let words = ["Victoria Chambers", "dale bryd", "dan wood", "dan oliver"];
const names = ["Victoria Chambers", "dale bryd", "dan wood", "dan oliver"];
words.sort();
console.log(words);

let input = document.querySelector(".texta");
let suggestion = document.querySelector(".predict");
const enterKey = 13;
const tabkey = 9;

window.onload = () => {
  input.value = "";
  clearSuggestion();
};
const clearSuggestion = () => {
  suggestion.innerHTML = "";
};

const caseCheck = (word) => {
  word = word.split("");
  let inp = input.value;
  for (let i in inp) {
    if (inp[i] === word[i]) {
      continue;
    } else if (inp[i].toUpperCase() === word[i]) {
      word.splice(i, 1, word[i].toLowerCase());
    } else {
      word.splice(i, 1, word[i].toUpperCase());
    }
  }
  return word.join("");
};

input.addEventListener("input", (e) => {
  clearSuggestion();
  let regex = new RegExp("^" + input.value, "i");
  for (let i in words) {
    if (regex.test(words[i]) && input.value !== "") {
      words[i] = caseCheck(words[i]);
      suggestion.innerHTML = words[i];
      break;
    }
  }
});

input.addEventListener("keydown", (e) => {
  if (
    e.keyCode == enterKey ||
    (e.keyCode == tabkey && suggestion.innerText != "")
  ) {
    e.preventDefault();
    input.value = suggestion.innerText;
    clearSuggestion();
  }
});
submit.addEventListener("click", (e) => {
  let name = false;
  e.preventDefault();
  console.log(input.value);
  for (let i = 0; i < words.length; i++) {
    if (names[i].toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
      name = true;
    }
  }
  if (text.value !== "" && name === true) {
    submit.style.backgroundColor = "green";
    submit.textContent = "sent";
  } else if (text.value === "" && name === true) {
    submit.style.backgroundColor = "red";
    submit.textContent = "error";
    errmsg.style.display = "inline";
    errmsg.textContent = "please enter a message";
  } else if (text.value !== "" && name === false) {
    submit.style.backgroundColor = "red";
    submit.textContent = "error";
    errmsg.style.display = "inline";
    errmsg.textContent = "please enter a valid user name";
  } else {
    submit.style.backgroundColor = "red";
    submit.textContent = "error";
    errmsg.style.display = "inline";
    errmsg.textContent = "please enter a valid user name and enter a message";
  }
});
save.addEventListener("click", () => {
  window.localStorage.setItem("email", email.checked);

  window.localStorage.setItem("profile", prof.checked);

  window.localStorage.setItem("time", time.value);
});
cancle.addEventListener("click", () => {
  window.localStorage.clear();
  re();
});

function re() {
  checkedE = JSON.parse(localStorage.getItem("email"));
  email.checked = checkedE;
  checkedP = JSON.parse(localStorage.getItem("profile"));
  prof.checked = checkedP;
  time.value = localStorage.getItem("time");
}
re();
