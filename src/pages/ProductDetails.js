import Footer from '../components/Footer';
import Header from '../components/Header';
import { handleAddImage, modalShow, toggleActiveSize } from '../scripts/detailEvent';
import scrollProducts from '../scripts/scrollProducts';
import { useEffect } from '../utilities';
import getCategoryName from '../utilities/getCategoryName';

const endpoint = 'https://project-45d37-default-rtdb.firebaseio.com/product.json';
const ProductDetails = async ({ id }) => {
    const res = await fetch(endpoint);
    const products = await res.json();
    const convertProducts = Object.entries(products);
    const product = convertProducts.find(product => product[0] === id);
    const remainingQuantity = product[1].size.reduce((acc, curr) => acc + curr.quantity, 0);
    // lấy ra số lượng tối đa của sp random
    const count = 10;
    const shuffledProducts = convertProducts.sort(() => Math.random() - 0.5);
    const randomProduct = shuffledProducts.slice(0, count);
    // lấy ra tên category của sp detail
    const category = await getCategoryName(product[1].categoryID);

    // events
    useEffect(() => {
        handleAddImage();
        modalShow();
        toggleActiveSize();
        scrollProducts();
    });
    return `
${Header()}
<main class="w-full max-w-[1350px] mx-auto px-4">
    <section class="mt-[110px]">
        <form action="" method="POST">
            <div class="flex items-center font-light uppercase">
                <a href="/" class="transition-all ease-in duration-200 hover:text-[#a9a9a9]">TRANG CHỦ</a>
                <span class="text-gray-300 mx-2 text-lg">/</span>
                <div class="transition-all ease-in duration-200 hover:text-[#a9a9a9]">${category}</div>
                <span class="text-gray-300 mx-2 text-lg">/</span>
                <div href="#!" class="transition-all ease-in duration-200 hover:text-[#a9a9a9]">${product[1].name}</div>
            </div>
            <div class="mt-5 flex justify-between">
                <div class="w-[45%] flex gap-[15px] select-none">
                    <ul class="list-none w-[110px] block h-auto">
                        <li
                            class="details-item-img cursor-pointer mb-2 max-w-full block border-[3px] border-[rgb(189,24,28)]">
                            <img src="../src/assets/images/${product[1].images[0]}" alt="">
                        </li>
                        <li class="details-item-img cursor-pointer mb-2 max-w-full block border-[3px]">
                            <img src="../src/assets/images/${product[1].images[1]}" alt="">
                        </li>
                    </ul>
                    <div class="overflow-hidden cursor-zoom-in group">
                        <img src="../src/assets/images/${product[1].images[0]}" alt=""
                            class="hover:scale-125 object-contain max-w-full w-full max-h-full transition-all ease-linear duration-300"
                            id="details-img">
                    </div>
                </div>
                <div class="w-[50%]">
                    <h2 class="font-medium mb-1 text-xl">${product[1].name}</h2>
                    <span class="font-light text-sm">Số lượng kho còn: <b
                            class="font-bold text-base">${remainingQuantity}</b></span>
                    <div class="mb-5 flex items-center gap-[18px] mt-3">
                        <span class="font-bold text-lg">${product[1].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                        <span class="font-light text-[#a9a9a9] line-through">${product[1].priceOrigin
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                    </div>
                    <p class="font-light mt-5 mb-[10px] flex items-center">
                        SIZE :
                        <span class="font-bold mx-2" id="innerSize"></span>
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex gap-5">
                            <div
                                class="cursor-pointer flex items-center justify-center w-10 h-10 border border-[#e3ddbb] bg-white font-light item-option">
                                S</div>
                            <div
                                class="cursor-pointer flex items-center justify-center w-10 h-10 border border-[#e3ddbb] bg-white font-light item-option">
                                M</div>
                            <div
                                class="cursor-pointer flex items-center justify-center w-10 h-10 border border-[#e3ddbb] bg-white font-light item-option">
                                L</div>
                        </div>
                        <div class="cursor-pointer font-light text-[#007ff0] text-sm hover:underline" id="modal-size">
                            Tìm đúng kích thước →
                        </div>
                        <div class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 z-20 items-center justify-center hidden overlay"
                            id="overlay">
                            <div class="relative max-w-[1000px] w-full h-[700px] shadow-xl box-modal" id="box-size">
                                <div class="absolute top-0 right-0 text-[40px] cursor-pointer py-[10px] px-6 text-gray-500 transition-all ease-in duration-200 hover:text-[#a9a9a9] close-icon" id="close-icon">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <img src="../src/assets/images/boxsize.jpg" alt="" class="w-full h-full">
                            </div>
                        </div>

                    </div>
                    <div class="flex justify-between items-center mt-[25px] pb-[30px] border-b border-borderColor">
                        <input type="submit" name="addproductdetails"
                            class="max-w-[380px] w-full h-50px leading-[50px] block text-white cursor-pointer outline-none border-none bg-second font-light text-center transition-all ease-in-out duration-200 hover:font-bold hover:bg-[#a9a9a9]"
                            value="THÊM VÀO GIỎ HÀNG">
                        <div
                            class="w-[50px] h-[50px] border border-borderColor bg-white flex items-center justify-center text-xl transition-all ease-in duration-200 hover:border-second cursor-pointer">
                            <i class="fa-regular fa-heart heart-icon heart-details"></i>
                        </div>
                    </div>
                    <div class="py-[25px]">
                        <h3 class="mb-4 font-medium">CHI TIẾT SẢN PHẨM</h3>
                        <p class="mb-5 leading-6 font-light">Hoa Poppy – loài hoa gây nghiện và sở hữu trong mình nét
                            đẹp tiềm tàng. Sở hữu ngay làn gió mới với họa tiết hoa Poppy thuộc BST Colorfull Poppy của
                            SIXDO ngay thôi!</p>
                        <p class="mb-[30px] leading-6 font-light">${product[1].description}</p>
                    </div>
                </div>
            </div>
        </form>
    </section>
    <section class="mt-[50px]">
        <div class="flex items-center justify-between">
            <h1 class="font-medium">CÓ THỂ BẠN CŨNG THÍCH</h1>
            <div class="flex items-center gap-5">
                <div class="py-[10px] px-[15px] bg-white cursor-pointer border border-borderColor hover:border-second group btn-prev">
                    <i class="fa fa-angle-left text-[#999] group-hover:text-second"></i>
                </div>
                <div class="py-[10px] px-[15px] bg-white cursor-pointer border border-borderColor  hover:border-second group btn-next">
                    <i class="fa fa-angle-right text-[#999] group-hover:text-second"></i>
                </div>
            </div>
        </div>

        <div class="flex mt-5">
            <div class="favorite-list flex overflow-x-auto scroll-smooth mx-[-10px]">
                ${randomProduct
                    .map(
                        product => `
                <div class="product-item box-border px-[10px] mb-5 max-w-[25%] flex-shrink-0 flex-grow-0">
                    <a href="/product/${product[0]}" class="mb-[10px] block relative overflow-hidden group select-none">
                        <img src="../src/assets/images/${
                            product[1].images[0]
                        }" alt="" class="max-w-full transition-all duration-300 ease-in">
                        <img src="../src/assets/images/${
                            product[1].images[1]
                        }" alt="" class="transition-all duration-300 ease-in max-w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <h3 class="text-sm uppercase font-medium leading-6 mb-1">${product[1].name}</h3>
                    <p class="font-light text-sm">${product[1].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</p>
                </div>
                `
                    )
                    .join('')}
            </div>
        </div>
    </section>
</main>
${Footer()}
`;
};
export default ProductDetails;
