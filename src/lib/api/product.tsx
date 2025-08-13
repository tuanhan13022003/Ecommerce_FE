
// export async function getProductsByCategory(categoryId: number) {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${categoryId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

import api from "./axios";

//     if (!response.ok) {
//       throw new Error('Failed to fetch products by category');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching products by category:', error);
//     throw error;
//   }
// }

// export async function getAllProducts() {
//     try{
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if(!response.ok) {
//             throw new Error('Failed to fetch all products');
//         }   

//         const data =await response.json();
//         return data;
//     }catch (error) {
//         console.error('Error fetching all products:', error);
//         throw error;
//     }
// }


export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId: number) => {
  try {
    const response = await api.get(`/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error);
    throw error;
  }
};

export async function getAllProductsPage(page: number, limit: number) {
  try {
    const response = await api.get(`/products?page=${page}&limit=${limit}`);
    return response.data; // trả về { products, currentPage, totalPages, totalProducts }
  } catch (error) {
    console.error('Lỗi khi lấy tất cả sản phẩm:', error);
    throw error;
  }
}



export async function getProductID(id: number) {
  try {
    const response = await api.get(`/products/${id}`); // ✅ backtick, nội suy biến
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin chi tiết sản phẩm', error);
    throw error;
  }
}