var ec_l2=echarts.init(document.getElementById("l2"));
l2_option = {
    title:{
        text:"准确率变化趋势",
        left:'left',
        textStyle:{color:'white'}
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'line',
            lineStyle:{color:'#7171c6'}
        }
    },
    toolbox: {
        show: true,
        right: '20px',
        feature: {
            saveAsImage: {
                show: true,
                title: '下载'
            },
            myFull: { // 全屏
                show: true,
                title: '全屏',
                icon: "path//M 843.162 68.2667 H 989.867 a 170.667 170.667 0 0 1 170.667 170.667 v 152.883 a 34.1333 34.1333 0 1 0 68.2667 0 V 238.933 a 238.933 238.933 0 0 0 -238.933 -238.933 h -146.705 a 34.1333 34.1333 0 0 0 0 68.2667 Z M 1160.53 629.35 V 785.067 a 170.667 170.667 0 0 1 -170.667 170.667 h -123.597 a 34.1333 34.1333 0 0 0 0 68.2667 H 989.867 a 238.933 238.933 0 0 0 238.933 -238.933 v -155.716 a 34.1333 34.1333 0 1 0 -68.2667 0 Z M 393.421 955.733 H 238.933 a 170.667 170.667 0 0 1 -170.667 -170.667 v -155.136 a 34.1333 34.1333 0 0 0 -68.2667 0 V 785.067 a 238.933 238.933 0 0 0 238.933 238.933 h 154.487 a 34.1333 34.1333 0 0 0 0 -68.2667 Z M 68.2667 393.045 V 238.933 a 170.667 170.667 0 0 1 170.667 -170.667 h 147.934 a 34.1333 34.1333 0 0 0 0 -68.2667 H 238.933 a 238.933 238.933 0 0 0 -238.933 238.933 v 154.112 a 34.1333 34.1333 0 1 0 68.2667 0 Z",
                onclick: function() {
                    if (setFullScreenToolBox(l2_option)) {
                        console.log(chartScreen)
                        // getChartData(chartScreen,false);
                    }
                }
            }
        }
    },
    length:{
        data:["准确率"],
        left: "right"
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: []
    }],
    yAxis: {
        type: 'value',
        splitLine:{
            show:true,
            lineStyle: {
                color:'#17273B',
                width:1,
                type:'solid'
            }
        }
    },
    series: [
        {
            name:"准确率",
            data: [0],
            type: 'line',
            smooth: true
        }
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
};
ec_l2.setOption(l2_option);
function setFullScreenToolBox(option) {
    let ChartScreen;
    if ($('#fullScreenMask').css('display') === 'block') {
        $('#fullScreenMask').hide();
        ChartScreen = null;
        return false;
    }
    else{
        $('#fullScreenMask').show();
        chartScreen = echarts.init(document.getElementById('fullScreen'));
        chartScreen.setOption(option);
        chartScreen.setOption({
            toolbox: {
                feature: {
                    myTool: {
                        onclick: function() {
                            if (setFullScreenToolBox(l2_option)) {
                                console.log(chartScreen)
                                // getChartData(chartScreen,false);
                            }
                        }
                    }
                }
            }
        });
        return true;
    }}
window.onresize = function () {
    chartScreen.resize()
}