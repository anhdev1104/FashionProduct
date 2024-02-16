import Toast from '../../components/Toast.js';
import { router, useEffect, useState } from '../../utilities';
import SidebarAdmin from '../layout/admin/SidebarAdmin';
import axios from 'axios';

const Products = () => {
    const [products, setProduct] = useState([]);
    const endpoint = 'https://project-45d37-default-rtdb.firebaseio.com/product.json';

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(endpoint);
            const data = await res.json();
            const dataReverse = Object.entries(data).reverse();
            setProduct(dataReverse);
        };
        fetchData();
    }, []);

    useEffect(() => {
        // add product
        const nameProduct = document.querySelector('#nameProduct');
        const imagesProduct = document.querySelector('#imagesProduct');
        const priceProduct = document.querySelector('#priceProduct');
        const priceSaleProduct = document.querySelector('#priceSaleProduct');
        const descriptionProduct = document.querySelector('#descriptionProduct');
        const sizeS = document.querySelector('#sizeS');
        const sizeM = document.querySelector('#sizeM');
        const sizeL = document.querySelector('#sizeL');
        const quantitySizeS = document.querySelector('#quantitySizeS');
        const quantitySizeM = document.querySelector('#quantitySizeM');
        const quantitySizeL = document.querySelector('#quantitySizeL');
        const category = document.querySelector('#category');
        const statusProduct = document.querySelector('#statusProduct');

        // check empty rules required
        const checkEmpty = input => {
            return input === '' || input === false;
        };

        const handleSubmit = async e => {
            e.preventDefault();

            if (
                checkEmpty(nameProduct.value.trim()) ||
                checkEmpty(imagesProduct.value.trim()) ||
                checkEmpty(priceProduct.value.trim()) ||
                checkEmpty(sizeS.checked) ||
                checkEmpty(sizeM.checked) ||
                checkEmpty(sizeL.checked) ||
                checkEmpty(category.value) ||
                checkEmpty(statusProduct.value)
            ) {
                return Toast({
                    title: 'Thất bại !',
                    message: 'Vui lòng nhập đầy đủ thông tin sản phẩm.',
                    type: 'error',
                    duration: 4000,
                });
            }

            // handle ngăn chặn click nhiều lần vào btn Add thêm 1 sản phẩm nhiều lần
            const btnAdd = document.querySelector('#btnAdd');
            btnAdd.classList.add('pointer-events-none');

            const listImages = imagesProduct.files;
            const images = [...listImages].map(image => image.name);
            // Lấy thông tin về kích thước và số lượng
            const size = [];
            if (sizeS.checked) {
                size.push({ label: 'S', quantity: +quantitySizeS.value || 0 });
            }
            if (sizeM.checked) {
                size.push({ label: 'M', quantity: +quantitySizeM.value || 0 });
            }
            if (sizeL.checked) {
                size.push({ label: 'L', quantity: +quantitySizeL.value || 0 });
            }
            const newProduct = {
                name: nameProduct.value,
                images,
                priceOrigin: +priceProduct.value,
                price: +priceSaleProduct.value,
                description: descriptionProduct.value,
                size,
                categoryID: +category.value,
                isActive: +statusProduct.value,
            };

            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            Toast({
                title: 'Thành công !',
                message: 'Thêm sản phẩm thành công.',
                type: 'success',
                duration: 1000,
            });

            setTimeout(() => {
                router.navigate('/admin/products');
            }, 1000);
        };

        const form = document.querySelector('#addProduct');
        form.addEventListener('submit', handleSubmit);

        return () => form.removeEventListener('submit', handleSubmit);
    }, [products]);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-delete');
        btns.forEach(btn =>
            btn.addEventListener('click', async function () {
                const isDelete = confirm('Bạn muốn xoá sản phẩm này khỏi trang web ?');
                if (!isDelete) return;

                const id = this.dataset.id;
                await fetch(`https://project-45d37-default-rtdb.firebaseio.com/product/${id}.json`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const newProducts = products.filter(product => product[0] !== id);

                setProduct(newProducts);
            })
        );
    }, [products]);

    return `
<div id="toast" class="fixed top-8 right-8 z-50"></div>
<main class="bg-gray-200">
    <div class="flex h-screen bg-gray-200 ml-[256px]">
        ${SidebarAdmin()}

        <div class="flex flex-col flex-1">
            <div class="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
                <span class="text-xl font-semibold px-4">Quản lý sản phẩm</span>
                <div class="rounded-[100rem] w-11 h-11 overflow-hidden">
                    <img src="https://avatars.githubusercontent.com/u/121429011?v=4" alt="" class="object-cover" />
                </div>
            </div>
            <div class="flex flex-1 px-6 py-8 bg-gray-200">
                <div class="w-full md:w-1/2 px-4">
                    <div class="bg-white rounded-lg p-8">
                        <h2 class="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>
                        <form method="POST" enctype="multipart/form-data" id="addProduct">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="nameProduct">
                                    Tên sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nameProduct" type="text" placeholder="Nhập tên sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="imagesProduct">
                                    Hình ảnh
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="imagesProduct" type="file" placeholder="Nhập hình ảnh sản phẩm" multiple>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="priceProduct">
                                    Giá sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="priceProduct" type="text" placeholder="Nhập giá sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="priceSaleProduct">
                                    Giá sale sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="priceSaleProduct" type="text" placeholder="Nhập giá sale sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="descriptionProduct">
                                    Mô tả sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="descriptionProduct" type="text" placeholder="Nhập mô tả sản phẩm">
                            </div>

                            <div class="mb-4">
                                <label class="text-gray-700 text-sm font-bold mb-2 block">
                                    <span>Size</span>
                                </label>
                                <div class="flex flex-col gap-3 mt-2">
                                    <div class="flex items-center justify-evenly gap-5">
                                        <label class="inline-flex items-center" for="sizeS">
                                            <input type="checkbox" class="form-checkbox text-blue-500" id="sizeS">
                                            <span class="ml-2">S</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="Nhập số lượng" id="quantitySizeS">
                                    </div>
                                    <div class="flex items-center justify-evenly gap-5">
                                        <label class="inline-flex items-center" for="sizeM">
                                            <input type="checkbox" class="form-checkbox text-blue-500" id="sizeM">
                                            <span class="ml-2">M</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline translate-x-[-2px]"
                                            type="text" placeholder="Nhập số lượng" id="quantitySizeM">
                                    </div>
                                    <div class="flex items-center justify-evenly gap-5">
                                        <label class="inline-flex items-center" for="sizeL">
                                            <input type="checkbox" class="form-checkbox text-blue-500" id="sizeL">
                                            <span class="ml-2">L</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="Nhập số lượng" id="quantitySizeL">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4 relative">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                                    Danh mục sản phẩm
                                </label>
                                <select
                                    class="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="category">
                                    <option value="">Chọn danh mục</option>
                                    <option value="1">Sản phẩm mới</option>
                                    <option value="2">Sản phẩm giảm giá</option>
                                    <option value="3">Phụ kiện</option>
                                </select>
                            </div>
                            <div class="mb-4 relative">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="statusProduct">
                                    Trạng thái sản phẩm
                                </label>
                                <select
                                    class="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="statusProduct">
                                    <option value="">Chọn trạng thái</option>
                                    <option value="1">Hiển thị sản phẩm</option>
                                    <option value="0">Ẩn sản phẩm</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    type="submit" id="btnAdd">
                                    Thêm sản phẩm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <div class="bg-white rounded-lg p-8 mr-[-4px]">
                        <h2 class="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>
                        <div class="overflow-auto max-h-[813px] cart-scroll">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th class="text-center">Ảnh sản phẩm</th>
                                        <th class="text-center">Tên sản phẩm</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${products
                                        .map(
                                            product =>
                                                `
                                    <tr>
                                        <td class="border p-2 w-[120px] h-[140px]">
                                            <img src="../../src/assets/images/${product[1].images[0]}" alt="" class="" />
                                        </td>
                                        <td class="border p-2">${product[1].name}</td>
                                        <td class="border p-2 w-24">
                                            <a href="/admin/products/${product[0]}"
                                                class="block p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white text-center mb-1">Chi
                                                tiết</a>

                                            <button data-id="${product[0]}"
                                                class="btn-delete min-w-24 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center">Xoá</button>
                                        </td>
                                    </tr>
                                    `
                                        )
                                        .join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`;
};

export default Products;
