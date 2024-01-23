import Navigo from 'navigo';

const router = new Navigo('/', { linksSelector: 'a', hash: true, popstate: true });
const render = async (content, target, ...events) => {
    target.innerHTML = await content();
    [...events].forEach(eventItem => eventItem());
};

// Chặn hành vi mặc định của liên kết
// document.addEventListener('click', function (e) {
//     const targetElement = e.target;

//     if (targetElement.tagName === 'A') {
//         e.preventDefault();
//         router.navigate(targetElement.getAttribute('href'));
//     }
// });

export { render, router };
