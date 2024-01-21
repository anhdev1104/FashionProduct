const slideFn = () => {
    const sliderMain = document.querySelector('.slider_main');
    const sliderItems = document.querySelectorAll('.slider_item');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let index = 0;

    // Tự động chuyển slide sau mỗi 3 giây
    function autoSlide() {
        index = (index + 1) % sliderLength;
        sliderMain.style.transform = `translateX(-${index * sliderItemWidth}px)`;
    }

    return setInterval(autoSlide, 3000);
};

export default slideFn;
