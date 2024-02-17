import { router, useEffect } from '../../utilities';
import SidebarAdmin from '../layout/admin/SidebarAdmin';
import { getProductDetail, updateProduct } from '../../api/product';
import { getCategories } from '../../api/categories';

const UpdateProduct = async ({ id }) => {
    const res = await getProductDetail(id);
    const product = await res.data;

    // api category
    const { data } = await getCategories();
    const dataCate = Object.entries(data);

    // handle update submit
    useEffect(() => {
        const form = document.querySelector('#formUpdate');
        // selector
        const nameProduct = document.querySelector("input[name='nameProduct']");
        const imagesInput = document.querySelectorAll("input[type='file']");
        const priceOrigin = document.querySelector('input[name="priceOrigin"]');
        const price = document.querySelector('input[name="price"]');
        const quantitySize = document.querySelectorAll('.quantitySize');
        const description = document.querySelector('input[name="description"]');
        const category = document.querySelector('#category');
        const statusProduct = document.querySelector('#statusProduct');

        const images = [];
        const size = [];
        const handleUpdate = async e => {
            e.preventDefault();
            imagesInput.forEach(image => {
                if (image.files[0]?.name === undefined) {
                    const pathImage = image.previousElementSibling.src.split('/').pop();
                    return images.push(pathImage);
                } else {
                    return images.push(image.files[0]?.name);
                }
            });
            quantitySize.forEach(quantity => {
                size.push({
                    label: quantity.previousElementSibling.innerText,
                    quantity: +quantity.value,
                });
            });

            const newProduct = {
                name: nameProduct.value,
                images,
                priceOrigin: +priceOrigin.value,
                price: +price.value,
                description: description.value,
                size,
                categoryID: +category.value,
                isActive: +statusProduct.value,
            };

            await updateProduct(id, newProduct);

            alert('Update thành công !');
            router.navigate(`/admin/products/${id}`);
        };

        form.addEventListener('submit', handleUpdate);

        return () => form.removeEventListener('submit', handleUpdate);
    }, []);

    return `<main class="bg-gray-200">
    <div class="flex h-screen bg-gray-200 ml-[256px]">
        ${SidebarAdmin()}

        <div class="flex flex-col flex-1">
            <div class="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
                <span class="text-xl font-semibold px-4">Chỉnh sửa chi tiết sản phẩm</span>
                <div class="rounded-[100rem] w-11 h-11 overflow-hidden">
                    <img src="https://avatars.githubusercontent.com/u/121429011?v=4" alt="" class="object-cover" />
                </div>
            </div>
            <div class="flex flex-1 px-6 py-8 bg-gray-200">
                <div class="bg-white p-8 rounded shadow-md w-full">
                    <div class="overflow-x-auto">
                        <form method="POST" class="px-6 py-4 w-full" id="formUpdate">
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Tên sản
                                    phẩm</label>
                                <input type="text" value="${product.name}"
                                    name="nameProduct" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4 w-full">
                                <label class="block text-gray-700 font-semibold mb-2">Hình ảnh</label>
                                <div class="flex gap-3 w-[1103px] overflow-x-auto">
                                    ${product.images
                                        .map(
                                            image => `
                                    <div class="flex-shrink-0 w-52">
                                        <img src="../../src/assets/images/${image}" alt="" class="w-full" />
                                        <input type="file"
                                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    `
                                        )
                                        .join('')}
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Giá gốc</label>
                                <input type="text" name="priceOrigin" value="${product.priceOrigin}"
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Giá sale</label>
                                <input type="text" name="price" value="${product.price}"
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label class="text-gray-700 text-sm font-bold mb-2 block">
                                    <span>Size</span>
                                </label>
                                <div class="flex flex-col gap-3 mt-2">
                                    ${product.size
                                        .map(
                                            product => `
                                    <div class="flex items-center gap-5">
                                        <label class="inline-flex items-center">
                                            <span class="ml-2 font-bold">${product.label}</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline quantitySize"
                                            type="text" placeholder="Nhập số lượng" value="${product.quantity}">
                                    </div>
                                    `
                                        )
                                        .join('')}
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Mô tả</label>
                                <input type="text" name="description" value="${product.description}"
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2">
                                    Danh mục sản phẩm
                                </label>
                                <select
                                    class="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category">
                                    ${dataCate
                                        .map(
                                            category => `
                                    <option value="${category[1].id}" ${
                                                category[1].id === product.categoryID ? 'selected' : ''
                                            }>${category[1].name}</option>
                                    `
                                        )
                                        .join('')}
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2">
                                    Trạng thái sản phẩm
                                </label>
                                <select
                                    class="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="statusProduct">
                                    ${
                                        product.isActive === 1
                                            ? `
                                    <option value="1" selected>Hiển thị sản phẩm</option>
                                    <option value="0">Ẩn sản phẩm</option>
                                    `
                                            : `
                                    <option value="1">Hiển thị sản phẩm</option>
                                    <option value="0" selected>Ẩn sản phẩm</option>
                                    `
                                    }
                                </select>
                            </div>
                            <div class="flex items-center justify-between">
                                <button type="submit"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Lưu thay đổi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`;
};

export default UpdateProduct;
