import axios from 'axios'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export function fetchMeta() {
  return client.get('/meta')
}

export function fetchRatings() {
  return client.get('/ratings')
}

export function fetchImages() {
  return client.get('/images')
}

export function createUser() {
  return client.post('/auth/registration')
}

export function authenticateUser() {
  return client.post('/auth/authentication')
}

export function checkToken() {
  return client.post('/auth/check-token')
}
