var options = {
    colors: ['#1a9bfc'],

    series: [{
        name: 'Monthly Sales',
        data: [44, 83, 25, 72, 38],
    }],



    fill: {
        colors: '#f3faff',
        opacity: 1,
        type: 'solid',
    },


    tooltip: {
        theme: 'dark',
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
        height: 90,
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