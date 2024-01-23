import Header from '../components/Header';
import Sidebar from './layout/product/Sidebar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const endpoint = 'http://localhost:3000/product';
const ProductSale = async () => {
    const response = await fetch(endpoint);
    const product = await response.json();
    return `
${Header()}
<section class="w-full mt-[113px] max-w-[1350px] mx-auto px-4">
    <a href="" class="block select-none">
        <img src="./src/assets/images/banner1.webp" alt="" class="max-w-full">
    </a>
</section>
<main class="w-full max-w-[1350px] mx-auto px-4">
    <section class="mt-[50px] flex">
        ${Sidebar()}
        <div class="flex-grow pl-[30px]">
            <div class="border-b border-borderColor mb-5 flex items-center justify-between pb-[5px]">
                <div class="gap-5 flex items-center">
                    <p class="text-second font-bold uppercase">SẢN PHẨM GIẢM GIÁ</p>
                    <span class="font-light text-gray-500">(486 Item)</span>
                </div>
                <div class="cursor-pointer gap-3 font-bold items-center flex">
                    <i class="fa-solid fa-list-ol"></i>
                    <span>SORT</span>
                </div>
            </div>
            ${await ProductList(2)}
    </section>
</main>
${Footer()}
`;
};
export default ProductSale;
