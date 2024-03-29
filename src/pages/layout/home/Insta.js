import { getInstagram } from '../../../api/instagram';

const Insta = async () => {
    const { data } = await getInstagram();

    return `
    <section class="w-full max-w-[1350px] mx-auto px-4 border-t border-[#e3ddbb]">
    <h1 class="text-3xl text-center mt-[30px]">INSTAGRAM</h1>
    <p class="text-xl text-center mb-[30px] font-light">@sixdo.vn</p>
    <div class="flex flex-wrap mx-[-10px]">
        ${data
            .map(
                ins => `<div class="mb-5 w-full max-w-[33.3333333333%] px-[10px] select-none">
        <img src="./src/assets/images/${ins}" alt="" class="w-full h-full object-cover">
    </div>`
            )
            .join('')}
    </div>
</section>
    `;
};

export default Insta;
