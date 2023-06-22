const ctx = document.getElementById('myChart');

const xValues = ["1:05", 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const data = {
    labels: xValues,
    datasets: [{
        label: 'Rojo',
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false
    }, {
        label: 'Verde',
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false
    }, {
        label: 'Azul',
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false
    }]
};

new Chart(ctx, {
    type: 'line',
    data: data
});  