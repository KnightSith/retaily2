// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://retaily.pro/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authenticate = async () => {
  try {
    const response = await instance.post('/users/auth', {
      login: "supplier",
      psw: "qwe321",
      type: "web",
      model: navigator.userAgent
    });
    console.log('Authentication response:', response.data); // Лог ответа авторизации
    return response.data.token;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw error;
  }
};

export const getMenu = async (token) => {
  try {
    const response = await instance.get('/admin/menu', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('Menu response:', response.data); // Лог ответа меню
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};
