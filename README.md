# Genshare Unified Dashboard

A comprehensive dashboard application that unifies Genshare's deal sourcing, acquisition pipeline, and due diligence processes into a single, intuitive interface.

## 🏗️ Architecture

This dashboard serves as a central hub connecting various micro-services and tools:

- **Deal Sourcing Module**: Links to broker scraping and Xcllusive crawler services
- **Acquisition Pipeline**: Embedded Airtable base for managing the acquisition funnel
- **Due Diligence**: Portal access and management tools for due diligence processes

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Testing**: Jest with React Testing Library
- **State Management**: React Context (expandable to Redux if needed)

## 📦 Project Structure

```
genshare-unified-dashboard/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Route-based page components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration and environment handling
│   ├── types/           # TypeScript type definitions
│   └── main.tsx         # Application entry point
├── tests/               # Test files and setup
├── docs/                # Documentation
├── public/              # Static assets
└── package.json         # Project configuration
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd genshare-unified-dashboard

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env
```

### Environment Variables
Configure the following variables in your `.env` file:

```env
# Micro-service URLs
VITE_BROKER_SERVICE_URL=http://localhost:3001
VITE_XCLLUSIVE_URL=http://localhost:3002

# Airtable embeds
VITE_AIRTABLE_FUNNEL_URL=https://airtable.com/embed/your-funnel-base
VITE_AIRTABLE_PORTAL_MGMT_URL=https://airtable.com/embed/your-portal-base

# External services
VITE_DUE_DILIGENCE_PORTAL_URL=https://your-dd-portal.vercel.app
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing Strategy

This project follows Test-Driven Development (TDD) principles:

1. **Write failing tests first** - Define expected behavior before implementation
2. **Implement minimal code** - Make tests pass with the simplest solution
3. **Refactor** - Improve code while keeping tests green
4. **Comprehensive coverage** - Maintain >90% test coverage

### Test Structure
- Unit tests for individual components
- Integration tests for page flows
- Mocked external dependencies
- Descriptive test names explaining scenarios

## 📋 Modules

### 1. Deal Sourcing (`/deal-sourcing`)
Provides quick access to:
- Broker Deal Sheet Extraction service
- Xcllusive Crawler for property data

### 2. Acquisition Pipeline (`/acquisition-pipeline`) 
Embedded Airtable view of "Acquisition Funnel 2.0" for:
- Lead tracking
- Pipeline management
- Deal progression monitoring

### 3. Due Diligence (`/due-diligence`)
Comprehensive due diligence tools:
- **Portal**: External link to main DD portal
- **Portal Management**: Embedded Airtable for DD workflow management

## 🎨 Design System

The dashboard follows a clean, professional design with:
- Light theme with subtle shadows
- Card-based layout for modularity  
- Consistent Material Design components
- Responsive design for various screen sizes

## 🔄 Adding New Services

To add a new micro-service to the dashboard:

1. **Update configuration** in `src/config/services.ts`
2. **Add environment variable** to `.env.example`
3. **Create page component** in `src/pages/`
4. **Write tests first** following TDD principles
5. **Update routing** in main App component
6. **Add navigation** to sidebar
7. **Update documentation**

## 🤝 Contributing

1. Follow TDD principles - tests first!
2. Maintain code coverage above 90%
3. Use descriptive commit messages
4. Update documentation for new features
5. Ensure all linting rules pass

## 📄 License

MIT License - see LICENSE file for details.