import Header from '../components/Header';
import Sidebar from './layout/product/Sidebar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const AccessoryPage = async () => {
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
            ${await ProductList(3)}
    </section>
</main>
${Footer()}
`;
};
export default AccessoryPage;
