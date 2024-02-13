import axios from 'axios';
import Header from '../components/Header';
import Slider from './layout/home/Slider';
import Insta from './layout/home/Insta';
import Footer from '../components/Footer';
const HomePage = async () => {
    try {
        const { data } = await axios.get('https://project-45d37-default-rtdb.firebaseio.com/product.json');
        const convertData = Object.entries(data);
        const targetCategory = 1;
        const filterProducts = convertData.filter(item => item[1].categoryID === targetCategory).reverse();
        const maxProductsToShow = 8;
        const products = filterProducts.slice(0, maxProductsToShow);
        return `
${Header()}
<main class="mt-[93px]">
    ${await Slider()}
    <section class="">
        <h1 class="text-center mt-[60px] mb-5 text-3xl">
            <a href="/product" class="hover:opacity-55">NEW ARRIVAL</a>
        </h1>
        <div class="w-full max-w-[1350px] mx-auto px-4">
            <div class="flex flex-wrap mx-[-10px]">
                ${products
                    .map(product => {
                        return `
                <div class="px-[10px] mb-5 max-w-[25%] select-none">
                    <a href="/product/${product[0]}" class="block relative overflow-hidden mb-[10px] group">
                        <img src="./src/assets/images/${product[1].images[0]}" alt=""
                            class="transition-all max-w-full ease-in duration-300">
                        <img src="./src/assets/images/${product[1].images[1]}" alt=""
                            class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-second">${product[1].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                    </div>
                    <div
                        class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold">
                        <a href="">${product[1].name}</a></div>
                </div>
                `;
                    })
                    .join('')}
            </div>
        </div>
        <a href="/product"
            class="h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second mt-4 mx-auto mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary">Xem
            thêm</a>
    </section>
    ${await Insta()}
</main>
${Footer()}
`;
    } catch (error) {
        console.log(error);
    }
};
export default HomePage;
