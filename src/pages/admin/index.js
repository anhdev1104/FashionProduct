const index = () => {
    return `<main class="bg-gray-200">
    <div class="flex h-screen bg-gray-200">
        <div class="h-full bg-gray-800 w-64">
            <div class="flex items-center justify-center bg-primary h-20">
                <img src="../../src/assets/images/logo.svg" alt="" class="text-white"/>
            </div>
            <ul class="">
                <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                    <a href="#" class="block text-gray-200 hover:text-white">
                    <i class="fa-solid fa-house pr-2"></i>
                    Dashboard</a>
                </li>
                <li class="px-6 py-4 text-gray-400 border-t border-gray-700">
                    <a href="#" class="block text-gray-200 hover:text-white">
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
        </div>

        <div class="flex flex-col flex-1 overflow-hidden">
            <div class="flex items-center justify-between h-20 px-6 bg-white border-b">
                <span class="text-xl font-semibold px-4">Bảng điều khiển</span>
                <div class="rounded-[100rem] w-11 h-11 overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/121429011?v=4" alt="" class="object-cover"/>
                </div>
            </div>
            <div class="flex flex-1 px-6 py-8 bg-gray-200">
                <div class="w-full md:w-1/2 px-4">
                    <div class="bg-white rounded-lg p-8">
                        <h2 class="text-xl font-semibold mb-4">Quản lý sản phẩm</h2>
                        <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan turpis vitae justo blandit dapibus.</p>
                        <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Chuyển đến quản lý sản phẩm</a>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <div class="bg-white rounded-lg p-8">
                        <h2 class="text-xl font-semibold mb-4">Quản lý đơn hàng</h2>
                        <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan turpis vitae justo blandit dapibus.</p>
                        <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Chuyển đến quản lý đơn hàng</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`;
};

export default index;
