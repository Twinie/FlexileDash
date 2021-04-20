var sales_overview_options = {
    series: [{
        name: 'Ample',
        data: [355, 390, 300, 350, 390, 180]
    }, {
        name: 'Pixel Admin',
        data: [280, 250, 325, 215, 250, 310]
    }],

    chart: {
        type: 'bar',
        height: 300,
        offsetY: 0,
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false,
    },

    colors: ['#1e4db7', '#a7e3f4'],

    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
            borderRadius: 5,
        },
    },

    dataLabels: {
        enabled: false
    },

    stroke: {
        show: true,
        width: 5,
        colors: ['transparent']
    },

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },

    yaxis: {
        min: 100,
        max: 400,
        tickAmount: 3,
    },

    fill: {
        opacity: 1
    },

    tooltip: {
        theme: 'light',
    },

    grid: {
        show: false,
    },
};

var sales_overview_chart = new ApexCharts(document.querySelector("#sales-overview"), sales_overview_options);
sales_overview_chart.render();