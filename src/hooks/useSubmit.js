import { useState } from 'react'

const useSubmit = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (formData, submitFunc) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await submitFunc(formData)
      setSuccess(true)
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit forms')
    } finally {
      setLoading(false)
    }
  }

  return { handleSubmit, loading, error, success }
}

export default useSubmit
