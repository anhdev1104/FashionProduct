import { addCategories, deleteCategories, getCategories } from '../../api/categories.js';
import Toast from '../../components/Toast.js';
import { router, useEffect, useState } from '../../utilities';
import SidebarAdmin from '../layout/admin/SidebarAdmin';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getCategories();
            const dataReverse = Object.entries(data).reverse();
            setCategories(dataReverse);
        };
        fetchData();
    }, []);

    useEffect(() => {
        // add category
        const nameCategories = document.querySelector('#nameCategories');
        const position = document.querySelector('#position');

        const handleSubmit = async e => {
            e.preventDefault();

            if (nameCategories.value.trim() === '' || position.value.trim() === '')
                return Toast({
                    title: 'Thất bại !',
                    message: 'Vui lòng nhập đầy đủ thông tin danh mục.',
                    type: 'error',
                    duration: 4000,
                });

            // handle ngăn chặn click nhiều lần vào btn Add thêm 1 sản phẩm nhiều lần
            const btnAdd = document.querySelector('#btnAdd');
            btnAdd.classList.add('pointer-events-none');

            const newCategories = {
                id: categories.length + 1,
                name: nameCategories.value,
                position: +position.value,
            };

            await addCategories(newCategories);

            Toast({
                title: 'Thành công !',
                message: 'Thêm danh mục thành công.',
                type: 'success',
                duration: 1000,
            });

            setTimeout(() => {
                router.navigate('/admin/categories');
            }, 1000);
        };

        const form = document.querySelector('#addCategories');
        form?.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, [categories]);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-delete');
        btns.forEach(btn =>
            btn.addEventListener('click', async function () {
                const isDelete = confirm('Bạn muốn xoá danh mục này khỏi trang web ?');
                if (!isDelete) return;

                const id = this.dataset.id;

                await deleteCategories(id);

                Toast({
                    title: 'Đã xoá !',
                    message: 'Xoá danh mục thành công.',
                    type: 'success',
                    duration: 1000,
                });

                setTimeout(() => {
                    router.navigate('admin/categories');
                }, 1000);
            })
        );
    }, [categories]);

    return `
<div id="toast" class="fixed top-8 right-8 z-50"></div>
<main class="bg-gray-200">
    <div class="flex h-screen bg-gray-200 ml-[256px]">
        ${SidebarAdmin()}

        <div class="flex flex-col flex-1">
            <div class="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
                <span class="text-xl font-semibold px-4">Quản lý danh mục</span>
                <div class="rounded-[100rem] w-11 h-11 overflow-hidden">
                    <img src="https://avatars.githubusercontent.com/u/121429011?v=4" alt="" class="object-cover" />
                </div>
            </div>
            <div class="flex flex-1 px-6 py-8 bg-gray-200">
                <div class="w-full md:w-1/2 px-4">
                    <div class="bg-white rounded-lg p-8">
                        <h2 class="text-xl font-semibold mb-4">Thêm danh mục mới</h2>
                        <form method="POST" enctype="multipart/form-data" id="addCategories">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="nameCategories">
                                    Tên danh mục
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nameCategories" type="text" placeholder="Nhập tên danh mục">
                            </div>
                            <div class="mb-4 relative">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="position">
                                    Thứ tự danh mục
                                </label>
                                <input type="text"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="position" placeholder="Nhập vị trí sắp xếp danh mục" />
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
                        <h2 class="text-xl font-semibold mb-4">Danh sách danh mục</h2>
                        <div class="overflow-auto max-h-screen cart-scroll">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th class="text-center">Tên danh mục</th>
                                        <th class="text-center">Vị trí sắp xếp</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${categories
                                        .map(
                                            category =>
                                                `
                                    <tr>
                                        <td class="border p-2 text-center capitalize">${category[1].name}</td>
                                        <td class="border p-2 text-center">${category[1].position}</td>
                                        <td class="border p-2 w-24">
                                            <a href="/admin/categories/${category[0]}"
                                                class="block p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white text-center mb-1">Sửa</a>

                                            <button data-id="${category[0]}"
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

export default Categories;
