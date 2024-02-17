const addModalCart = e => {
    const cartIcon = document.querySelector('#cartIcon');
    const overlayModal = document.querySelector('#overlayCart');
    const closeIcon = document.querySelector('#close-icon-cart');
    const cart = document.querySelector('#cart');

    cartIcon?.addEventListener('click', () => {
        overlayModal.style.display = 'block';
        cart.classList.remove('hidden');
    });

    closeIcon?.addEventListener('click', () => {
        overlayModal.style.display = 'none';
    });

    overlayModal?.addEventListener('click', () => {
        overlayModal.style.display = 'none';
    });

    cart?.addEventListener('click', e => {
        e.stopPropagation();
    });
};

export default addModalCart;
