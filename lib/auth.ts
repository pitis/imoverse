/**
 * Token management utilities
 */

const TOKEN_KEY = 'auth_token'

/**
 * Get the stored authentication token
 */
export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(TOKEN_KEY)
}

/**
 * Store the authentication token
 */
export const setToken = (token: string): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem(TOKEN_KEY, token)
  // Update OpenAPI config
  updateOpenAPIToken(token)
}

/**
 * Remove the authentication token
 */
export const removeToken = (): void => {
  if (typeof window === 'undefined') return
  localStorage.removeItem(TOKEN_KEY)
  // Clear OpenAPI config
  updateOpenAPIToken(undefined)
}

/**
 * Update the OpenAPI config with the token
 */
const updateOpenAPIToken = (token: string | undefined): void => {
  // Dynamically import to avoid SSR issues and circular dependencies
  if (typeof window !== 'undefined') {
    import('../components/api/openapi/core/OpenAPI').then((module) => {
      module.OpenAPI.TOKEN = token
    })
  }
}

/**
 * Initialize OpenAPI token from storage (call on app load)
 */
export const initializeAuth = (): void => {
  if (typeof window === 'undefined') return
  const token = getToken()
  if (token) {
    updateOpenAPIToken(token)
  }
}

