import Footer from '../components/Footer';
import Header from '../components/Header';
import { getProductShowFashion } from '../api/product';
import NotFound from './NotFound';

const ShowFashion = async () => {
    try {
        const { data } = await getProductShowFashion();

        return `
    <main>
    ${await Header()}
        <section class="w-full max-w-[1350px] mx-auto px-4 mt-[93px] select-none">
            <div class="w-full py-[30px] flex flex-wrap mx-auto">
                ${data
                    .map(
                        item => `
                <div class="px-[10px] mb-5 max-w-[33.3333333333%] w-full flex-shrink-0 flex-grow-0">
                    <img src="./src/assets/images/${item}" alt="" class="w-full h-full object-cover">
                </div>
                `
                    )
                    .join('')}
            </div>
            <a href=""
            class="h-[50px] w-[220px] bg-transparent flex justify-center items-center border-solid border-2 border-second ml-[10px] mb-10 uppercase font-bold text-base transition-all ease-in-out duration-200 hover:bg-second hover:text-primary">VIEW MORE +</a>
        </section>
    </main>
    ${Footer()}
    `;
    } catch (error) {
        console.log(error);
        return NotFound();
    }
};

export default ShowFashion;
