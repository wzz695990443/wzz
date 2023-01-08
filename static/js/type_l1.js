var type_l1=echarts.init(document.getElementById("type_l1"));
type_l1_option = {
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
                title: '下载'
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
type_l1.setOption(type_l1_option);