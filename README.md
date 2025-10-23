# Pokédex - Modern Web Application

A responsive, feature-rich Pokédex web application built with Vue 3, TypeScript, and Vuetify. This project demonstrates modern web development best practices with a focus on clean architecture, type safety, and user experience.

## 🎯 Project Overview

This application allows users to:

- Browse a comprehensive list of Pokémon with infinite scroll
- Search for Pokémon by name with real-time filtering
- View detailed information about each Pokémon (sprites, types, weight, height)
- Save favorite Pokémon with persistent storage
- Share Pokémon information to clipboard
- Experience a fully responsive design across all devices

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have installed:

- **Node.js** 16 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** for cloning the repository

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/Carlosj21/vuekedex.git
cd vuekedex
```

#### 2. Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

This will download and install all packages listed in `package.json`.

#### 3. Start Development Server

Run the development server to preview your application locally:

```bash
npm run dev
```

Expected output:

```
  VITE v7.1.10  ready in 977 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
  ➜  Vue DevTools: Press Alt(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
  ➜  press h + enter to show help
```

Open your browser and navigate to `http://localhost:5173/` to see the application.

Open your browser and navigate to `http://localhost:5173/__devtools__/` to see the vue dev-tools.

#### 4. Build for Production

When you're ready to deploy, create an optimized production build:

```bash
npm run build
```

This command will:

- Run type checking to ensure no TypeScript errors
- Build the application with Vite optimization
- Create a `dist/` folder with production-ready files

The build output will be in the `dist/` directory, ready to be deployed.

---

## 📝 NPM Scripts Reference

### Development Scripts

**`npm run dev`**

- **Purpose:** Starts the development server with hot module replacement (HMR)
- **When to use:** During active development
- **What it does:** Runs Vite development server on `http://localhost:5173/`
- **Features:** Auto-reload on file changes, instant updates

---

**`npm run build`**

- **Purpose:** Creates an optimized production build with type checking
- **When to use:** Before deploying to production
- **What it does:**
  1. Runs `type-check` (TypeScript validation)
  2. Runs `build-only` (Vite production build)
  3. Both run in parallel for efficiency
- **Output:** Creates `dist/` folder with optimized files
- **Note:** Uses `run-p` (npm-run-all) to run scripts in parallel

---

**`npm run preview`**

- **Purpose:** Previews the production build locally
- **When to use:** After running `npm run build` to verify production output
- **What it does:** Serves the `dist/` folder locally to simulate production environment
- **Access:** Usually available at `http://localhost:4173/`

---

### Quality & Maintenance Scripts

**`npm run type-check`**

- **Purpose:** Validates TypeScript code for type errors
- **When to use:** Before building or committing code
- **What it does:** Runs `vue-tsc --build` to check for type issues
- **Benefits:** Catches bugs before runtime, improves code quality
- **Note:** This runs automatically before `npm run build`

---

**`npm run build-only`**

- **Purpose:** Builds the project without type checking
- **When to use:** When you only want to build (rarely used directly)
- **What it does:** Runs Vite build process
- **Note:** Usually run as part of `npm run build`, not called directly

---

**`npm run test:unit`**

- **Purpose:** Runs unit tests with Vitest
- **When to use:** During development and before commits
- **What it does:** Executes all test files in the project
- **Watch mode:** Can be run with `--watch` flag for continuous testing
- **Example:** `npm run test:unit -- --watch`

---

**`npm run lint`**

- **Purpose:** Analyzes and fixes code style issues
- **When to use:** Before committing code to maintain consistency
- **What it does:**
  1. Runs ESLint to find code issues
  2. Automatically fixes fixable problems with `--fix` flag
- **Checks:** Code style, best practices, potential bugs
- **Example output:** Fixes unused variables, corrects indentation

---

**`npm run format`**

- **Purpose:** Formats all source code according to Prettier rules
- **When to use:** Before committing to ensure consistent formatting
- **What it does:**
  1. Runs Prettier formatter
  2. Automatically formats all files in `src/` directory
  3. Applies consistent spacing, quotes, semicolons, etc.
- **Benefits:** Ensures clean, consistent code formatting across the project

---

## 📋 Development Workflow

### Typical Development Cycle

1. **Start Development Server**

   ```bash
   npm run dev
   ```

   Keep this running while developing. Changes auto-reload in browser.

2. **Write Code**
   - Make changes to components, stores, or styles
   - See changes instantly in the browser

3. **Check Code Quality** (Before commits)

   ```bash
   npm run lint
   npm run format
   npm run type-check
   ```

4. **Run Tests** (If applicable)

   ```bash
   npm run test:unit
   ```

5. **Build for Deployment**

   ```bash
   npm run build
   ```

6. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 🏗️ Architecture & Design Principles

### DRY (Don't Repeat Yourself)

This project strictly adheres to the DRY principle throughout its architecture:

**Centralized Type Definitions:**

- All TypeScript types are defined in `src/types/` directory
- Props types, API types, and store types are reusable across components
- Single source of truth for data structures prevents inconsistencies

**Component Reusability:**

- `pokeFavoriteBtn` component is used in both the list view and detail modal
- `pokeSearchBar` with configurable props (`disabled`, `loading`)
- `pokeDetailDialog` for displaying Pokémon information
- Shared utility functions in `src/utils/`

**Store Organization:**

- Separated concerns: `state.ts`, `actions.ts`, `getters.ts`
- Favorites store independent from Pokemon store
- Reusable store logic across multiple components

**API Abstraction:**

- Single `pokemonApi.ts` file handles all API calls
- `axiosHelper.ts` provides centralized HTTP configuration
- Error handling in one place via `errorHandler.ts`

**Styling Strategy:**

- SCSS organized folder structure (7-1 methodology with a twist) (`base/`, `components/`, `layout/`, `themes/`, `utils/`, `vendors/`, `views/`)
- Utility classes in `_utils.scss`
- Component-specific styles scoped and reusable

---

## 🛠️ Technology Stack

### Core Framework

**Vue 3** ✓ _Composition API_

- **Why:** Modern, reactive framework with excellent TypeScript support
- **Benefits:** Component-based architecture, reactive data binding, excellent developer experience

**TypeScript** ✓ _Strict Mode_

- **Why:** Static typing for JavaScript to catch errors at compile time
- **Benefits:** Better IDE support, type safety, self-documenting code, prevents runtime errors

### UI & Styling

**Vuetify 3** ✓ _Material Design Components_

- **Why:** Comprehensive component library following Material Design 3
- **Benefits:** Pre-built responsive components, theming system, accessibility support, consistent UI

**SCSS** ✓ _CSS Preprocessor_

- **Why:** Advanced CSS features like variables, nesting, mixins
- **Benefits:** Better code organization, maintainability, nested responsive design

### State Management

**Pinia** ✓ _Modern Vue Store_

- **Why:** Lightweight, intuitive state management solution built for Vue 3
- **Benefits:** Excellent TypeScript support, smaller bundle size than Vuex, simple setup

### Routing

**Vue Router 4** ✓ _Client-side Routing_

- **Why:** Official Vue router with full TypeScript support
- **Benefits:** Dynamic routes, lazy loading, history mode, 404 page handling

### HTTP & APIs

**Axios** ✓ _HTTP Client_

- **Why:** Promise-based HTTP client with interceptors
- **Benefits:** Request/response interceptors, error handling, timeout management

**PokeAPI** ✓ _Third-party API_

- **Why:** Free, comprehensive Pokémon database API
- **Benefits:** No authentication required, well-documented, reliable

### Build & Development

**Vite** ✓ _Build Tool_

- **Why:** Modern, lightning-fast build tool for Vue 3
- **Benefits:** Instant hot module replacement, optimized production builds, fast development server

**Vitest** ✓ _Unit Testing_

- **Why:** Fast unit testing framework for Vue 3
- **Benefits:** Compatible with Jest syntax, Vite-native, quick test execution

**ESLint** ✓ _Code Linting_

- **Why:** Analyzes code for potential errors and style issues
- **Benefits:** Enforces best practices, catches bugs early, consistent code style

**Prettier** ✓ _Code Formatter_

- **Why:** Opinionated code formatter for consistent formatting
- **Benefits:** Removes style debates, ensures consistent code style across the project

### Storage

**LocalStorage** ✓ _Browser Storage_

- **Why:** Client-side persistent storage for favorites
- **Benefits:** No backend required, instant persistence, user privacy

---

## 📁 Project Structure

```
└── 📁src
    └── 📁__tests__
        ├── App.spec.ts
    └── 📁api
        └── 📁helpers
            ├── axiosHelper.ts
        ├── pokemonApi.ts
    └── 📁assets
        └── 📁sass
            └── 📁base
                ├── _base.scss
                ├── _colors.scss
            └── 📁components
                ├── _components.scss
                ├── _pokeDetailDialog.scss
                ├── _pokeLoader.scss
            └── 📁layout
                ├── _layout.scss
            └── 📁themes
                ├── _themes.scss
            └── 📁utils
                ├── _utils.scss
            └── 📁vendors
                ├── _vendors.scss
            └── 📁views
                ├── _views.scss
            ├── main.scss
    └── 📁components
        └── 📁pokeDetailDialog
            ├── pokeDetailDialog.vue
        └── 📁pokeFavoriteBtn
            ├── pokeFavoriteBtn.vue
        └── 📁pokeList
            ├── pokeList.vue
            ├── pokeListItem.vue
        └── 📁pokeLoader
            ├── pokeLoader.vue
        └── 📁pokeSearchBar
            ├── pokeSearchBar.vue
    └── 📁plugins
        ├── pinia.ts
        ├── vuetify.ts
    └── 📁router
        ├── index.ts
    └── 📁stores
        └── 📁favorites
            ├── actions.ts
            ├── getters.ts
            ├── index.ts
            ├── state.ts
        └── 📁pokemon
            ├── actions.ts
            ├── getters.ts
            ├── index.ts
            ├── state.ts
    └── 📁types
        └── 📁api
            ├── axiosHelperType.ts
            ├── getPokemonByNameOrIdType.ts
            ├── getPokemonsType.ts
            ├── pokemonSpritesType.ts
        └── 📁components
            ├── pokeDetailDialogPropsType.ts
            ├── pokeFavoriteBtnPropsType.ts
            ├── pokeListItemPropsType.ts
            ├── pokeListPropsType.ts
            ├── pokeLoaderPropsType.ts
            ├── pokeSearchBarPropsType.ts
        └── 📁stores
            ├── pokemonFavoriteType.ts
            ├── pokemonStoreType.ts
    └── 📁utils
        ├── errorHandler.ts
    └── 📁views
        ├── pokeError.vue
        ├── pokeMain.vue
        ├── pokeWelcome.vue
    ├── App.vue
    ├── main.ts
    └── shims-vue.d.ts
```

---

## 🎨 Key Features

### 1. Infinite Scroll Loading

- Automatically loads more Pokémon as user scrolls
- IntersectionObserver API for performance optimization
- Seamless user experience

### 2. Smart Search

- Exact match search (fastest)
- Partial match fallback with caching
- Debounced input (400ms) to reduce API calls
- Search disabled in favorites view

### 3. Favorites Management

- Toggle favorites with persistent storage
- Real-time counter in UI
- Dedicated favorites view
- Share functionality with formatted text

### 4. Responsive Design

- Mobile-first approach
- 5 breakpoints (xs, sm, md, lg, xl)
- Adaptive grid layout
- Touch-friendly buttons and spacing

### 5. Type Safety

- 100% TypeScript coverage
- Strict mode enabled
- Props validation at compile time
- Store actions fully typed

### 6. Performance

- Code splitting with lazy loading
- Component-level code splitting
- Debounced search
- Optimized API calls

---

## 📱 Responsive Breakpoints

| Device        | Width       | Columns |
| ------------- | ----------- | ------- |
| Mobile        | < 600px     | 1       |
| Tablet Small  | 600-960px   | 2       |
| Tablet        | 960-1264px  | 3       |
| Desktop       | 1264-1904px | 4       |
| Desktop Large | > 1904px    | 6       |

---

## 🎨 Design Features

- **Material Design 3** components via Vuetify
- **Gradient backgrounds** for visual appeal
- **Smooth animations** and transitions
- **Type-based color coding** for Pokémon types
- **Dark mode support** via Vuetify theming

---

## 🔄 Data Flow

```
User Interaction
    ↓
Component Event (@click, @search)
    ↓
Store Action (Pinia)
    ↓
API Call (Axios)
    ↓
State Update (Reactive)
    ↓
Component Re-render
    ↓
UI Update (Instant)
```

---

## 📈 Performance Optimizations

✅ Lazy loading components  
✅ Code splitting with Vite  
✅ Debounced search queries  
✅ IntersectionObserver for infinite scroll  
✅ LocalStorage for offline favorites  
✅ Optimized re-renders with Vue 3 reactivity  
✅ Vuetify tree-shaking for smaller bundle size

---

## 🚨 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Installation Issues

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check for type errors
npm run type-check

# Fix automatic fixes
npm run lint
```

---

## 🤝 Contributing

Contributions are welcome! Please maintain:

- TypeScript strict mode
- Component reusability (DRY principle)
- Proper type definitions
- Responsive design
- Code organization

Before committing:

```bash
npm run lint
npm run format
npm run type-check
```

---

## 📄 License

MIT License - feel free to use this project for learning and development.

---

## 👨‍💻 Built with ❤️

This project demonstrates modern web development best practices with a focus on:

- **Clean Architecture** through proper separation of concerns
- **Type Safety** with TypeScript throughout
- **Reusability** following DRY principles
- **User Experience** with responsive design
- **Performance** with optimized loading strategies
- **Maintainability** with organized code structure

Enjoy exploring Pokémon! 🔴⚫
