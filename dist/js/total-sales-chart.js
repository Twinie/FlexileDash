
var options = {
    series: [30, 27, 20, 23],
    labels: ["2021", "2020", "2019"],
    chart: {
        height: 285,
        type: 'donut',
    },

    colors: ['#1a9bfc', '#1e4db7', '#fec90f', '#ecf0f2'],
    dataLabels: {
        enabled: false
    },

    legend: {
        show: false,
    },

    stroke: {
        show: false,
    },

    plotOptions: {
        pie: {
            donut: {
                size: '78%',
                background: 'transparent',
                labels: {
                    show: false,
                    name: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: -10,
                    },
                    value: {
                        show: false,
                        color: "#98aab4",
                    },
                    total: {
                        show: false,
                        label: 'Our Visitors',
                        color: '#98aab4',
                    }
                }
            }
        }
    }
};


var chart = new ApexCharts(document.querySelector("#total-sales"), options);
chart.render();