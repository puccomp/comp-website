import axios from 'axios'

export const client = axios.create({
  baseURL: import.meta.env.VITE_COMP_API_URL || 'http://localhost:8080',
  timeout: 10000,
})

client.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('API Error:', error.response || error.message)
    return Promise.reject(error)
  }
)

export const fetchMembers = async () => {
  const res = await client.get('/api/members')
  return res.data
}

export const submitCV = async (formData) => {
  try {
    const res = await client.post('/api/cv-applications', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data
  } catch (error) {
    console.error('Error submitting CV:', error.response || error.message)
    throw error
  }
}

export const submitProjectProposal = async (formData) => {
  try {
    console.log(formData)
    const res = await client.post('/api/project-proposals', formData, {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  } catch (error) {
    console.error('Error project proposal:', error.response || error.message)
    throw error
  }
}

export const fetchAllProjects = async () => {
  const res = await client.get('/api/projects')
  return res.data
}
