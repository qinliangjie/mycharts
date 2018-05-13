window.onresize=function(){
    setHeight('container','chatrs','shiledTitle');
    var chart = Highcharts.chart('container',options);
    setHeight('workerChart','piechatrs','piechatrsTitle');
    var piechart = Highcharts.chart('workerChart',pieoptions);
    setHeight('emergency','emrgchatrs','emrgchatrsTitle');
    var emrgchart = Highcharts.chart('emergency',emrgoptions);
};
function setHeight(b1,b2,b3){
    var mychart  = document.getElementById(b1);
        var h = document.getElementById(b2);
        var ths = document.getElementById(b3);
        var hstyle = null;var thstyle = null;
        if (window.getComputedStyle) {
            hstyle = window.getComputedStyle(h, null); 
            thstyle = window.getComputedStyle(ths, null); 
        } else { 
            hstyle = h.currentStyle;  // IE
            thstyle = ths.currentStyle;
        }
        var pb = hstyle.paddingBottom; var he = thstyle.height;
        var dif = Number(pb.substring(0,pb.indexOf('p'))) - Number(he.substring(0,he.indexOf('p')));
        mychart.style.height = dif -20 +'px';
}
setHeight('container','chatrs','shiledTitle');
setHeight('workerChart','piechatrs','piechatrsTitle');
setHeight('emergency','emrgchatrs','emrgchatrsTitle');
var options = {
    chart:{
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['广州', ' 深圳', '佛山', '东莞', '中山', '珠海', '江门', '肇庆', '惠州 ', '汕头', '潮州', '揭阳', '汕尾', '湛江', '茂名', '阳江', '韶关', '清远', '云浮', '梅州', '河源']
    },
    legend: {
        align: 'right',
        verticalAlign:'top',
        itemStyle: {
                        color: 'white'
                    }
    },
    series: [{
        type: 'column',
        name: '网上巡查',
        color:'#F09B62',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 197.4, 194.1, 95.6, 54.4,49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 184.4]
    }, {
        type: 'column',
        name: '身份认证',
        color:'#427FFE',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.,83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2]
    }, {
        type: 'column',
        name: '作弊防控',
        color:'#A67FE9',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2,48.9, 38.8, 39.3, 41.4, 59.0, 59.6, 52.4,52.4, 65.2]
    }, {
        type: 'column',
        name: '考场时钟',
        color:'#E45E69',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6]
    }]
};
var pieoptions =  {
	chart:{
        backgroundColor: 'rgba(0,0,0,0)'
    },
    legend: {
        align: 'right',
        x:-80,
        verticalAlign:'middle',
        layout: "vertical",
        itemStyle: {
                        color: 'white'
                    }
    },
    title: {
        text: null
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true // 设置饼图是否在图例中显示
        }
    },
    series: [{
        type: 'pie',
        name: '浏览器访问量占比',
        data: [ 
        		{name: '主考',
                 y: 79.3,
                 color: "#427FFE"},
                 {name: '其他',
                 y: 22.9,
                 color:"#e45e67"},
                 {name: '监考',
                 y: 7.8,
                 color: "#A67FE9"}
			]
    }]
}
var emrgoptions = {
    chart:{
        backgroundColor: 'rgba(0,0,0,0)'
    },
    legend: {
        align: 'left',
        verticalAlign:'middle',
        layout: "vertical",
        itemStyle: {
                        color: 'white'
                    }
    },
    title: {
        text: null
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true // 设置饼图是否在图例中显示
        }
    },
    series: [{
        type: 'pie',
        name: '应急指挥',
        data: [ 
                {  name: '考生身体不适',
                   y: 18,
                   color: "#427FFE"
                },
                {
                   name: '试卷异常',
                   y: 12,
                   color:"#e45e67"
                },
                {
                   name: '设备异常',
                   y: 35,
                   color: "#A67FE9"
                },
                {  
                    name: '其他',
                    y: 35,
                    color:"#F09B62"
                 }
            ]
    }]
}
var chart = Highcharts.chart('container',options);
var piechart = Highcharts.chart('workerChart',pieoptions);
var emrgchart = Highcharts.chart('emergency',emrgoptions);