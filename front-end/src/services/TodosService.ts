import axios from 'axios';
import Todo from '../models/Todo';

const baseUrl = 'http://localhost:8080/api/todos'

export async function getTodos() {
  return axios.get(baseUrl).then(response => response.data)
}

export async function createTodo(todo: Todo) {
  return axios.post(`${baseUrl}/create`, todo).then(response => response.data)
}

export async function updateTodo(id: string, checked: boolean) {
  return axios.put(`${baseUrl}/update/${id}?completed=${checked}`).then(response => response.data)
}

export async function deleteTodo(id: string) {
  return axios.delete(`${baseUrl}/delete/${id}`).then(response => response.data)
}
