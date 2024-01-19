import Header from '../components/Header';

const HomePage = async () => {
    const endpoint = 'http://localhost:3000/product';
    const response = await fetch(endpoint);

    const product = await response.json();
    return `
${Header()}
<main>
    <section class="w-full">
        <div class="w-full">
            <div class="w-full">
                <div class="w-full">
                    <a href="block"><img src="./src/assets/images/banner4.webp" alt=""
                            class="max-w-full object-cover"></a>
                </div>
            </div>
        </div>
    </section>
    <section class="">
        <h1 class="text-center mt-[60px] mb-5 text-3xl">
            <a href="" class="">NEW ARRIVAL</a>
        </h1>
        <div class="w-full max-w-[1350px] mx-auto">
            <div class="flex flex-wrap">
                <div class="px-[10px] mb-5 max-w-[25%]">
                    <a href="" class="block relative overflow-hidden mb-[10px] group">
                        <img src="./src/assets/images/product1.jpg" alt="" class="transition-all max-w-full ease-in duration-300">
                        <img src="./src/assets/images/product1-2.jpg" alt="" class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-second">1.998.000đ</span>
                    </div>
                    <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a href="">Black and Pink Midi Tweed Dress</a></div>
                </div>
                <div class="px-[10px] mb-5 max-w-[25%]">
                    <a href="" class="block relative overflow-hidden mb-[10px] group">
                        <img src="./src/assets/images/product2.jpg" alt="" class="transition-all max-w-full ease-in duration-300">
                        <img src="./src/assets/images/product2-2.jpg" alt="" class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-second">1.248.000đ</span>
                    </div>
                    <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a href="">V-neck Mini Velvet Dress</a></div>
                </div>
                <div class="px-[10px] mb-5 max-w-[25%]">
                    <a href="" class="block relative overflow-hidden mb-[10px] group">
                        <img src="./src/assets/images/product3.jpg" alt="" class="transition-all max-w-full ease-in duration-300">
                        <img src="./src/assets/images/product3-2.jpg" alt="" class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-second">1.648.000đ</span>
                    </div>
                    <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a href="">White Polka Dots Midi Taffeta Dress</a></div>
                </div>
                <div class="px-[10px] mb-5 max-w-[25%]">
                    <a href="" class="block relative overflow-hidden mb-[10px] group">
                        <img src="./src/assets/images/product4.jpg" alt="" class="transition-all max-w-full ease-in duration-300">
                        <img src="./src/assets/images/product4-2.jpg" alt="" class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-second">1.148.000đ</span>
                    </div>
                    <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a href="">Light Pink Midi Tweed Dress</a></div>
                </div>
                <div class="px-[10px] mb-5 max-w-[25%]">
                    <a href="" class="block relative overflow-hidden mb-[10px] group">
                        <img src="./src/assets/images/product5.jpg" alt="" class="transition-all max-w-full ease-in duration-300">
                        <img src="./src/assets/images/product5-2.jpg" alt="" class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-second">1.148.000đ</span>
                    </div>
                    <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a href="">Light Pink Midi Tweed Dress</a></div>
                </div>
            </div>
        </div>
        <a href="" class="h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second mt-4 mx-auto mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary">Xem thêm</a>
    </section>
</main>
`;
};

export default HomePage;
