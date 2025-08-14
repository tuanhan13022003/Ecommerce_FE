import api from "./axios";


export const getCategories = async () => {
  try {
    const response = await api.get('products/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

