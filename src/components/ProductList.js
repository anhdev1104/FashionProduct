import getCategoryName from '../utilities/getCategoryName';

const ProductList = async targetCategory => {
    const endpoint = 'https://project-45d37-default-rtdb.firebaseio.com/product.json';
    const response = await fetch(endpoint);
    const data = await response.json();
    const convertData = Object.entries(data);
    const filterProducts = convertData.filter(item => item[1].categoryID === targetCategory).reverse();
    const maxProductsToShow = 6;
    const products = filterProducts.filter(product => product[1].isActive === 1).slice(0, maxProductsToShow);
    // lấy ra tên category của sp detail
    const category = await getCategoryName(targetCategory);
    // lấy số lượng item sp của danh mục
    const totalItem = filterProducts.length;
    return `
<div class="border-b border-borderColor mb-5 flex items-center justify-between pb-[5px]">
    <div class="gap-5 flex items-center">
        <p class="text-second font-bold uppercase">${category}</p>
        <span class="font-light text-gray-500">(${totalItem} Item)</span>
    </div>
    <div class="cursor-pointer gap-3 font-bold items-center flex">
        <i class="fa-solid fa-list-ol"></i>
        <span>SORT</span>
    </div>
</div>

<div class="flex flex-wrap mx-[-10px]">
    ${products
        .map(
            product => `
    <div class="px-[10px] mb-5 max-w-[33.3333333333%] flex-shrink-0 flex-grow-0 select-none">
        <a href="/product/${product[0]}" class="block relative overflow-hidden mb-[10px] group">
            <img src="./src/assets/images/${
                product[1].images[0]
            }" alt="" class="transition-all max-w-full ease-in duration-300">
            <img src="./src/assets/images/${product[1].images[1]}" alt=""
                class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
        </a>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-5">
                <span class="font-bold text-second">${product[1].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                <span class="font-light line-through text-gray-500 text-sm">${product[1].priceOrigin
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
            </div>
            <i class="heart-icon heart fa-regular fa-heart cursor-pointer p-1"></i>
            <i class="heart-icon heart-red fa-solid fa-heart cursor-pointer text-red-500 p-1 hidden"></i>
        </div>
        <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a
                href="/product/${product[0]}">${product[1].name}</a></div>
    </div>
    `
        )
        .join('')}
</div>
</div>
`;
};

export default ProductList;
