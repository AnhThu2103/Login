function validateForm() {
    var username = document.forms["ReForm"]["name"].value;
    var email = document.forms["ReForm"]["email"].value;
    var password = document.forms["ReForm"]["password"].value;
    var resetpass = document.forms["ReForm"]["Resetpassword"].value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Biểu thức chính quy để kiểm tra mật khẩu có ít nhất một ký tự và một số
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if(username == "" || password == ""|| email =="" || resetpass == "")
    {
        alert("Không được để trống");
        return false;
    }

    if (username == "" || username == "Tên đăng ký") {
        alert("Tên ký không được để trống");
        return false;
    }
    if(!emailRegex.test(email))
    {
        alert("Email phải đúng định dạng");
        return false;
    }

    if (password == "" || password == "Mật khẩu" ) {
        alert("Mật khẩu không được để trống!");
        return false;
    }
    if(!passwordRegex.test(password))
    {
        alert("Mật khẩu phải chứ chữ và số");
        return false;
    }
    if(password != resetpass)
    {
        alert("Password và ResetPass không đúng");
        return false;
    }

    // If both fields are filled, redirect to YouTube
    window.location.href = "Login.html";
    return false; 
}