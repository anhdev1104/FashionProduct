import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = async () => {
    const endpoint = 'http://localhost:3000/product';
    const response = await fetch(endpoint);

    const products = await response.json();
    const reversedProducts = products.reverse();
    return `
${Header()}
<main class="mt-[93px]">
    <section class="w-full">
        <div class="w-full">
            <div class="w-full">
                <div class="w-full">
                    <a href=""><img src="./src/assets/images/banner4.webp" alt=""
                            class="max-w-full object-cover"></a>
                </div>
            </div>
        </div>
    </section>
    <section class="">
        <h1 class="text-center mt-[60px] mb-5 text-3xl">
            <a href="" class="">NEW ARRIVAL</a>
        </h1>
        <div class="w-full max-w-[1350px] mx-auto px-4">
            <div class="flex flex-wrap mx-[-10px]">
                ${reversedProducts
                    .map(product => {
                        console.log(product);
                        return `
                <div class="px-[10px] mb-5 max-w-[25%]">
                <a href="" class="block relative overflow-hidden mb-[10px] group">
                    <img src="./src/assets/images/${product.images[0]}" alt=""
                        class="transition-all max-w-full ease-in duration-300">
                    <img src="./src/assets/images/${product.images[1]}" alt=""
                        class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                </a>
                <div class="flex items-center justify-between">
                    <span class="font-bold text-second">${product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                </div>
                <div
                    class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold">
                    <a href="">${product.name}</a></div>
            </div>
                `;
                    })
                    .join('')}
            </div>
        </div>
        <a href=""
            class="h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second mt-4 mx-auto mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary">Xem
            thêm</a>
    </section>
    <section class="w-full max-w-[1350px] mx-auto px-4 border-t border-[#e3ddbb]">
        <h1 class="text-3xl text-center mt-[30px]">INSTAGRAM</h1>
        <p class="text-xl text-center mb-[30px]">@sixdo.vn</p>
        <div class="flex flex-wrap mx-[-10px]">
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta1.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta2.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta3.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta4.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta5.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta6.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta7.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta8.webp" alt="" class="w-full h-full object-cover">
            </div>
            <div class="mb-5 w-full max-w-[33.3333333333%] px-[10px]">
                <img src="./src/assets/images/insta9.webp" alt="" class="w-full h-full object-cover">
            </div>
        </div>
    </section>
    </main>
    ${Footer()}
`;
};

export default HomePage;
