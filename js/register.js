window.onload = function () {
    $(function () {
        var loginBtn = $(".log");
        loginBtn.click(function () {
            var text = $("#username").val()
            var password = $("#password").val()

            if (window.localStorage.getItem(text) != null && window.localStorage.getItem(password) != null) {
                // .html("登陆成功,2秒后跳转回商城")
                // $("#login .tip").css({
                //     "color": "#3e8840"
                // })
                alert("登陆成功，2秒后跳转页面")
                setTimeout(function () {
                    window.location.href = 'index.html';
                }, 2000)
            } else {
                // $("#login .tip").html("用户名或密码错误")
                alert("账号或密码输入错误")
            }
        })

        var registerBtn = $(".log_b");
        registerBtn.click(function () {
            var text = $("#username_b").val()
            var password = $("#username_b").val()
            if (window.localStorage.getItem(text) != null) {
                // $("#register .tip").html("用户名已存在")
                alert("用户名已存在")
                return;
            } else if (text == "" || password == "") {
                alert("用户名或密码不能为空")
                // $("#register .tip").html("用户名或密码不能为空")
            } else {

                window.localStorage.setItem(text, password)
                alert("注册成功,2,秒后跳转页面")
                setTimeout(function () {
                    window.location.href = 'index.html';
                }, 2000)
                // $("#register .tip").html("注册成功")
                // $("#register .tip").css({
                //     "color": "#3e8840"
                // })
            }
        })
    })

    
    
}
