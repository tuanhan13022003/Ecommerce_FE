
import api from "./axios";

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId: number, page = 1, limit = 5) => {
  try {
    const response = await api.get(`/products`, {
      params: {
        category: categoryId,
        page,
        limit
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error);
    throw error;
  }
};


export async function getAllProductsPage(page: number, limit: number) {
  try {
    const response = await api.get(`/products?page=${page}&limit=${limit}`);
    return response.data; 
  } catch (error) {
    console.error('Lỗi khi lấy tất cả sản phẩm:', error);
    throw error;
  }
}



export async function getProductID(id: number) {
  try {
    const response = await api.get(`/products/${id}`); 
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin chi tiết sản phẩm', error);
    throw error;
  }
}

