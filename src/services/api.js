const BASE_URL = 'https://wedev-api.sky.pro/api';

async function request(path = '', options = {}) {
  const token = localStorage.getItem('token');
  const headers = { ...options.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  } catch {
    throw new Error('Ошибка сети. Проверьте подключение.');
  }

  let data = null;
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('json')) {
    data = await response.json().catch(() => null);
  }

  if (!response.ok) {
    const message =
      data?.error ||
      data?.message ||
      (response.status === 400 || response.status === 401
        ? 'Неверный логин или пароль'
        : `Ошибка ${response.status}`);
    throw new Error(message);
  }

  return data;
}

export default request;