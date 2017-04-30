$(document).ready(function () {
    //設定預設焦點
    $("input[type='text']:first", document.forms[0]).focus();
    //直接按Ener鍵送出
    document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            // 如果鍵盤按下的是 Enter(鍵盤代碼13) 的動作 
            $("#addButton").click();
        }
    }
    //addButton事件
    $('#addButton').click(function () {
        if ($('#myInput').val()) {
            $('#group').append("<li class='list-group-item'>" + $('#myInput').val() + "<span class='close'>&times</span></a>");
            $('#myInput').val("");
            $('.list-group-item').unbind();//移除先前的event handler
            $('.list-group-item').on('click', function () {
                $(this).toggleClass("checked");
                //var item = $(this);
                //$(this).animate({left: '100px'}, "slow");
                //$(this).animate({fontSize: '3em'}, "slow");
            });
            $('.close').on('click', function () {
                $(this).parent().remove();
            });
        }
        else {
            alert("請輸入代辦事項");
        }
    });
    
    
});