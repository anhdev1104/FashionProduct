const endpoint = 'http://localhost:3000/product';

const HomePage = async () => {
    const response = await fetch(endpoint, {
        method: 'GET',
    });

    const product = await response.json();
    return `
        <div>Home page</div>
    `;
};

export default HomePage;
