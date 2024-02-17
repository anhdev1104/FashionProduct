import { getCategories } from '../api/categories';

const getCategoryName = async categoryID => {
    const { data } = await getCategories();
    const categories = Object.entries(data);
    const category = categories.find(category => category[1].id === categoryID);
    return category[1].name;
};

export default getCategoryName;
