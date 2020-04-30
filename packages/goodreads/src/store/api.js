import axios from 'axios'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export function fetchMeta() {
  return client.get('/meta')
}

export function fetchRating() {
  return client.get('/ratings')
}

export function fetchImages() {
  return client.get('/images')
}

export function createUser(username, password) {
  return client.post('/auth/registration')
}

export function authenticateUser(username, password) {
  return client.post('/auth/authenticate')
}

export function checkToken() {
  return client.post('/auth/check-token')
}
