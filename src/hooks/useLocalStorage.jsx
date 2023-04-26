import { useEffect, useState } from 'react'

export default function UseLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const valueStore =
        typeof storedValue === 'function'
          ? storedValue(storedValue)
          : storedValue

      window.localStorage.setItem(key, JSON.stringify(valueStore))
    } catch (error) {
      console.log(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
