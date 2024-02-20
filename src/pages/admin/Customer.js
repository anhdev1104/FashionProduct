import SidebarAdmin from '../layout/admin/SidebarAdmin';
import NotFound from '../NotFound';
import { getUsers, removeUser } from '../../api/customer';
import { router, useEffect } from '../../utilities';

const Customer = async () => {
    try {
        const { data } = await getUsers();
        const users = Object.entries(data);

        useEffect(() => {
            const btns = document.querySelectorAll('.btn-delete');
            btns.forEach(btn =>
                btn.addEventListener('click', async function () {
                    const isDelete = confirm('Bạn muốn xoá tài khoản này ?');
                    if (!isDelete) return;

                    const id = this.dataset.id;
                    await removeUser(id);

                    router.navigate('admin/customer');
                })
            );
        }, []);

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
                                    <th class="px-4 py-2">Tên khách hàng</th>
                                    <th class="px-4 py-2">Email</th>
                                    <th class="px-4 py-2">Số điện thoại</th>
                                    <th class="px-4 py-2">Địa chỉ</th>
                                    <th class="px-4 py-2">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users
                                    .map(
                                        user => `
                                <tr>
                                    <td class="border p-2 text-center">${user[1].fullname}</td>
                                    <td class="border p-2 text-center">${user[1].email}</td>
                                    <td class="border p-2 text-center">${user[1].phonenumber}</td>
                                    <td class="border p-2 text-center">${user[1].address}</td>
                                    <td class="border p-2 text-center w-28">
                                        <button data-id="${user[0]}"
                                            class="btn-delete min-w-24 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center">Block</button>
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
</main>`;
    } catch (error) {
        console.log(error);
        return NotFound();
    }
};

export default Customer;
