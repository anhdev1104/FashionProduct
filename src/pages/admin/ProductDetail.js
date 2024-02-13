import getCategoryName from '../../utilities/getCategoryName';
import SidebarAdmin from '../layout/admin/SidebarAdmin';

const ProductDetail = async ({ id }) => {
    const res = await fetch('http://localhost:3000/product');
    const products = await res.json();
    const product = products.find(product => product.id === +id);
    console.log(product.size);
    return `<main class="bg-gray-200">
    <div class="flex h-screen bg-gray-200 ml-[256px]">
        ${SidebarAdmin()}

        <div class="flex flex-col flex-1">
            <div class="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
                <span class="text-xl font-semibold px-4">Chi tiết quản lý sản phẩm</span>
                <div class="rounded-[100rem] w-11 h-11 overflow-hidden">
                    <img src="https://avatars.githubusercontent.com/u/121429011?v=4" alt="" class="object-cover" />
                </div>
            </div>
            <div class="flex flex-1 px-6 py-8 bg-gray-200">
                <div class="bg-white p-8 rounded shadow-md w-full">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead>
                                <tr class="bg-gray-200">
                                    <th class="px-4 py-2">Tên sản phẩm</th>
                                    <th class="px-4 py-2">Ảnh 1</th>
                                    <th class="px-4 py-2">Ảnh 2</th>
                                    <th class="px-4 py-2">Giá sale</th>
                                    <th class="px-4 py-2">Giá gốc</th>
                                    <th class="px-4 py-2">Số lượng size</th>
                                    <th class="px-4 py-2">Mô tả</th>
                                    <th class="px-4 py-2">Danh mục</th>
                                    <th class="px-4 py-2">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2 text-center">${product.name}</td>
                                    <td class="border p-2 w-[130px]">
                                            <img src="../../src/assets/images/${
                                                product.images[0]
                                            }" alt="" class="object-contain" />
                                    </td>
                                    <td class="border p-2 w-[130px]">
                                            <img src="../../src/assets/images/${
                                                product.images[1]
                                            }" alt="" class="object-contain" />
                                    </td>
                                    <td class="border p-2 text-center">${product.price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</td>
                                        <td class="border p-2 text-center">${product.priceOrigin
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</td>
                                    <td class="border p-2 text-center w-36">
                                        ${product.size
                                            .map(
                                                item => `
                                            <div class="mb-2">
                                                <span class="font-medium">${item.label}</span>
                                                còn <span class="font-medium">${item.quantity}</span> sp
                                            </div>
                                        `
                                            )
                                            .join('')}
                                    </td>
                                    <td class="border p-2 text-center">${product.description}</td>
                                    <td class="border p-2 text-center w-36">${await getCategoryName(
                                        product.categoryID
                                    )}</td>
                                    <td class="border p-2 text-center w-28">
                                        <a href=""
                                            class="block p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white text-center mb-1">Chỉnh
                                            sửa</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`;
};

export default ProductDetail;
