$(function () {

    $(".btn-top1").click(function () {

        $('.right').hide();
        $('.left').show();
    });


    $(".btn-top2").click(function () {

        $('.left').hide();
        $('.right').show();
    });


    $("#btn").click(function () {
        var i1 = $(".ipt1").val();
        var i2 = $(".ipt2").val();
        var i3 = $(".ipt3").val();
        var reg = /^[A-Za-z0-9]+$/;
        if (i1 === "" || i2 === "" || i3 === "") {
            alert("请完整输入")
        } else {
            if (reg.test(i1) && i1.length >= 6) {
                if (reg.test(i2) && i2.length >= 6 && i2.length <= 12) {
                    if (i2 === i3) {
                        alert("注册成功");
                        $(".ipt1").val("");
                        $(".ipt2").val("");
                        $(".ipt1").css({border: "none"});
                        $(".ipt2").css({border: "none"});
                        $(".ipt3").css({border: "none"});
                        $(".ipt3").val("");
                        localStorage.setItem('yonghm', i1);
                        localStorage.setItem('mima', i3);
                        $('.right').hide();
                        $('.left').show();

                    } else {
                        alert('两次输入不一致');
                        $("#ipt1").css({border: "none"});
                        $("#ipt2").css({border: "none"});
                        $('#ipt3').css({border: '1px solid red'});
                    }
                } else {
                    alert('密码输入格式不正确');
                    $("#ipt1").css({border: "none", 'background-color': '#fff'});
                    $('#ipt2').css({border: '1px solid red', 'background-color': '#fff'});
                    $("#ipt3").css({border: "none", 'background-color': '#fff'});
                }
            } else {
                alert("输入不正确")

            }
        }
    });


    $("#btn-r").click(function () {
        var a = $('#ipt1-r').val();
        var b = $('#ipt2-r').val();
        if (a === '' || b === "") {
            alert("请完整输入")
        } else {
            var s = localStorage.getItem('yonghm');
            var w = localStorage.getItem('mima');
            if (s === a) {
                if (w === b) {
                    window.location.href = 'https:www.baidu.com'
                } else {
                    alert('密码不正确')
                }
            } else {
                alert("用户名不存在")
            }
        }
    })


});