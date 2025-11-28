# API Hooks Documentation

This directory contains React Query hooks for all API endpoints in the EstateHub application. All hooks are generated based on the OpenAPI specification and provide type-safe, efficient data fetching and mutation capabilities.

## Structure

Hooks are organized by domain/business logic:

```
hooks/
├── index.ts                    # Re-exports all hooks
├── accounts/                   # Authentication & user management
│   └── hooks.ts               # Auth, account, user profiles
├── landplots/                  # Land plot listings & related
│   └── hooks.ts               # Plots, photos, documents, saved listings, view events
├── messaging/                  # Communication
│   └── hooks.ts               # Messages, threads
├── moderation/                 # Reporting & moderation
│   └── hooks.ts               # Reports
├── locations/                  # Romanian administrative divisions
│   └── hooks.ts               # Siruta (counties, localities)
└── legal/                      # Legal & compliance
    └── hooks.ts               # Terms & conditions acceptance
```

## Usage

### Import hooks

```typescript
import { useLogin, useRegister } from '@/components/api/hooks'
```

## Available Hooks

### Accounts (`accounts/hooks.ts`)

#### Authentication

- `useIsAuthenticated()` - Check if user is authenticated
- `useLogin()` - Login mutation
- `useLogout()` - Logout mutation (client-side)

**Example:**
```typescript
const { mutate: login, isPending } = useLogin()

const handleLogin = () => {
  login(
    {
      username: 'user@example.com',
      password: 'password123',
      rememberMe: true,
    },
    {
      onSuccess: (data) => {
        // Store token from data.idToken
        console.log('Logged in:', data)
      },
    }
  )
}
```

#### Account Management

- `useAccount()` - Get current account details
- `useRegister()` - Register new account
- `useSaveAccount()` - Update account
- `useChangePassword()` - Change password
- `useRequestPasswordReset()` - Request password reset
- `useFinishPasswordReset()` - Complete password reset
- `useActivateAccount(key)` - Activate account

**Example:**
```typescript
const { mutate: register, isPending } = useRegister()

const handleRegister = (formData) => {
  register(
    {
      userName: formData.userName,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      langKey: 'en',
    },
    {
      onSuccess: () => {
        router.push('/login')
      },
    }
  )
}
```

#### User Profiles

- `useUserProfiles(params?)` - Get all user profiles
- `useUserProfile(id, enabled?)` - Get single profile
- `useUserProfilesCount(params?)` - Count profiles
- `useCreateUserProfile()` - Create profile
- `useUpdateUserProfile()` - Update profile
- `usePartialUpdateUserProfile()` - Partial update
- `useDeleteUserProfile()` - Delete profile

### Land Plots (`landplots/hooks.ts`)

#### Land Plot Listings

**Queries:**
- `useLandPlots(params?)` - Get all land plots with filters
- `useInfiniteLandPlots(params?)` - Infinite scroll support
- `useLandPlot(id, enabled?)` - Get single land plot
- `useLandPlotsCount(params?)` - Count land plots

**Mutations:**
- `useCreateLandPlot()` - Create new land plot
- `useUpdateLandPlot()` - Full update
- `usePartialUpdateLandPlot()` - Partial update
- `useDeleteLandPlot()` - Delete land plot

**Example:**
```typescript
// List with filters
const { data: plots, isLoading } = useLandPlots({
  statusEquals: 'PUBLISHED',
  priceGreaterThan: 50000,
  priceLessThan: 200000,
  countyEquals: 'Bucharest',
  page: 0,
  size: 20,
})

// Infinite scroll
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteLandPlots({
  statusEquals: 'PUBLISHED',
  size: 20,
})

// Single plot
const { data: plot } = useLandPlot(123)

// Create
const { mutate: createPlot } = useCreateLandPlot()
createPlot(plotData, {
  onSuccess: () => {
    // Handle success
  },
})
```

#### Saved Listings

- `useSavedListings(eagerload?)` - Get all saved listings
- `useSavedListing(id, enabled?)` - Get single saved listing
- `useCreateSavedListing()` - Add to favorites
- `useUpdateSavedListing()` - Update saved listing
- `usePartialUpdateSavedListing()` - Partial update
- `useDeleteSavedListing()` - Remove from favorites

**Example:**
```typescript
const { data: favorites } = useSavedListings()
const { mutate: addToFavorites } = useCreateSavedListing()

const handleAddFavorite = (landPlotId: number) => {
  addToFavorites({ landPlotId })
}
```

#### Photos (related to land plots)

- `usePhotos(params?)` - Get all photos
- `usePhoto(id, enabled?)` - Get single photo
- `useCreatePhoto()` - Upload photo
- `useUpdatePhoto()` - Update photo
- `usePartialUpdatePhoto()` - Partial update
- `useDeletePhoto()` - Delete photo

#### Documents (related to land plots)

- `useDocuments(params?)` - Get all plot documents
- `useDocument(id, enabled?)` - Get single document
- `useCreateDocument()` - Upload document
- `useUpdateDocument()` - Update document
- `usePartialUpdateDocument()` - Partial update
- `useDeleteDocument()` - Delete document

#### View Events (tracking land plot views)

- `useViewEvents(params?)` - Get all view events
- `useViewEvent(id, enabled?)` - Get single view event
- `useCreateViewEvent()` - Track a property view
- `useUpdateViewEvent()` - Update view event
- `usePartialUpdateViewEvent()` - Partial update
- `useDeleteViewEvent()` - Delete view event

### Messaging (`messaging/hooks.ts`)

- `useMessages(params?)` - Get all messages
- `useMessage(id, enabled?)` - Get single message
- `useCreateMessage()` - Send message
- `useUpdateMessage()` - Update message
- `usePartialUpdateMessage()` - Partial update
- `useDeleteMessage()` - Delete message

### Moderation (`moderation/hooks.ts`)

- `useReports(params?)` - Get all reports
- `useReport(id, enabled?)` - Get single report
- `useCreateReport()` - Create report
- `useUpdateReport()` - Update report
- `usePartialUpdateReport()` - Partial update
- `useDeleteReport()` - Delete report

### Locations (`locations/hooks.ts`)

- `useCounties()` - Get all Romanian counties
- `useLocalitiesByCounty(countyCode, enabled?)` - Get localities in a county
- `useSearchSiruta(params?)` - Search administrative divisions
- `useSirutaByCode(code, enabled?)` - Get Siruta entry by code

**Example:**
```typescript
const { data: counties } = useCounties()
const { data: localities } = useLocalitiesByCounty(selectedCountyCode)
```

### Legal (`legal/hooks.ts`)

- `useTermsAcceptances(params?)` - Get all terms acceptances
- `useTermsAcceptance(id, enabled?)` - Get single acceptance
- `useCreateTermsAcceptance()` - Accept terms
- `useUpdateTermsAcceptance()` - Update acceptance
- `usePartialUpdateTermsAcceptance()` - Partial update
- `useDeleteTermsAcceptance()` - Delete acceptance

## Query Keys

Each hook module exports its query keys for manual cache manipulation:

```typescript
import { landPlotKeys, accountKeys } from '@/components/api/hooks'

// Invalidate all land plots
queryClient.invalidateQueries({ queryKey: landPlotKeys.all })

// Invalidate specific land plot
queryClient.invalidateQueries({ queryKey: landPlotKeys.detail(123) })
```

## Configuration

The API base URL is configured in `/components/api/openapi/core/OpenAPI.ts`:

```typescript
export const OpenAPI: OpenAPIConfig = {
  BASE: 'https://landmarket-v1-dl97f.ondigitalocean.app',
  // ... other config
}
```

To set authentication token:

```typescript
import { OpenAPI } from '@/components/api/openapi'

OpenAPI.TOKEN = yourJWTToken
```

## Common Patterns

### Optimistic Updates

```typescript
const { mutate } = useUpdateLandPlot()

mutate(
  { id, data },
  {
    onMutate: async (variables) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: landPlotKeys.detail(id) })

      // Snapshot previous value
      const previousPlot = queryClient.getQueryData(landPlotKeys.detail(id))

      // Optimistically update
      queryClient.setQueryData(landPlotKeys.detail(id), variables.data)

      return { previousPlot }
    },
    onError: (err, variables, context) => {
      // Rollback on error
      queryClient.setQueryData(
        landPlotKeys.detail(id),
        context?.previousPlot
      )
    },
  }
)
```

### Pagination

```typescript
const [page, setPage] = useState(0)
const { data, isLoading } = useLandPlots({
  page,
  size: 20,
  sort: ['createdAt,desc'],
})
```

### Conditional Fetching

```typescript
// Only fetch if ID is available
const { data } = useLandPlot(landPlotId, !!landPlotId)
```

## Best Practices

1. **Use query keys** - Each hook exposes query keys for cache management
2. **Handle loading states** - Use `isPending`, `isLoading`, `isFetching`
3. **Handle errors** - Use `isError` and `error` properties
4. **Optimistic updates** - For better UX on mutations
5. **Invalidate related queries** - Mutations auto-invalidate related queries
6. **Use enabled option** - Prevent unnecessary requests

## TypeScript

All hooks are fully typed using OpenAPI-generated types:

```typescript
import type { LandPlotDTO, UserProfileDTO } from '@/components/api/openapi'
```

## Contributing

When adding new endpoints:

1. Regenerate OpenAPI client
2. Create corresponding hooks file
3. Export from `hooks/index.ts`
4. Update this README

