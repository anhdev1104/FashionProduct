import axios from 'axios';

const getCategoryName = async categoryID => {
    const { data } = await axios.get('https://project-45d37-default-rtdb.firebaseio.com/categories.json');
    const categories = Object.entries(data);
    const category = categories.find(category => category[1].id === categoryID);
    return category[1].name;
};

// export const getIdCategory = async id => {
//     const { data } = await axios.get('https://project-45d37-default-rtdb.firebaseio.com/categories.json');
//     const categories = Object.entries(data);
//     const category = categories.find(category => category[1].id === id);
//     return category[1].id;
// };

export default getCategoryName;
