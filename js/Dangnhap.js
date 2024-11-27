function validateForm() {
    var username = document.forms["loginForm"]["name"].value;
    var password = document.forms["loginForm"]["password"].value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Biểu thức chính quy để kiểm tra mật khẩu có ít nhất một ký tự và một số
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    if (username == "" || username == "Tên đăng nhập"|| !emailRegex.test(username)) {
        alert("Tên đăng nhập không được để trống và phải đúng định dạng");
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

    // If both fields are filled, redirect to YouTube
    window.location.href = "https://www.youtube.com";
    return false; 
}