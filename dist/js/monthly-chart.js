var options = {
    series: [{
        name: 'Monthly Sales',
        data: [44, 83, 25, 72, 38]
    }],

    colors: ['#1a9bfc', '#080'],

    chart: {
        height: 83,
        width: '100%',
        offsetY: 0,
        type: 'area',

        toolbar: {
            show: false,
        },

        sparkline: {
            enabled: true,
        },

    },


    dataLabels: {
        enabled: false
    },

    fill: {
        colors: '#f3faff',
        opacity: 1,
        type: 'solid',
    },

    stroke: {
        curve: 'smooth'
    },

    grid: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#monthly-sales"), options);
chart.render();