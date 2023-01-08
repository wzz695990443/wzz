var tr=0
var fl=0
var tim
window.onload = function(){
    function $(el){
        return	document.querySelector(el)
    }
    var schulteGrid = {
        timeFn:function(){
            s++;
            s < 10 ? s = "0"+s : s;
            if (s > 99) {
                s = 0;
                m++;
                m < 10 ? m = "0"+m : m;
            };
            if (m > 59) {
                m = 0;
                h++;
                h < 10 ? h = "0"+h : h;
            };
            var r = h+':'+m+':'+s;
            $('.clock').innerHTML = r;
        },

        //生成25个随机数字
        creatRandomNumber:function(){
            var len = 25,
                arr = [],
                res = [];
            for (var i = 1; i <= len; i++) {
                arr.push(i);
            };
            var li = '';
            li += '<ul class="grid">';
            for (var i = 0, len = arr.length; i < len; i++) {
                var j = Math.floor(Math.random() * arr.length);
                res[i] = arr[j];
                li += '<li class="item"><span class="circle">'+arr.splice(j, 1)+'</span></li>';
            }
            li += '</ul>';
            $('.game').innerHTML = li;
        },

        //选择方格
        selectGrid:function(){
            var lis = document.querySelectorAll('.grid .item');
            var number,previousNum,t,tap,isTouch = 'ontouchstart' in window;
            isTouch ? tap = "touchstart" : tap = "click";
            for (var i = 0; i < lis.length; i++) {
                (function(i){
                    lis[i].addEventListener(tap,function(){
                        var _this = this;
                        for (var i = 0; i < lis.length; i++){
                            lis[i].className = "";
                        }
                        number = _this.childNodes[0].innerHTML;

                        if (number == 1 || number == (previousNum+1)) {
                            _this.className = "active";
                            tr=tr+1
                        }else{
                            _this.className = "error";
                            clearTimeout(t);
                            t = setTimeout(function(){
                                _this.className = "";
                            },500)
                            fl=fl+1
                        }
                        if (_this.className == 'active') {
                            previousNum = parseInt(_this.childNodes[0].innerHTML);
                        }
                        if(_this.className == 'active' && number == 25){
                            if(typeof(Storage)!=="undefined"){
                                localStorage.setItem("gameTime",$('.clock').innerHTML);
                            }
                            alert('您一共用时：'+$('.clock').innerHTML);
                            tim=$('.clock').innerHTML
                            setInterval(gamedata())
                            clearInterval(timer);
                        };
                    },false)
                })(i)
            };
        }
    }

    //开始
    var h = 0, m = 0, s = 0;
    var timer;
    $('#start').onclick = function(){
        // $('#des').style.display = 'none';
        this.setAttribute('disabled',true);
        $('#restart').removeAttribute('disabled');
        schulteGrid.creatRandomNumber()
        h < 10 ? h = "0"+h : h;
        m < 10 ? m = "0"+m : m;
        schulteGrid.selectGrid();
        timer = setInterval(schulteGrid.timeFn,10);
    }
    //重新开始
    $('#restart').onclick = function(){
        schulteGrid.creatRandomNumber();
        h = 0; m = 0; s = 0;
        h < 10 ? h = "0"+h : h;
        m < 10 ? m = "0"+m : m;
        schulteGrid.selectGrid();
        clearInterval(timer);
        timer = setInterval(schulteGrid.timeFn,10);
    }

}

function gamedata() {
    $.ajax({
        url:'/gamedata',
        type:'post',
        dataType:'json',
        contentType:'application/json;charset=utf-8',
        data:JSON.stringify({time:tim,acc:tr/(tr+fl)}),
        success:function (data) {
        },
        error:function () {
        }
    })
}

var button = document.getElementById('button')
button.onclick = function () {
    window.location.href='/main'
}