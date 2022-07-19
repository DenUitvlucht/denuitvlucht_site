<template :key="page">
  <v-container>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Live-resultaten</p>
        </v-card-text>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <div id="data"></div>
          <br />
          <div class="mx-auto" id="chart" style="width: 500px">
            <canvas id="myChart"></canvas>
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-container>
</template>$

<script>
import { getDatabase, ref, query, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const auth = getAuth();

let result = [];



const db = getDatabase();
const starCountRef = ref(db, "users");

onValue(starCountRef, (snapshot) => {
  let test = snapshot.val();
  UpdateVisualLisatie(test);
});


function UpdateVisualLisatie(data) {
  var array = dataToArray(data);
  const count = [];

  for (const element of array) {
    if (count.length > 0) {
      var isAanwezig = false;
      for (const countElement of count) {
        if (countElement.value === element.vote) {
          countElement.aantal++;
          isAanwezig = true;
        }
      }
      if (!isAanwezig) {
        var test = { value: element.vote, aantal: 1 };
        count.push(test);
      }
    } else {
      var test = { value: element.vote, aantal: 1 };
      count.push(test);
    }
  }
  result = count.sort((a, b) =>
    a.aantal < b.aantal
      ? 1
      : a.aantal === b.aantal
      ? a.value > b.value
        ? 1
        : -1
      : -1
  );
  console.log(result);
  fixHtmlCodeFromResult();
}
function fixHtmlCodeFromResult() {
  datachart();
  var data = document.getElementById("data");
  data.textContent = "";
  result.forEach(function (element) {
    var p = document.createElement("p");
    p.setAttribute("class", "font-weight-black");
    p.setAttribute("class", "text-h6");
    var text = document.createTextNode(
      element.value + " heeft momenteel " + element.aantal + " stem(men)"
    );
    p.appendChild(text);
    data.appendChild(p);
  });
}
function dataToArray(data) {
  return Object.keys(data).map(function (key) {
    return data[key];
  });
}

function datachart() {
  const labels = [];
  const datavalues = [];
  result.forEach(function (element) {
    labels.push(element.value);
    datavalues.push(element.aantal);
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255,0,0)",
          "rgb(0,255,255)",
          "rgb(255,0,255)",
          "rgb(124,252,0)",
        ],
        borderColor: "rgb(0,0,0)",
        data: datavalues,
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {},
  };
  let chartStatus = Chart.getChart("myChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  const myChart = new Chart(document.getElementById("myChart"), config);
}
</script>

