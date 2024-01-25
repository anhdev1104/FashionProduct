const Header = () => {
    return `<header
    class="w-full bg-primary border-b border-solid border-[#e3ddbb] py-[1px] fixed top-0 left-0 right-0 z-10">
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
                <div class="text-xl transition-all relative" title="giỏ hàng">
                    <i class="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500 hover:transition-all duration-700"
                        id="cartIcon"></i>

                    <div class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 z-20 items-center justify-center hidden overlay"
                        id="overlay">
                        <div class="absolute top-11 right-[75px] p-[30px] bg-white transition-all duration-200 ease-in" id="cart">
                            <span class="uppercase text-base font-medium text-second">Giỏ hàng</span>

                            <div class="absolute top-0 right-0 text-2xl cursor-pointer py-[10px] px-6 text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                id="close-icon">
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                            <ul class="mx-[-10px] mt-1 mb-3 overflow-y-auto max-h-[40vh] pr-3 cart-scroll">
                                <li class="flex pb-2 pt-[10px] border-b border-borderColor">
                                    <a href="" class="block w-[110px] px-[10px]">
                                        <img src="http://localhost:5173/src/assets/images/product5-2.jpg" alt="" />
                                    </a>
                                    <div class="px-[10px]">
                                        <div class="flex mb-3">
                                            <h3 class="font-light text-sm pr-5">WHITE POPPY OFF-SHOULDER MIDI VOILE
                                                DRESS
                                            </h3>
                                            <div class="cursor-pointer text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                                id="close-icon">
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Màu:</span>
                                            <span>Vàng</span>
                                        </div>
                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Size:</span>
                                            <span>L</span>
                                        </div>

                                        <div class="flex items-center font-light text-[13px]">
                                            <label class="min-w-[90px]">Số lượng</label>
                                            <span class="flex-1"> 1 </span>
                                            <span class="float-right">2.496.000 VND</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="flex pb-2 pt-[10px] border-b border-borderColor">
                                    <a href="" class="block w-[110px] px-[10px]">
                                        <img src="http://localhost:5173/src/assets/images/product5-2.jpg" alt="" />
                                    </a>
                                    <div class="px-[10px]">
                                        <div class="flex mb-3">
                                            <h3 class="font-light text-sm pr-5">WHITE POPPY OFF-SHOULDER MIDI VOILE
                                                DRESS
                                            </h3>
                                            <div class="cursor-pointer text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                                id="close-icon">
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Màu:</span>
                                            <span>Vàng</span>
                                        </div>
                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Size:</span>
                                            <span>L</span>
                                        </div>

                                        <div class="flex items-center font-light text-[13px]">
                                            <label class="min-w-[90px]">Số lượng</label>
                                            <span class="flex-1"> 1 </span>
                                            <span class="float-right">2.496.000 VND</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="flex pb-2 pt-[10px] border-b border-borderColor">
                                    <a href="" class="block w-[110px] px-[10px]">
                                        <img src="http://localhost:5173/src/assets/images/product5-2.jpg" alt="" />
                                    </a>
                                    <div class="px-[10px]">
                                        <div class="flex mb-3">
                                            <h3 class="font-light text-sm pr-5">WHITE POPPY OFF-SHOULDER MIDI VOILE
                                                DRESS
                                            </h3>
                                            <div class="cursor-pointer text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                                id="close-icon">
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Màu:</span>
                                            <span>Vàng</span>
                                        </div>
                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Size:</span>
                                            <span>L</span>
                                        </div>

                                        <div class="flex items-center font-light text-[13px]">
                                            <label class="min-w-[90px]">Số lượng</label>
                                            <span class="flex-1"> 1 </span>
                                            <span class="float-right">2.496.000 VND</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="flex items-center justify-between text-sm font-light mb-3">
                                <span>Tổng tiền tạm tính</span>
                                <span>5.996.000 VND</span>
                            </div>
                            <div class="flex items-center justify-between text-sm font-light">
                                <span class="text-[15px] font-bold uppercase">Tổng hoá đơn</span>
                                <span class="font-medium">5.996.000 VND</span>
                            </div>
                            <a href="/pay"
                                class="text-sm mt-4 block bg-[#444444] hover:opacity-80 transition-all duration-200 ease-linear text-white text-center py-2 font-medium">ĐI
                                TỚI ĐẶT HÀNG</a>
                        </div>
                    </div>
                </div>
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
