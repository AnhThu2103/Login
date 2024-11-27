function validateForgotPasswordForm() {
    var username = document.forms["forgotForm"]["name"].value;

    // Kiểm tra nếu trường Tên đăng nhập trống
    if (username == "" || username == "Tên đăng nhập hoặc Email") {
        alert("Vui lòng nhập tên đăng nhập hoặc email!");
        return false;
    }

    // Nếu hợp lệ, thông báo yêu cầu đã được gửi
    alert("Yêu cầu đặt lại mật khẩu đã được gửi. Kiểm tra email của bạn.");
    alert("Làm gì có database mà đòi gửi :)))");
    return true; // Dừng việc gửi form để tránh tải lại trang
}