import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  signup: (userData) => api.post('/auth/signup', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getUsers: () => api.get('/auth/users'),
};

// Auto Parts API
export const autoPartsAPI = {
  getAllParts: () => api.get('/autoparts'),
  getPartById: (id) => api.get(`/autoparts/${id}`),
  createPart: (partData) => api.post('/autoparts', partData),
  updatePart: (id, partData) => api.put(`/autoparts/${id}`, partData),
  deletePart: (id) => api.delete(`/autoparts/${id}`),
};

export default api;