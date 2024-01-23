import Footer from '../components/Footer';
import Header from '../components/Header';

const endpoint = 'http://localhost:3000/product';

const ProductDetails = async ({ id }) => {
    const res = await fetch(endpoint);
    const products = await res.json();
    const product = products.find(product => product.id === +id);
    return `
    ${Header()}
    <main class="w-full max-w-[1350px] mx-auto px-4">
    <section class="mt-[120px]">
        <form action="" method="POST">
            <div class="flex items-center font-light">
                <a href="/" class="transition-all ease-in duration-200 hover:text-[#a9a9a9]">TRANG CHỦ</a>
                <span class="text-gray-300 mx-2 text-lg">/</span>
                <div class="transition-all ease-in duration-200 hover:text-[#a9a9a9]"></div>
                <span class="text-gray-300 mx-2 text-lg">/</span>
                <div href="#!" class="transition-all ease-in duration-200 hover:text-[#a9a9a9]">${product.name}</div>
            </div>
            <div class="mt-10 flex justify-between">
                <div class="w-[45%] flex gap-[15px]">
                    <ul class="list-none w-[110px] block h-auto">
                        <li class="details-item-img cursor-pointer mb-2 max-w-full block border-[3px] border-transparent border-[rgb(189,24,28)]">
                            <img src="../src/assets/images/${product.images[0]}" alt="">
                        </li>
                        <li class="details-item-img cursor-pointer mb-2 max-w-full block border-[3px] border-transparent">
                            <img src="../src/assets/images/${product.images[1]}" alt="">
                        </li>
                    </ul>
                    <div class="overflow-hidden cursor-zoom-in group">
                        <img src="../src/assets/images/${
                            product.images[0]
                        }" alt="" class="hover:scale-125 object-contain max-w-full w-full max-h-full transition-all ease-linear duration-300" id="details-img">
                    </div>
                </div>
                <div class="w-[50%]">
                    <h2 class="details-title"><?= $title; ?></h2>
                    <span class="details-quantity">SL KHO CÒN: <?= $quantity; ?></span>
                    <p class="details-price">
                        <span class="current-price"><?= str_replace(',', '.', number_format($price)) . 'đ'; ?></span>
                        <span class="details-old-price"><?= str_replace(',', '.', number_format($old_price)) . 'đ'; ?></span>
                    </p>
                    <p class="details-size">
                        SIZE :
                        <span></span>
                    </p>
                    <div class="details-options wraper">
                        <div class="options-size wraper">
                            <a href="#!" class="item-option">S</a>
                            <a href="#!" class="item-option">M</a>
                            <a href="#!" class="item-option">L</a>
                        </div>
                        <div class="modal-size" id="modal-size">
                            Tìm đúng kích thước →
                        </div>
                        <div class="overlay" id="overlay">
                            <div class="box-size" id="box-size">
                                <div class="box-size-close" id="close-icon">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <img src="./img/boxsize.jpg" alt="" class="box-size-img">
                            </div>
                        </div>

                    </div>
                    <div class="details-add wraper">
                        <input type="submit" name="addproductdetails" class="add-cart" value="THÊM VÀO GIỎ HÀNG">
                        <a href="#!" class="details-heart">
                            <i class="fa-regular fa-heart heart-icon heart-details"></i>
                        </a>
                    </div>
                    <div class="details-description">
                        <h3 class="description-tile">CHI TIẾT SẢN PHẨM</h3>
                        <p class="descripton-content">Hoa Poppy – loài hoa gây nghiện và sở hữu trong mình nét đẹp tiềm tàng. Sở hữu ngay làn gió mới với họa tiết hoa Poppy thuộc BST Colorfull Poppy của SIXDO ngay thôi!</p>
                        <p class="descripton-content"><?= $descript ?></p>
                    </div>
                </div>
            </div>
        </form>
    </section>

    </main>
    ${Footer()}
    `;
};
export default ProductDetails;
