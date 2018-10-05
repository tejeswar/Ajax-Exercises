function _(el) {
    return document.getElementById(el);
}

function ajax_data(php_file, el, send_data) {
    _(el).innerHTML = "Loging...";
    var hr = new XMLHttpRequest();
    hr.open('GET', php_file, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function () {
        if (hr.readyState === 4 && hr.status === 200) {
            _(el).innerHTML = hr.responseText;
        }
    };
    hr.send(send_data);
}

function contact_form() {

    var name = _("name").value;
    var email = _("email").value;
    var msg = _("msg").value;
    var send_data =
            "&name=" + name +
            "&email=" + email +
            "&msg=" + msg;

    ajax_data('contact.php', 'ajax_response', send_data);
}



function signup() {
    var formdata = new FormData();
    var ajax = new XMLHttpRequest();
    
    var username = _("username").value;
    var email = _("email").value;
    var password = _("password").value;
    var profile = _("profile").files[0];
    
  
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("profile", profile);
    
    ajax.open("POST", "./signup.php");
    ajax.send(formdata);
  ajax.onreadystatechange = function () {
            _("signup_response").innerHTML = ajax.responseText;
    };
   
}

function signup_page() {
    ajax_data('signup-form.html', 'page', null);
}



function login_page() {
    ajax_data('login-form.html', 'page', null);
}


function contact_us_page() {
    ajax_data('contact_us.html', 'page', null);
}





function validFName(fld) {
   
     var illegalChars = /\W/; // allow letters, numbers, and underscores
     if ((fld.value.length < 4) || (fld.value.length > 15)) {
        _('name_error').innerHTML = "Name 5 - 15 characters";
        return false;
    }else if (illegalChars.test(fld.value)) {
          _('name_error').innerHTML = "Yout type illegal characters";
        return false;
    }
    else{
          _('name_error').innerHTML = "<img src='ok.png'>";
      
    }
    return true;
}



function validate_email(fld) {
    with (fld)
    {
        apos = value.indexOf("@");
        dotpos = value.lastIndexOf(".");
        if (apos < 1 || dotpos - apos < 2) {
             _('email_error').innerHTML = "Please type valid email address";
            return false;
        } else {
               _('email_error').innerHTML = "<img src='ok.png'>";
            return true;
        }
    }
}


function valid_msg(fld) {
   
     var illegalChars = /\W /; // allow letters, numbers, and underscores
     if ((fld.value.length < 14) || (fld.value.length > 100)) {
        _('msg_error').innerHTML = "Message 15 - 100 characters";
        return false;
    }else if (illegalChars.test(fld.value)) {
          _('name_error').innerHTML = "Yout type illegal characters";
        return false;
    }
    else{
          _('msg_error').innerHTML = "<img src='ok.png'>";
      
    }
    return true;
}







function login() {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {
            username: username,
            password: password
        },
        success: function (response) {
            $('#login-response').html(response);
            if (response === "login") {
                $('#login-response').html("Please Wait Redirecting...");
                setTimeout(function () {
                    window.location = "welcome.php";
                }, 5000);
            }
        }
    });

}
