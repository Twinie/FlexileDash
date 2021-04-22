var options = {
    series: [{
        name: 'Ample',
        data: [360, 400, 290, 325, 400, 170]
    }, {
        name: 'Pixel Admin',
        data: [270, 240, 310, 190, 240, 310]
    }],

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },

    yaxis: {
        min: 100,
        max: 400,
        tickAmount: 3,
    },

    legend: {
        show: false,
    },

    colors: ['#1e4db7', '#a7e3f4'],

    fill: {
        opacity: 1
    },

    tooltip: {
        theme: 'dark',
    },

    grid: {
        show: false,
    },

    chart: {
        toolbar: {
            show: false,
        },
        height: 270,
        type: 'bar',
    },

    dataLabels: {
        enabled: false
    },

    plotOptions: {
        bar: {
            columnWidth: '50%',
            borderRadius: 6,
        },
    },

    stroke: {
        show: true,
        width: 4,
        colors: ['none']
    },
};

var chart = new ApexCharts(document.querySelector("#sales-overview"), options);
chart.render();