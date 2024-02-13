import { useEffect } from '../utilities';
import Validator from '../utilities/validate';

const LoginPage = () => {
    useEffect(() => {
        // form login
        Validator({
            form: '#formLogin',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [Validator.isRequired('#email'), Validator.isEmail('#email'), Validator.minLength('#password', 8)],
        });
    });
    return `<main class="flex w-full h-[100vh]">
    <section class="w-[50%] h-full">
        <img src="./src/assets/images/login2.jpg" alt="" class="w-full h-full object-cover">
    </section>
    <section class="w-[50%] px-[50px] py-[25px]">
        <h1 class="text-[36px] text-second text-center mb-[35px]">ĐĂNG NHẬP TÀI KHOẢN</h1>
        <form action="" method="POST" enctype="multipart/form-data" id="formLogin">
            <div class="form-group mb-[25px]">
                <label for="email" class="block cursor-pointer text-base mb-1">Email</label>
                <input type="email" name="email" id="email" class="w-full py-[15px] outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Email đăng nhập">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="form-group mb-[25px]">
                <label for="password" class="block cursor-pointer text-base mb-1">Mật khẩu</label>
                <input type="password" name="password" id="password" class="w-full py-[15px] outline-none bg-transparent border-b border-borderColor block text-base" placeholder="Nhập tối thiểu 8 kí tự">
                <span class="form-message text-red-500 text-[13px] mt-2 block"></span>
            </div>
            <div class="flex items-center justify-center gap-6 py-2 mb-5">
            <a href="" class="leading-5 font-light text-center hover:font-bold">Đổi mật khẩu</a>
            <a href="/register" class="leading-5 font-light text-center hover:font-bold">Đăng ký tài khoản</a>
            <a href="/" class="leading-5 font-light text-center hover:font-bold">Quay lại trang chủ</a>
            </div>
            <button type="submit" name="login" class="w-full block mb-[30px] cursor-pointer py-[15px] outline-none border border-[#dbdbdb] bg-second text-primary font-medium text-base transition-all duration-400 ease-linear hover:opacity-80">ĐĂNG NHẬP</button>
        </form>
    </section>
</main>`;
};

export default LoginPage;
