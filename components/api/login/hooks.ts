import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const login = async (credentials: {
  username: string
  password: string
  'remember-me': boolean
}) => {
  const response = await axios.post(
    'https://landmarket-v1-dl97f.ondigitalocean.app/api/authenticate',
    credentials,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  })
}
