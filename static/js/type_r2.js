var type_r2=echarts.init(document.getElementById("type_r2"));
type_r2_option = {
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['图片', '数字', '字母', '汉字'],
        inverse: true,

        max: 3 //最多4个柱状图
    },
    toolbox: {
        show: true,
        right: '20px',
        feature: {
            saveAsImage: {
                show: true,
                title: '下载'
            }
        }
    },
    series: [
        {
            name: 'X',
            type: 'bar',
            data: [0,0,0,0],
        }
    ],
};
type_r2.setOption(type_r2_option);