var options = {
    colors: ['#1a9bfc', '#080'],

    series: [{
        name: 'Monthly Sales',
        data: [44, 83, 25, 72, 38]
    }],

    
    fill: {
        colors: '#f3faff',
        opacity: 1,
        type: 'solid',
    },


    chart: {
        type: 'area',
        height: 83,
        width: '100%',

        sparkline: {
            enabled: true,
        },

        toolbar: {
            show: false,
        },
    },

};

var chart = new ApexCharts(document.querySelector("#monthly-sales"), options);
chart.render();