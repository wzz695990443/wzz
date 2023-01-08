var ec_r1=echarts.init(document.getElementById("r1"));
r1_option = {
    title: {
        text:"种类偏好统计",
        left:'left',
        textStyle:{color:'white'}
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'line',
            lineStyle:{color:'#EA5151'}
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
        }

    },
    xAxis: {
        type: 'category',
        data: ['图片', '数字', '字母', '汉字']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [0, 0, 0, 0],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
};
ec_r1.setOption(r1_option);
ec_r1.on('click',function(params){
    var name=params.name;
    if(name=="图片"){
        window.location.href="/main/type"
    }
    if(name=="数字"){
        window.location.href="/main/type2"
    }
    if(name=="字母"){
        window.location.href="/main/type3"
    }
    if(name=="汉字"){
        window.location.href="/main/type4"
    }
});
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
                            if (setFullScreenToolBox(r1_option)) {
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