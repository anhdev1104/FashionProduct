// handle add active image
export function handleAddImage() {
    const listImages = document.querySelectorAll('.details-item-img');
    const mainImage = document.querySelector('#details-img');

    [...listImages].forEach(item =>
        item.addEventListener('click', function () {
            [...listImages].forEach(item => item.classList.remove('border-[rgb(189,24,28)]'));
            this.classList.toggle('border-[rgb(189,24,28)]');
            mainImage.src = this.querySelector('img').src;
        })
    );
}
