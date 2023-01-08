$("#registfrom").submit(function (event) {
    event.preventDefault();
    $.ajax({
        url:"/regist",
        type:"POST",
        data:$("#registfrom").serialize(),
        success:function (data) {
            console.log(data);
            if (data.success===1){
                alert("注册成功，您的账号为："+data.log)
                window.location.href="/login_page"
            }
            else{
                alert("注册失败")
            }
        }
    })
})