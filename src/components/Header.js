import addModalCart from '../scripts/addModalCart';
import { router, useEffect } from '../utilities';
import { getCategories } from '../api/categories';

const Header = async () => {
    // localStorage get name USER
    const storedUserDataJSON = localStorage.getItem('userData');
    let storedUserData = false;
    // Kiểm tra xem dữ liệu có tồn tại hay không
    if (storedUserDataJSON !== null) {
        // Nếu dữ liệu tồn tại, chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
        storedUserData = JSON.parse(storedUserDataJSON);
    }

    // localStorage get Cart
    const carts = JSON.parse(localStorage.getItem('cart'));
    console.log(carts);

    useEffect(() => {
        // DOM Event
        addModalCart();
        const btnSignOutUser = document.querySelector('.signout');
        btnSignOutUser?.addEventListener('click', () => {
            localStorage.removeItem('userData');
            router.navigate('/');
        });
    });

    const { data } = await getCategories();
    const category = Object.entries(data);
    category.sort((a, b) => a[1].position - b[1].position);

    return `<header
    class="w-full bg-primary border-b border-solid border-[#e3ddbb] py-[1px] fixed top-0 left-0 right-0 z-10">
    <section class="w-full max-w-[1350px] mx-auto px-4 flex justify-between items-center gap-5">
        <a href="/" class="block select-none">
            <img src="../src/assets/images/logo.svg" alt="">
        </a>
        <div class="flex-1">
            <div class="flex justify-end items-center gap-8 mt-1">
                <div class="flex items-center gap-2 hover:text-slate-500 hover:transition-all">
                    <i class="fa-regular fa-user"></i>
                    ${
                        storedUserData
                            ? `<div class="block-user cursor-pointer ml-1 pt-1 relative group">
                        <span>${storedUserData.fullname}</span>
                        <div
                            class="signout absolute shadow-md bg-white top-full mt-3 left-1/2 min-w-[150px] -translate-x-1/2 text-center text-sm font-light py-2 px-5 hover:text-red-400 hover:font-bold hidden group-hover:block">
                            Đăng xuất</div>
                    </div>`
                            : '<a href="/login">Login</a>'
                    }
                </div>
                <span class="text-gray-300 text-lg">|</span>
                <div class="cursor-pointer flex items-center gap-2 hover:text-slate-500 hover:transition-all"
                    id="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Tìm kiếm</span>
                </div>
                <span class="text-gray-300 text-lg">|</span>
                <div class="text-xl transition-all relative" title="giỏ hàng">
                    <i class="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500 hover:transition-all duration-700"
                        id="cartIcon"></i>

                    <div class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 z-20 items-center justify-center hidden overlay"
                        id="overlayCart">
                        <div class="absolute top-11 right-[75px] p-[30px] bg-white transition-all duration-200 ease-in"
                            id="cart">
                            <span class="uppercase text-base font-medium text-second">Giỏ hàng</span>

                            <div class="absolute top-0 right-0 text-2xl cursor-pointer py-[10px] px-6 text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                id="close-icon-cart">
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                            <ul class="mx-[-10px] mt-1 mb-3 overflow-y-auto max-h-[40vh] pr-3 cart-scroll">
                                ${carts
                                    ?.map(
                                        cart => `
                                <li class="flex pb-2 pt-[10px] border-b border-borderColor ">
                                    <a href="" class="block w-[110px] px-[10px] select-none">
                                        <img src="./src/assets/images/${cart.images}" alt="" />
                                    </a>
                                    <div class="px-[10px] flex flex-col justify-between">
                                        <div class="flex mb-3 justify-between items-center">
                                            <h3 class="font-light text-sm pr-5 uppercase">${cart.name}</h3>
                                            <div class="cursor-pointer text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9]"
                                                id="close-icon">
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                        </div>

                                        <div class="flex font-light text-[13px]">
                                            <span class="min-w-[90px]">Size:</span>
                                            <span>${cart.size}</span>
                                        </div>

                                        <div class="flex items-center font-light text-[13px]">
                                            <label class="min-w-[90px]">Số lượng:</label>
                                            <span class="flex-1">${cart.quantity}</span>
                                            <span class="float-right">${cart.price
                                                .toString()
                                                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                                        </div>
                                    </div>
                                </li>
                                `
                                    )
                                    .join('')}
                                


                                
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
                    ${category
                        .map(
                            category => `
                    <li>
                        <a href="/category/${category[1].id}"
                            class="block py-4 transition-all hover:duration-500 border-[#f6f3e4] hover:border-black hover:border-b-2 border-b-2 uppercase">${category[1].name}</a>
                    </li>
                    `
                        )
                        .join('')}

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
