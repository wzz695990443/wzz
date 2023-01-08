$("#loginfrom").submit(function (event) {
    event.preventDefault();
    $.ajax({
        url:"/login",
        type:"POST",
        data:$("#loginfrom").serialize(),
        success:function (data) {
            console.log(data);
            if (data.success===1){
                alert("登陆成功")
                window.location.href="/game"
            }
            else{
                alert("登录失败")
            }
        }
    })
})

var regist = document.getElementById('register')
regist.onclick = function () {
    window.location.href='/register'
}
