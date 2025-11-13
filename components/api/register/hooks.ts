import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface RegisterData {
  userName: string
  firstName: string
  lastName: string
  email: string
  password: string
  langKey?: string
}

const register = async (data: RegisterData) => {
  const response = await axios.post(
    'https://landmarket-v1-dl97f.ondigitalocean.app/api/register',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  })
}


