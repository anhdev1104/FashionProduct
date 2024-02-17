import { router, useEffect } from '../../utilities';
import SidebarAdmin from '../layout/admin/SidebarAdmin';
import { getDetailCategories, updateCategories } from '../../api/categories';
import NotFound from '../NotFound';

const UpdateCategories = async ({ id }) => {
    try {
        const res = await getDetailCategories(id);
        const category = await res.data;

        // handle update submit
        useEffect(() => {
            const form = document.querySelector('#formUpdate');
            // selector
            const nameCategory = document.querySelector("input[name='nameCategory']");
            const position = document.querySelector("input[name='position']");

            const handleUpdate = async e => {
                e.preventDefault();

                const newCategory = {
                    name: nameCategory.value,
                    position: +position.value,
                };

                await updateCategories(id, newCategory);

                alert('Update thành công !');
                router.navigate(`/admin/categories`);
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
                                <label class="block text-gray-700 font-semibold mb-2">Tên danh mục</label>
                                <input type="text" value="${category.name}" name="nameCategory"
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Vị trí sắp xếp</label>
                                <input type="text" name="position" value="${category.position}"
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
    } catch (error) {
        console.log(error);
        return NotFound();
    }
};

export default UpdateCategories;
