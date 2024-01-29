const Register = () => {
    return `<main class="flex w-full">
    <section class="w-[50%]">
        <img src="./src/assets/images/register.jpg" alt="" class="w-full h-full object-cover">
    </section>
    <section class="w-[50%] px-[50px] py-[25px]">
        <h1 class="text-[36px] text-second text-center mb-4">ĐĂNG KÍ TÀI KHOẢN</h1>

        <form action="" method="POST" enctype="multipart/form-data" id="formRegister">
            <div class="form-group mb-[25px]">
                <label for="fullname" class="block cursor-pointer text-base">Họ và tên</label>
                <input type="text" name="fullname" id="fullname" class="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Vui lòng nhập tên đầy đủ">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="form-group mb-[25px]">
                <label for="email" class="block cursor-pointer text-base">Email</label>
                <input type="email" name="email" id="email" class="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Email đăng nhập">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="form-group mb-[25px]">
                <label for="phonenumber" class="block cursor-pointer text-base">Số điện thoại</label>
                <input type="tel" name="phonenumber" id="phonenumber" class="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Số điện thoại">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="form-group mb-[25px]">
                <label for="address" class="block cursor-pointer text-base">Địa chỉ</label>
                <input type="address" name="address" id="address" class="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Ex: 575 Tôn Đức Thắng, Hoà Khánh Nam, Liên Chiểu, Đà Nẵng">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="form-group mb-[25px]">
                <label for="password" class="block cursor-pointer text-base">Mật khẩu</label>
                <input type="password" name="password" id="password" class="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Nhập tối thiểu 8 kí tự">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="form-group mb-[25px]">
                <label for="password_confirmation" class="block cursor-pointer text-base">Nhập lại mật khẩu</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Xác nhận mật khẩu">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            </div>
            <button name="register" class="w-full block mb-5 cursor-pointer py-3 outline-none border border-[#dbdbdb] bg-second text-primary font-medium text-base transition-all duration-400 ease-linear hover:opacity-80">ĐĂNG KÝ</button>
            <div class="flex gap-5 items-center justify-center">
            <a href="/login" class="block leading-5 font-light text-center hover:font-bold">Bạn đã có tài khoản ?</a>
            <a href="/" class="block leading-5 font-light text-center hover:font-bold">Quay lại trang chủ</a>
            </div>
        </form>
    </section>
</main>`;
};

export default Register;
