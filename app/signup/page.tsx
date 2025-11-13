'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Home } from 'lucide-react'
import { useRegister } from '@/components/api/register/hooks'

const signupSchema = z
  .object({
    userName: z.string().min(3, 'Username must be at least 3 characters'),
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: 'You must accept the Terms of Service and Privacy Policy',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const router = useRouter()
  const { mutate: register, isPending, isError, error } = useRegister()

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
  })

  const termsAccepted = watch('termsAccepted')

  const onSubmit = (data: SignupFormData) => {
    register(
      {
        userName: data.userName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        langKey: 'en', // default language
      },
      {
        onSuccess: () => {
          // Redirect to login page after successful registration
          router.push('/login')
        },
      }
    )
  }

  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center justify-center mb-4'>
            <Link href='/' className='flex items-center gap-2'>
              <Home className='h-8 w-8 text-primary' />
              <span className='text-2xl font-bold text-foreground'>
                EstateHub
              </span>
            </Link>
          </div>
          <CardTitle className='text-2xl text-center'>
            Create an account
          </CardTitle>
          <CardDescription className='text-center'>
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className='space-y-4'>
            {isError && (
              <div className='p-3 text-sm text-red-500 bg-red-50 dark:bg-red-950/50 rounded-md'>
                {(error as any)?.response?.data?.detail ||
                  'Registration failed. Please try again.'}
              </div>
            )}
            <div className='space-y-2'>
              <Label htmlFor='userName'>Username</Label>
              <Input
                id='userName'
                type='text'
                placeholder='johndoe'
                {...registerField('userName')}
                disabled={isPending}
              />
              {errors.userName && (
                <p className='text-sm text-red-500'>
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First name</Label>
                <Input
                  id='firstName'
                  type='text'
                  placeholder='John'
                  {...registerField('firstName')}
                  disabled={isPending}
                />
                {errors.firstName && (
                  <p className='text-sm text-red-500'>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last name</Label>
                <Input
                  id='lastName'
                  type='text'
                  placeholder='Doe'
                  {...registerField('lastName')}
                  disabled={isPending}
                />
                {errors.lastName && (
                  <p className='text-sm text-red-500'>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                {...registerField('email')}
                disabled={isPending}
              />
              {errors.email && (
                <p className='text-sm text-red-500'>{errors.email.message}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Create a password'
                {...registerField('password')}
                disabled={isPending}
              />
              {errors.password && (
                <p className='text-sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <Label htmlFor='confirmPassword'>Confirm password</Label>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='Confirm your password'
                {...registerField('confirmPassword')}
                disabled={isPending}
              />
              {errors.confirmPassword && (
                <p className='text-sm text-red-500'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='terms'
                  checked={termsAccepted}
                  onCheckedChange={(checked) => {
                    registerField('termsAccepted').onChange({
                      target: { value: checked, name: 'termsAccepted' },
                    })
                  }}
                  disabled={isPending}
                />
                <label
                  htmlFor='terms'
                  className='text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  I agree to the{' '}
                  <Link href='/terms' className='text-primary hover:underline'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href='/privacy'
                    className='text-primary hover:underline'>
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.termsAccepted && (
                <p className='text-sm text-red-500'>
                  {errors.termsAccepted.message}
                </p>
              )}
            </div>
            <Button
              className='w-full'
              size='lg'
              type='submit'
              disabled={isPending}>
              {isPending ? 'Creating Account...' : 'Create Account'}
            </Button>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-border' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-card px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant='outline'
              type='button'
              disabled={isPending}
              className='w-full'>
              <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
                <path
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  fill='#34A853'
                />
                <path
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  fill='#EA4335'
                />
              </svg>
              Google
            </Button>
          </CardContent>
        </form>
        <CardFooter>
          <p className='text-center text-sm text-muted-foreground w-full'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='text-primary hover:underline font-medium'>
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
