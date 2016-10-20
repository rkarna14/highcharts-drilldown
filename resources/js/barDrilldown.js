function drawDrilldown(){
    $(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly and Year to date returns'
        },
        // subtitle: {
        //     text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
        // },
        xAxis: {
            type: 'category',
            title : {
                text : "Year"
            }
        },
        yAxis: {
            title: {
                text: 'Net Return'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Yearly',
            colorByPoint: true,
            data: [{
                name: '2010',
                y: 3.88,
                drilldown: '2010'
            }, {
                name: '2011',
                y:4.69,
                drilldown: '2011'
            }, {
                name: '2012',
                y: 6.78,
                drilldown: '2012'
            }]
        }],
        drilldown: {
            series: [{
                name: '2010',
                id: '2010',
                data: [
                    [
                        'January',
                        -3.08
                    ],
                    [
                        'February',
                        0.26
                    ],
                    [
                        'March',
                        1.26
                    ]
                ]
            },{
                name: '2011',
                id: '2011',
                data: [
                    [
                        'January',
                        -3.08
                    ],
                    [
                        'February',
                        0.26
                    ],
                    [
                        'March',
                        1.26
                    ]
                ]
            },{
                name: '2012',
                id: '2012',
                data: [
                    [
                        'January',
                        -3.08
                    ],
                    [
                        'February',
                        0.26
                    ],
                    [
                        'March',
                        1.26
                    ]
                ]
            }
            ]
        }
    });
});
}

// drawDrilldown();
// <div id="container" style="width:600px;height:400px;"></div>