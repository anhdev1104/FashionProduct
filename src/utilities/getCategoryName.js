const getCategoryName = async categoryID => {
    const res = await fetch('http://localhost:3000/categories');
    const categories = await res.json();
    const category = categories.find(category => category.id === categoryID);
    return category.name;
};

export default getCategoryName;
