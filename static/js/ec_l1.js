var ec_l1=echarts.init(document.getElementById("l1"));
var chartScreen = null;
l1_option = {
    title:{
        text:"成绩变化趋势",
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
                title: '下载',
                icon:"path//M828.975746 894.125047 190.189132 894.125047c-70.550823 0-127.753639-57.18542-127.753639-127.752616L62.435493 606.674243c0-17.634636 14.308891-31.933293 31.93227-31.933293l63.889099 0c17.634636 0 31.93227 14.298658 31.93227 31.933293l0 95.821369c0 35.282574 28.596292 63.877843 63.87682 63.877843L765.098927 766.373455c35.281551 0 63.87682-28.595268 63.87682-63.877843l0-95.821369c0-17.634636 14.298658-31.933293 31.943526-31.933293l63.877843 0c17.634636 0 31.933293 14.298658 31.933293 31.933293l0 159.699212C956.729385 836.939627 899.538849 894.125047 828.975746 894.125047L828.975746 894.125047zM249.938957 267.509636c12.921287-12.919241 33.884738-12.919241 46.807049 0l148.97087 148.971893L445.716876 94.89323c0-17.634636 14.300704-31.94762 31.933293-31.94762l63.875796 0c17.637706 0 31.945573 14.312984 31.945573 31.94762l0 321.588299 148.97087-148.971893c12.921287-12.919241 33.875528-12.919241 46.796816 0l46.814212 46.818305c12.921287 12.922311 12.921287 33.874505 0 46.807049L552.261471 624.930025c-1.140986 1.137916-21.664416 13.68365-42.315758 13.69286-20.87647 0.010233-41.878806-12.541641-43.020816-13.69286L203.121676 361.13499c-12.922311-12.933567-12.922311-33.884738 0-46.807049L249.938957 267.509636 249.938957 267.509636z"
            },
            myFull: { // 全屏
                show: true,
                title: '全屏',
                icon: "path//M 843.162 68.2667 H 989.867 a 170.667 170.667 0 0 1 170.667 170.667 v 152.883 a 34.1333 34.1333 0 1 0 68.2667 0 V 238.933 a 238.933 238.933 0 0 0 -238.933 -238.933 h -146.705 a 34.1333 34.1333 0 0 0 0 68.2667 Z M 1160.53 629.35 V 785.067 a 170.667 170.667 0 0 1 -170.667 170.667 h -123.597 a 34.1333 34.1333 0 0 0 0 68.2667 H 989.867 a 238.933 238.933 0 0 0 238.933 -238.933 v -155.716 a 34.1333 34.1333 0 1 0 -68.2667 0 Z M 393.421 955.733 H 238.933 a 170.667 170.667 0 0 1 -170.667 -170.667 v -155.136 a 34.1333 34.1333 0 0 0 -68.2667 0 V 785.067 a 238.933 238.933 0 0 0 238.933 238.933 h 154.487 a 34.1333 34.1333 0 0 0 0 -68.2667 Z M 68.2667 393.045 V 238.933 a 170.667 170.667 0 0 1 170.667 -170.667 h 147.934 a 34.1333 34.1333 0 0 0 0 -68.2667 H 238.933 a 238.933 238.933 0 0 0 -238.933 238.933 v 154.112 a 34.1333 34.1333 0 1 0 68.2667 0 Z",
                onclick: function() {
                    if (setFullScreenToolBox(l1_option)) {
                        console.log(chartScreen)
                        // getChartData(chartScreen,false);
                    }
                }
            }
        }
    },
    length:{
        data:["成绩"],
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
            name:"成绩",
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
ec_l1.setOption(l1_option);
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
                        if (setFullScreenToolBox(l1_option)) {
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