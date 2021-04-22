var options = {
    colors: ['#1a9bfc'],

    series: [{
        name: 'Weekly Stats',
        data: [56, 124, 69, 144]
    }],


    fill: {
        colors: '#f3faff',
        opacity: 1,
        type: 'solid',
    },


    stroke: {
        width: 2,
    },


    chart: {
        zoom: {
            enabled: true
        },

        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150,
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },

        type: 'area',
        height: 120,
        width: '100%',

        sparkline: {
            enabled: true,
        },

        toolbar: {
            show: false,
        },
    },

};

var chart = new ApexCharts(document.querySelector("#weekly-stats"), options);
chart.render();