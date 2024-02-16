const getCategoryName = async categoryID => {
    const res = await fetch('https://project-45d37-default-rtdb.firebaseio.com/categories.json');
    const categories = await res.json();
    const category = categories.find(category => category.id === categoryID);
    return category.name;
};

export default getCategoryName;
