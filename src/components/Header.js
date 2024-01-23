const Header = () => {
    return `<header class="w-full bg-primary border-b border-solid border-[#e3ddbb] py-[1px] fixed top-0 left-0 right-0 z-10">
    <section class="w-full max-w-[1350px] mx-auto px-4 flex justify-between items-center gap-5">
        <a href="/" class="block">
            <img src="../src/assets/images/logo.svg" alt="">
        </a>
        <div class="flex-1">
            <div class="flex justify-end items-center gap-8 mt-1">
                <div class="flex items-center gap-2 hover:text-slate-500 hover:transition-all">
                    <i class="fa-regular fa-user"></i>
                    <a href=''>Login</a>
                </div>
                <div class="cursor-pointer flex items-center gap-2 hover:text-slate-500 hover:transition-all"
                    id="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Tìm kiếm</span>
                </div>
                <a href="" class="text-lg hover:text-slate-500 transition-all hover:transition-all duration-700">
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
            </div>
            <nav>
                <ul class="flex justify-end items-center gap-8 font-medium">
                    <li>
                        <a href="/product"
                            class="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2">SẢN
                            PHẨM MỚI</a>
                    </li>
                    <li>
                        <a href="/productsale"
                            class="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2">SẢN
                            PHẨM GIẢM GIÁ</a>
                    </li>
                    <li>
                        <a href="/accessory"
                            class="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2">PHỤ
                            KIỆN</a>
                    </li>
                    <li>
                        <a href="/collection"
                            class="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2">BỘ
                            SƯU TẬP</a>
                    </li>
                    <li>
                        <a href="/showFashion"
                            class="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2">TRÌNH
                            DIỄN
                            THỜI TRANG</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</header>`;
};

export default Header;
