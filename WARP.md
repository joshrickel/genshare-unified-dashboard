# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Architecture Overview

This is a React TypeScript dashboard application that serves as a unified interface for Genshare's deal sourcing, acquisition pipeline, and due diligence processes. The app acts as a central hub connecting various micro-services and external tools.

### Core Architecture Patterns

- **Service-oriented**: Links to external micro-services (broker scraping, Xcllusive crawler) and embedded tools (Airtable bases)
- **Layout-driven**: Uses nested routing with persistent sidebar navigation via `<AppLayout>` component
- **Configuration-centralized**: All external service URLs managed through `src/config/services.ts` with environment variable validation
- **Theme-consistent**: Custom Material-UI theme in `src/config/theme.ts` for professional dashboard styling

### Key Components Structure

- `src/App.tsx` - Main router with nested routes under AppLayout
- `src/components/AppLayout.tsx` - Persistent sidebar navigation with 280px fixed drawer
- `src/pages/` - Route-based page components (currently only DealSourcing implemented)
- `src/config/` - Centralized theme and service configuration

## Development Commands

```bash
# Development server (runs on port 3000)
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Preview production build
npm run preview

# Run all tests
npm test

# Run tests in watch mode (for TDD workflow)
npm run test:watch

# Run tests with coverage (maintains >90% threshold)
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Testing Architecture

Follows strict Test-Driven Development (TDD) principles as configured in jest.config.js:

- **Coverage requirements**: 90% threshold for branches, functions, lines, and statements
- **Test locations**: Both `tests/` directory and `src/**/__tests__/` co-located tests
- **Setup**: Global test setup in `tests/setup.ts` with React Testing Library and mocked environment variables
- **Testing patterns**: 
  - Descriptive nested describe blocks explaining scenarios
  - Components wrapped with `renderWithProviders` helper (BrowserRouter + ThemeProvider)
  - External dependencies mocked (window.open, environment variables)

### Running Single Tests

```bash
# Run specific test file
npm test -- tests/components/AppLayout.test.tsx

# Run tests matching pattern
npm test -- --testNamePattern="when navigation items are clicked"

# Run tests in specific directory
npm test -- tests/config/
```

## Configuration Management

### Environment Variables

All external service configuration is centralized in `src/config/services.ts`:

- **Development**: Copy `.env.example` to `.env`
- **Production**: Values managed in Vercel dashboard (see `.env.production`)
- **Testing**: Mocked in `tests/setup.ts`

Required environment variables:
- `VITE_BROKER_SERVICE_URL` - Broker deal sheet extraction service
- `VITE_XCLLUSIVE_URL` - Xcllusive property crawler service  
- `VITE_AIRTABLE_FUNNEL_URL` - Embedded Airtable acquisition funnel
- `VITE_AIRTABLE_PORTAL_MGMT_URL` - Embedded Airtable portal management
- `VITE_DUE_DILIGENCE_PORTAL_URL` - External due diligence portal

### Path Aliases

TypeScript path mapping configured for `@/*` -> `src/*` (in both tsconfig.json and jest.config.js).

## Adding New Services/Pages

When adding new micro-service integrations:

1. **Add environment variable** to `.env.example` and `.env.production`
2. **Update service configuration** in `src/config/services.ts` interface and validation
3. **Write failing tests first** in `tests/pages/NewPage.test.tsx`
4. **Create page component** in `src/pages/NewPage.tsx`
5. **Update routing** in `src/App.tsx` routes array
6. **Add navigation** to `navigationItems` array in `src/components/AppLayout.tsx`
7. **Update tests** to maintain >90% coverage requirement

## Material-UI Theme System

Custom theme in `src/config/theme.ts` defines:
- **Color palette**: Light theme with professional blue (#1976d2) primary
- **Typography**: Roboto font family with consistent sizing scale
- **Component overrides**: Cards with hover shadows, borderRadius: 8, no button text transform
- **Layout specs**: AppBar with subtle shadow, Drawer with border-right divider

## Service Integration Patterns

The `DealSourcing` page demonstrates the standard pattern for external service integration:
- Service cards with consistent Material-UI styling
- `window.open(url, '_blank')` for external navigation  
- Service URLs pulled from centralized configuration
- Error handling for missing service URLs

## Build and Deployment

- **Build tool**: Vite with React plugin
- **TypeScript**: Strict mode enabled with path mapping
- **Target**: ES2020, modern browsers
- **Output**: `dist/` directory with sourcemaps enabled
- **Deployment**: Configured for Vercel (environment variables managed in dashboard)