var ec_r2=echarts.init(document.getElementById("r2"));
r2_option = {
    title: {
        text: ''
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '平均成绩', max: 30 },
            { name: '准确率', max: 1 },
            { name: '练习频率', max: 3 },
            { name: '最好成绩', max: 30 },
            { name: '练习时长', max: 1000 },
            { name: '练习多样性', max: 2 }
        ]
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
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [0,0,0,0,0,0],
                    name: 'Allocated Budget',
                    areaStyle: {
                        color: 'rgba(8,247,255,0.6)'
                    }
                }
            ]
        }
    ]
};
ec_r2.setOption(r2_option);
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
                            if (setFullScreenToolBox(r2_option)) {
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