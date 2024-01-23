function toggleFavourite() {
    const heartIcons = document.querySelectorAll('.heart-icon');
    function toggleHeart(e) {
        const emptyHeart = e.target.classList.contains('heart');
        const filledHeart = e.target.classList.contains('heart-red');

        if (emptyHeart) {
            e.target.classList.add('hidden');
            e.target.nextElementSibling.classList.remove('hidden');
        } else if (filledHeart) {
            e.target.classList.add('hidden');
            e.target.previousElementSibling.classList.remove('hidden');
        }
    }

    heartIcons.forEach(heartIcon => {
        heartIcon.addEventListener('click', toggleHeart);
    });
}

export default toggleFavourite;
