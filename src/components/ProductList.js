const ProductList = async targetCategory => {
    const endpoint = 'http://localhost:3000/product';
    const response = await fetch(endpoint);

    const data = await response.json();
    const filterProducts = data.filter(item => item.categoryID === targetCategory).reverse();
    const maxProductsToShow = 6;
    const products = filterProducts.slice(0, maxProductsToShow);

    return `
    <div class="flex flex-wrap mx-[-10px]">
        ${products
            .map(
                product => `
        <div class="px-[10px] mb-5 max-w-[33.3333333333%] flex-shrink-0 flex-grow-0 select-none">
            <a href="/product/${product.id}" class="block relative overflow-hidden mb-[10px] group">
                <img src="./src/assets/images/${
                    product.images[0]
                }" alt="" class="transition-all max-w-full ease-in duration-300">
                <img src="./src/assets/images/${
                    product.images[1]
                }" alt="" class="transition-all max-w-full ease-in duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
            </a>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-5">
                    <span class="font-bold text-second">${product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                    <span class="font-light line-through text-gray-500 text-sm">${product.priceOrigin
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                </div>
                <i class="heart-icon heart fa-regular fa-heart cursor-pointer p-1"></i>
                <i class="heart-icon heart-red fa-solid fa-heart cursor-pointer text-red-500 p-1 hidden"></i>
            </div>
            <div class="font-light text-sm my-2 cursor-pointer transition-all ease-linear duration-75 hover:font-bold"><a href="/product/${
                product.id
            }">${product.name}</a></div>
        </div>
        `
            )
            .join('')}

    </div>
</div>
`;
};

export default ProductList;
