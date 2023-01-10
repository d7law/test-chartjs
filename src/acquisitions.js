const max = 100;
const min = 0;
import Chart from "chart.js/auto";
(async () => {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 30 },
        { year: 2014, count: 25 },
        { year: 2015, count: 65 },
    ];

    var char = new Chart(document.getElementById("acquisitions"), {
        type: "line",
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    labels: "Acquisitions by year",
                    data: data.map((row) => row.count),
                },
            ],
        },
    });
    //console.log(char.data.datasets[0].data[1]);
    $("#btn").click(function (e) {
        //e.preventDefault();

        char.data.datasets[0].data[0] = Math.random() * (max - min) + min;

        char.data.datasets[0].data[1] = Math.random() * (max - min) + min;
        char.data.datasets[0].data[2] = Math.random() * (max - min) + min;
        char.update();
    });
})();
