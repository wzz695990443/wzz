function get_type_r2_data() {
    $.ajax(
        {
            url:"/r1",
            success:function (data){
                type_r2.setOption({
                    series: [
                        {
                            realtimeSort: true,
                            name: 'X',
                            type: 'bar',
                            data: [data.type1,data.type2,data.type3,data.type4],
                            label: {
                                show: true,
                                position: 'right',
                                valueAnimation: true
                            }
                        }
                    ]
                })
            }
        }
    )
}

function get_type_r1_data() {
    $.ajax({
        url:"/type_r1_2",
        success:function (data) {
            $(".num h1").eq(0).text(data.nu);
            $(".num h1").eq(1).text(data.ma);
            $(".num h1").eq(2).text(data.mi);
            $(".num h1").eq(3).text(data.mt);
        }
    })
}

function get_type_l_data() {
    $.ajax({
        url:"/type_l_2",
        success:function (data) {
            type_l1_option.xAxis[0].data=data.date
            type_l1_option.series[0].data=data.score
            type_l2_option.xAxis[0].data=data.date
            type_l2_option.series[0].data=data.acc
            type_l1.setOption(type_l1_option)
            type_l2.setOption(type_l2_option)
        }
    })
}
setInterval(get_type_r1_data,1000)
setInterval(get_type_l_data,1000)
setInterval(get_type_r2_data,1000)