import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type {
  AdminUserDTO,
  UserRegistrationDTO,
  PasswordChangeDTO,
  KeyAndPasswordVM,
  LoginVM,
  JWTToken,
} from '../openapi'
import {
  AccountControllerService,
  AuthenticateControllerService,
  UserControllerService,
  PublicUserControllerService,
} from '../openapi'
import { setToken, removeToken, getToken } from '@/lib/auth'

// ============= Query Keys =============

export const authKeys = {
  all: ['auth'] as const,
}

export const accountKeys = {
  all: ['account'] as const,
  detail: () => [...accountKeys.all, 'detail'] as const,
}

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters?: any) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (login: string) => [...userKeys.details(), login] as const,
}

export const publicUserKeys = {
  all: ['publicUsers'] as const,
  lists: () => [...publicUserKeys.all, 'list'] as const,
  list: (filters?: any) => [...publicUserKeys.lists(), filters] as const,
}

// ============= Authentication Hooks =============

/**
 * Login mutation
 */
export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation<JWTToken, Error, LoginVM>({
    mutationFn: (credentials) =>
      AuthenticateControllerService.authorize(credentials),
    onSuccess: (data) => {
      // Store the token
      if (data.id_token) {
        setToken(data.id_token)
      }
      // Invalidate auth queries on successful login
      queryClient.invalidateQueries({ queryKey: authKeys.all })
      queryClient.invalidateQueries({ queryKey: accountKeys.all })
    },
  })
}

/**
 * Logout (client-side only, invalidates queries)
 */
export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      // Clear any stored tokens
      removeToken()
      return undefined
    },
    onSuccess: () => {
      // Clear all queries on logout
      queryClient.clear()
    },
  })
}

// ============= Account Management Hooks =============

/**
 * Get current account
 */
export const useAccount = () => {
  const token = globalThis.window ? getToken() : null

  return useQuery({
    queryKey: accountKeys.detail(),
    queryFn: () => AccountControllerService.getAccount(),
    enabled: Boolean(token), // Only fetch if token exists
    retry: false, // Don't retry on 401 errors
  })
}

/**
 * Register new account
 */
export const useRegister = () => {
  return useMutation<string, Error, UserRegistrationDTO>({
    mutationFn: (data) => AccountControllerService.registerAccount(data),
  })
}

/**
 * Update account
 */
export const useUpdateAccount = () => {
  const queryClient = useQueryClient()

  return useMutation<AdminUserDTO, Error, UserRegistrationDTO>({
    mutationFn: (data) => AccountControllerService.updateAccount(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: accountKeys.detail() })
    },
  })
}

/**
 * Resend activation email
 */
export const useResendActivation = () => {
  return useMutation<any, Error, string>({
    mutationFn: (email) => AccountControllerService.resendActivation(email),
  })
}

/**
 * Change password
 */
export const useChangePassword = () => {
  return useMutation<any, Error, PasswordChangeDTO>({
    mutationFn: (data) => AccountControllerService.changePassword(data),
  })
}

/**
 * Request password reset
 */
export const useRequestPasswordReset = () => {
  return useMutation<any, Error, string>({
    mutationFn: (email) => AccountControllerService.requestPasswordReset(email),
  })
}

/**
 * Finish password reset
 */
export const useFinishPasswordReset = () => {
  return useMutation<any, Error, KeyAndPasswordVM>({
    mutationFn: (data) => AccountControllerService.finishPasswordReset(data),
  })
}

/**
 * Activate account
 */
export const useActivateAccount = (key: string) => {
  return useQuery({
    queryKey: [...accountKeys.all, 'activate', key],
    queryFn: () => AccountControllerService.activateAccount(key),
    enabled: !!key,
  })
}

// ============= User Hooks (Admin) =============

/**
 * Get all users (admin)
 */
export const useUsers = (params?: {
  page?: number
  size?: number
  sort?: Array<string>
}) => {
  return useQuery({
    queryKey: userKeys.list(params),
    queryFn: () =>
      UserControllerService.getAllUsers(
        params?.page,
        params?.size,
        params?.sort
      ),
  })
}

/**
 * Get single user by login (admin)
 */
export const useUser = (login: string, enabled = true) => {
  return useQuery({
    queryKey: userKeys.detail(login),
    queryFn: () => UserControllerService.getUser(login),
    enabled: enabled && !!login,
  })
}

/**
 * Create user (admin)
 */
export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, AdminUserDTO>({
    mutationFn: (data) => UserControllerService.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
    },
  })
}

/**
 * Update user (admin)
 */
export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation<
    AdminUserDTO,
    Error,
    { login: string; data: AdminUserDTO }
  >({
    mutationFn: ({ login, data }) =>
      UserControllerService.updateUser(login, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: userKeys.detail(variables.login),
      })
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
    },
  })
}

/**
 * Update current user (admin)
 */
export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient()

  return useMutation<AdminUserDTO, Error, AdminUserDTO>({
    mutationFn: (data) => UserControllerService.updateUser1(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
      queryClient.invalidateQueries({ queryKey: accountKeys.detail() })
    },
  })
}

/**
 * Delete user (admin)
 */
export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, string>({
    mutationFn: (login) => UserControllerService.deleteUser(login),
    onSuccess: (_, login) => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
      queryClient.removeQueries({ queryKey: userKeys.detail(login) })
    },
  })
}

// ============= Public User Hooks =============

/**
 * Get all public users
 */
export const usePublicUsers = (params?: {
  page?: number
  size?: number
  sort?: Array<string>
}) => {
  return useQuery({
    queryKey: publicUserKeys.list(params),
    queryFn: () =>
      PublicUserControllerService.getAllPublicUsers(
        params?.page,
        params?.size,
        params?.sort
      ),
  })
}
