const scrollProducts = () => {
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const listFavorite = document.querySelector('.favorite-list');
    // const item = document.querySelectorAll('.product-item');
    const itemWidth = 335;

    let debounceTimeout;
    function handleNextClick() {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        debounceTimeout = setTimeout(() => {
            listFavorite.scrollLeft += itemWidth;
        }, 200);
    }
    btnNext.addEventListener('click', handleNextClick);

    function handlePrevClick() {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        debounceTimeout = setTimeout(() => {
            listFavorite.scrollLeft -= itemWidth;
        }, 200);
    }
    btnPrev.addEventListener('click', handlePrevClick);

    listFavorite.addEventListener('wheel', function (e) {
        e.preventDefault();
        const delta = e.deltaY * 3.3;
        this.scrollLeft += delta;
    });
};

export default scrollProducts;
