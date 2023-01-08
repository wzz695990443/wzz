
function gettime(){
    $.ajax({
        url:"/time",
        timeout:10000,
        success:function (data) {
            $("#time").html(data)
        }
    })
}
function get_c1_data() {
    $.ajax({
        url:"/c1",
        success:function (data) {
            $(".num h1").eq(0).text(data.nu);
            $(".num h1").eq(1).text(data.ma);
            $(".num h1").eq(2).text(data.mi);
            $(".num h1").eq(3).text(data.mt);
        }
    })
}
function get_c2_data() {
    $.ajax({
        url:"/c2",
        success:function (data) {
            $(".text h1").eq(0).text(data.name);
            $(".text h1").eq(1).text(data.time);
            $(".text h1").eq(2).text(data.age);
            $(".text h1").eq(3).text(data.level);
        }
    })
}
function get_l1_data() {
    $.ajax({
        url:"/l1",
        success:function (data){
            l1_option.xAxis[0].data=data.date
            l1_option.series[0].data=data.score
            ec_l1.setOption(l1_option)
        }
    })
}
function get_l2_data() {
    $.ajax({
        url:"/l2",
        success:function (data){
            l2_option.xAxis[0].data=data.date
            l2_option.series[0].data=data.acc
            ec_l2.setOption(l2_option)
        }
    })
}
function get_r1_data() {
    $.ajax({
        url:"/r1",
        success:function (data){
            r1_option.series[0].data[0]=data.type1
            r1_option.series[0].data[1]=data.type2
            r1_option.series[0].data[2]=data.type3
            r1_option.series[0].data[3]=data.type4
            ec_r1.setOption(r1_option)
        }
    })
}
function get_r2_data() {
    $.ajax({
        url:"/r2",
        success:function (data){
            // r2_option.series[0].data[0]=data.meantime
            // r2_option.series[0].data[1]=data.meanacc
            // r2_option.series[0].data[2]=data.frequency
            // r2_option.series[0].data[3]=data.mintime
            // r2_option.series[0].data[4]=data.sumtime
            // r2_option.series[0].data[5]=data.dyx
            ec_r2.setOption({
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [data.meantime,data.meanacc,data.frequency,data.mintime,data.sumtime,data.dyx],
                                name: 'Allocated Budget'
                            }
                        ]
                    }
                ]
            })
        }
    })
}
setInterval(gettime,1000)
setInterval(get_c1_data,1000)
setInterval(get_c2_data,1000)
setInterval(get_l1_data,1000)
setInterval(get_l2_data,1000)
setInterval(get_r1_data,1000)
setInterval(get_r2_data,1000)