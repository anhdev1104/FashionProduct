// handle add active image
export function handleAddImage() {
    const listImages = document.querySelectorAll('.details-item-img');
    const mainImage = document.querySelector('#details-img');

    [...listImages].forEach(item =>
        item.addEventListener('click', function () {
            [...listImages].forEach(item => item.classList.remove('border-[rgb(189,24,28)]'));
            this.classList.add('border-[rgb(189,24,28)]');
            mainImage.src = this.querySelector('img').src;
        })
    );
}

// box modal show (tìm đúng kích thước)
export function modalShow() {
    const modalSize = document.querySelector('#modal-size');
    const overlayModal = document.querySelector('#overlay');
    const closeIconModal = document.querySelector('.close-icon');
    const boxModal = document.querySelector('#box-size');

    modalSize.addEventListener('click', () => {
        overlayModal.style.display = 'flex';
    });

    closeIconModal.addEventListener('click', () => {
        overlayModal.style.display = 'none';
    });

    overlayModal.addEventListener('click', () => {
        overlayModal.style.display = 'none';
    });

    boxModal.addEventListener('click', e => {
        e.stopPropagation();
    });
}

export function toggleActiveSize() {
    const btnSizes = document.querySelectorAll('.item-option');
    const innerSize = document.querySelector('#innerSize');

    [...btnSizes].forEach(item => {
        item.addEventListener('click', function () {
            [...btnSizes].forEach(item => item.classList.remove('item-option-active'));
            this.classList.toggle('item-option-active');
            innerSize.textContent = this.textContent;
        });
    });
}
