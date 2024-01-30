const SidebarAdmin = () => {
    return `<div class="fixed top-0 left-0 bottom-0 bg-gray-800 w-64">
        <div class="flex items-center justify-center bg-primary h-20">
            <img src="../../src/assets/images/logo.svg" alt="" class="text-white" />
        </div>
        <ul class="">
            <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                <a href="/admin" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-house pr-2"></i>
                    Dashboard</a>
            </li>
            <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                <a href="/admin/products" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-shirt pr-2"></i>
                    Quản lý sản phẩm</a>
            </li>
            <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                <a href="#" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-list pr-2"></i>
                    Quản lý danh mục</a>
            </li>
            <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                <a href="#" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-cart-shopping pr-2"></i>
                    Quản lý đơn hàng</a>
            </li>
            <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                <a href="#" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-users pr-2"></i>
                    Quản lý khách hàng</a>
            </li>
            <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                <a href="#" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-right-from-bracket pr-2"></i>
                    Đăng xuất
                </a>
            </li>
        </ul>
</div>`;
};

export default SidebarAdmin;
