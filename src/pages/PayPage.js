import Footer from '../components/Footer';
import Header from '../components/Header';

const PayPage = async () => {
    return `
    ${await Header()}
    <main class="w-full max-w-[1350px] mx-auto px-4">
        
    </main>
    ${Footer()}
    `;
};
export default PayPage;
