# React + Tailwind CSS Template 🎨

A production-ready React template with **Tailwind CSS**, TypeScript, and best practices architecture. This template uses pure Tailwind CSS without any component library dependencies.

## ✨ Features

- ⚡️ **Vite** - Lightning fast dev server
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Dark/Light Theme** - System preference support
- 📱 **Responsive** - Mobile-first design
- 🔒 **TypeScript** - Full type safety
- 🏗️ **Clean Architecture** - Scalable structure
- 🎯 **Services Layer** - Clean API integration
- 🪝 **Custom Hooks** - Reusable logic
- 🔧 **Utilities** - Helper functions
- 📦 **Zustand** - Lightweight state management

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # UI Components
│   ├── ui/             # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── common/         # Shared components
│       ├── StatCard.tsx
│       ├── LoadingSpinner.tsx
│       └── EmptyState.tsx
│
├── layouts/            # Layout Components
│   ├── AppLayout.tsx   # Main app layout with sidebar
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── Header.tsx      # Top navigation header
│
├── pages/              # Route Pages (Smart Components)
│   ├── DashboardPage.tsx
│   ├── UsersPage.tsx
│   └── SettingsPage.tsx
│
├── views/              # Page Views (Presentational)
│   ├── DashboardView.tsx
│   ├── UsersView.tsx
│   └── SettingsView.tsx
│
├── services/           # External Services
│   ├── api/
│   │   ├── client.ts
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   └── storage.service.ts
│
├── hooks/              # Custom React Hooks
│   ├── useTheme.ts
│   ├── useLocalStorage.ts
│   └── useMediaQuery.ts
│
├── utils/              # Utility Functions
│   ├── cn.ts           # Class name merger
│   ├── formatters.ts   # Data formatters
│   ├── validators.ts   # Validation functions
│   └── helpers.ts      # General helpers
│
├── types/              # TypeScript Types
│   ├── api.types.ts
│   ├── user.types.ts
│   ├── common.types.ts
│   └── index.ts
│
├── constants/          # App Constants
│   ├── routes.const.ts
│   ├── api.const.ts
│   └── app.const.ts
│
├── config/             # Configuration
│   └── theme.config.ts
│
└── store/              # State Management (Zustand)
    ├── authStore.ts
    ├── themeStore.ts
    └── sidebarStore.ts
```

## 🏗️ Architecture Patterns

### 1. Layout → Page → View Pattern

**Separation of Concerns:**
- **Layout**: Structure & navigation
- **Page**: Data fetching & business logic
- **View**: Pure presentation (no logic)

### 2. Pure Tailwind Components

All UI components are built with pure Tailwind CSS:

```tsx
// components/ui/Button.tsx
export function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
  }
  
  return (
    <button className={cn(baseStyles, variants[variant])} {...props}>
      {children}
    </button>
  )
}
```

### 3. Services Architecture

Clean API layer with type safety:

```typescript
// services/api/user.service.ts
export class UserService {
  static async getUsers(params?: QueryParams): Promise<PaginatedResponse<User>> {
    const response = await apiClient.get<PaginatedResponse<User>>(
      API_ENDPOINTS.USERS,
      params
    )
    return response.data
  }
}
```

### 4. Custom Hooks

Reusable logic extraction:

```typescript
// hooks/useTheme.ts
export function useTheme() {
  const { theme, setTheme } = useThemeStore()
  
  const toggleTheme = () => {
    const newTheme = theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    setTheme(newTheme)
  }
  
  return { theme, setTheme, toggleTheme, isDark: theme === ThemeMode.DARK }
}
```

### 5. State Management (Zustand)

Lightweight & type-safe state:

```typescript
// store/authStore.ts
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user, isAuthenticated: true }),
      clearAuth: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'auth-storage' }
  )
)
```

## 🎨 Theme System

```typescript
// Automatic dark mode support
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore()
  
  useEffect(() => {
    const isDark = theme === ThemeMode.DARK || 
      (theme === ThemeMode.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  }, [theme])
  
  return <>{children}</>
}
```

## 📝 TypeScript Best Practices

```typescript
// Full type safety across the app
export interface ApiResponse<T> {
  data: T
  message: string
  status: number
}

export interface User extends BaseEntity {
  email: string
  name: string
  role: UserRole
  status: Status
}
```

## 🛠️ Development

### Environment Variables

Create `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=React Tailwind Template
```

### Code Quality

```bash
# Run linter
npm run lint

# Type check
npm run type-check
```

## 📦 Build

```bash
# Build for production
npm run build

# Output: dist/
```

## 🎯 Best Practices

✅ **Component Structure**: Atomic design principles
✅ **Type Safety**: Full TypeScript coverage
✅ **Pure Tailwind**: No component library dependencies
✅ **Custom Components**: Reusable UI components
✅ **Error Handling**: Global error boundaries
✅ **Loading States**: Loading spinners
✅ **Code Splitting**: Lazy loading for routes
✅ **Performance**: React.memo for expensive components
✅ **Accessibility**: ARIA labels and keyboard navigation

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 📄 License

MIT

---

**Happy Coding!** 🚀

