import SidebarAdmin from '../layout/admin/SidebarAdmin';

const Products = async () => {
    const res = await fetch('http://localhost:3000/product');
    const products = await res.json();

    return `<main class="bg-gray-200">
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
                        <form>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                    Tên sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="text" placeholder="Nhập tên sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                    Hình ảnh
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="file" placeholder="Nhập hình ảnh sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                                    Giá sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="price" type="text" placeholder="Nhập giá sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                                    Giá sale sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="price" type="text" placeholder="Nhập giá sale sản phẩm">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                                    Mô tả sản phẩm
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="price" type="text" placeholder="Nhập mô tả sản phẩm">
                            </div>

                            <div class="mb-4">
                                <label class="text-gray-700 text-sm font-bold mb-2 block">
                                    <span>Size</span>
                                </label>
                                <div class="flex flex-col gap-3 mt-2">
                                    <div class="flex items-center justify-evenly gap-5">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-blue-500">
                                            <span class="ml-2">S</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="Nhập số lượng">
                                    </div>
                                    <div class="flex items-center justify-evenly gap-5">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-blue-500">
                                            <span class="ml-2">M</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline translate-x-[-2px]"
                                            type="text" placeholder="Nhập số lượng">
                                    </div>
                                    <div class="flex items-center justify-evenly gap-5">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-blue-500">
                                            <span class="ml-2">L</span>
                                        </label>
                                        <input
                                            class="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" placeholder="Nhập số lượng">
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
                                    <option>Chọn danh mục</option>
                                    <option value="1">Sản phẩm mới</option>
                                    <option value="2">Sản phẩm giảm giá</option>
                                    <option value="3">Phụ kiện</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    type="submit">
                                    Thêm sản phẩm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <div class="bg-white rounded-lg p-8 mr-[-4px]">
                        <h2 class="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>
                        <div class="overflow-auto max-h-[733px] cart-scroll">
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
                                            product => `
                                    <tr>
                                        <td class="border p-2 w-[120px] h-[140px]">
                                            <img src="../../src/assets/images/${product.images[0]}" alt="" class="" />
                                        </td>
                                        <td class="border p-2">${product.name}</td>
                                        <td class="border p-2 w-24">
                                            <a href="/admin/products/${product.id}"
                                                class="block p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white text-center mb-1">Chi
                                                tiết</a>
                                            
                                            <a href=""
                                                class="block p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center">Xoá</a>
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
