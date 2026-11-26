// src/services/tasks.js
import request from './api.js';

export async function getTasks() {
  const data = await request('/kanban');
  return data.tasks;
}

export async function getTask(id) {
  const data = await request(`/kanban/${id}`);
  return data.task;
}

export async function createTask(task) {
  const data = await request('/kanban', {
    method: 'POST',
    headers: { 'Content-Type': 'json' },
    body: JSON.stringify(task),
  });
  return data.tasks;
}

export async function updateTask(id, task) {
  const data = await request(`/kanban/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return data.tasks;
}

export async function deleteTask(id) {
  const data = await request(`/kanban/${id}`, {
    method: 'DELETE',
  });
  return data.tasks;
}