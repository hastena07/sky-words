
import request from './api.js';

export async function register(login, name, password) {
  
  const payload = { login, name, password };
  
  const data = await request('/user', {
    method: 'POST',
    headers: { 'Content-Type': 'json' },
    body: JSON.stringify(payload), 
  });

  if (data?.user?.token) {
    localStorage.setItem('token', data.user.token);
  }
  return data.user;
}

export async function login(loginValue, password) {
  const payload = { login: loginValue, password };
  
  const data = await request('/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'json' },
    body: JSON.stringify(payload),
  });

  if (data?.user?.token) {
    localStorage.setItem('token', data.user.token);
  }
  return data.user;
}

export function logout() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}
