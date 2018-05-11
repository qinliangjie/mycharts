window.onresize=function(){
    setHeight();
    var chart = Highcharts.chart('container',options);
};
function setHeight(){
    var mychart  = document.getElementById('container');
        var h = document.getElementById('chatrs');
        var ths = document.getElementById('shiledTitle');
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
setHeight();
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
    }, {
        type: 'line',
        name: '启用考点',
        color:'#5EE4DF',
        data: [135, 84, 32, 52, 67,135, 84, 36, 52, 67,135, 84, 33, 52, 67,135, 84, 39, 52, 67,93],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'line',
        name: '启用考场',
        color:'#E4DC5E',
        data: [125, 74, 42, 38, 87,105, 54, 66, 58, 69,125, 87, 23, 42, 73,115, 94, 35, 44, 72,83],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }]
};


var chart = Highcharts.chart('container',options);