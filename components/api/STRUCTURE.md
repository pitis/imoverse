# API Hooks Structure

## ✅ Final Folder Structure

```
components/api/
├── accounts/hooks.ts          # 🔐 Authentication & User Management
├── landplots/hooks.ts         # 🏞️ Land Plots & Related (Photos, Docs, Saved, Views)
├── messaging/hooks.ts         # 💬 Messages
├── moderation/hooks.ts        # 🛡️ Reports
├── locations/hooks.ts         # 📍 Siruta (Romanian Locations)
├── legal/hooks.ts             # ⚖️ Terms & Conditions
├── login/hooks.ts             # ↪️ Re-exports from accounts/
├── register/hooks.ts          # ↪️ Re-exports from accounts/
├── hooks/index.ts             # 📦 Optional convenience re-exports
└── openapi/                   # 🤖 Generated OpenAPI client
```

## Usage

### Option 1: Import from specific domain (recommended)

```typescript
// Authentication & accounts
import { useLogin, useRegister, useAccount } from '@/components/api/accounts/hooks'

// Land plots & related
import { useLandPlots, useLandPlot, useCreatePhoto } from '@/components/api/landplots/hooks'

// Messaging
import { useMessages, useCreateMessage } from '@/components/api/messaging/hooks'

// Moderation
import { useReports, useCreateReport } from '@/components/api/moderation/hooks'

// Locations
import { useCounties, useLocalitiesByCounty } from '@/components/api/locations/hooks'

// Legal
import { useTermsAcceptances } from '@/components/api/legal/hooks'
```

### Option 2: Import from existing folders (backward compatible)

```typescript
// Still works!
import { useLogin } from '@/components/api/login/hooks'
import { useRegister } from '@/components/api/register/hooks'
```

### Option 3: Import from hooks/index (convenience)

```typescript
// All hooks in one import
import {
  useLogin,
  useRegister,
  useLandPlots,
  useCreatePhoto,
  useMessages,
} from '@/components/api/hooks'
```

## Domain Breakdown

### 🔐 Accounts (`accounts/hooks.ts`)
**What's included:** Everything related to user authentication and account management

- Authentication (login, logout, check auth status)
- Account Management (register, update account, password operations)
- User Profiles (create, read, update, delete user profiles)

### 🏞️ Land Plots (`landplots/hooks.ts`)
**What's included:** Land plots and all directly related entities

- **Land Plots** - Main listings (CRUD, search, filters, infinite scroll)
- **Saved Listings** - Favorites/bookmarks
- **Photos** - Land plot images
- **Documents** - Land plot documents  
- **View Events** - Property view tracking

**Why together?** Photos, documents, and views are properties OF land plots, not independent entities.

### 💬 Messaging (`messaging/hooks.ts`)
**What's included:** Communication between users

- Messages (send, receive, update, delete)
- Message Threads (conversations)

### 🛡️ Moderation (`moderation/hooks.ts`)
**What's included:** Reporting and content moderation

- Reports (create, manage, review)

### 📍 Locations (`locations/hooks.ts`)
**What's included:** Romanian administrative divisions

- Counties (get all)
- Localities (get by county)
- Search Siruta entries

### ⚖️ Legal (`legal/hooks.ts`)
**What's included:** Legal and compliance

- Terms & Conditions acceptance tracking

## Examples

### Complete Signup Flow

```typescript
import { useRegister } from '@/components/api/accounts/hooks'

const { mutate: register, isPending } = useRegister()

register({
  userName: 'johndoe',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: 'secure123',
  langKey: 'en',
})
```

### Land Plot Listing with Filters

```typescript
import { useLandPlots } from '@/components/api/landplots/hooks'

const { data: plots } = useLandPlots({
  statusEquals: 'PUBLISHED',
  priceGreaterThan: 50000,
  countyEquals: 'Bucharest',
  page: 0,
  size: 20,
})
```

### Add Photo to Land Plot

```typescript
import { useCreatePhoto } from '@/components/api/landplots/hooks'

const { mutate: addPhoto } = useCreatePhoto()

addPhoto({
  landPlotId: 123,
  url: 'https://...',
  order: 1,
})
```

### Save a Favorite

```typescript
import { useCreateSavedListing } from '@/components/api/landplots/hooks'

const { mutate: saveFavorite } = useCreateSavedListing()

saveFavorite({
  landPlotId: 123,
})
```

### Location Selection

```typescript
import { useCounties, useLocalitiesByCounty } from '@/components/api/locations/hooks'

const { data: counties } = useCounties()
const { data: localities } = useLocalitiesByCounty(selectedCounty)
```

## Key Features

- ✅ **Domain-based organization** - Related hooks grouped together
- ✅ **Full TypeScript support** - OpenAPI-generated types
- ✅ **Automatic caching** - React Query handles it
- ✅ **Cache invalidation** - Mutations auto-update related queries
- ✅ **Backward compatible** - Existing login/register imports still work
- ✅ **Infinite scroll** - Built into land plots
- ✅ **Optimistic updates** - Ready to implement
- ✅ **No linting errors** - Clean code ✨





