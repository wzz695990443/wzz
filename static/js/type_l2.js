var type_l2=echarts.init(document.getElementById("type_l2"));
type_l2_option = {
    title:{
        text:"准确率趋势",
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
type_l2.setOption(type_l2_option);