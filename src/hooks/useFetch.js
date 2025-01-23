import { useState, useEffect, useCallback } from 'react'

/**
 * @param {Function} fetchFn - Function that makes the call to the API (returns a Promise).
 * @param {Array} args - Arguments that will be passed to the fetch function.
 */
const useFetch = (fetchFn, args = []) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchFn(...args)
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [fetchFn, args])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, error, loading, refetch: fetchData }
}

export default useFetch
