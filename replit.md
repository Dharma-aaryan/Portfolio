# Portfolio Website

## Overview

This is a full-stack portfolio website built as a modern web application. The project showcases a developer's skills, experience, and projects through an elegant single-page application with a contact form feature. The application follows a clean architecture pattern with clear separation between frontend, backend, and shared components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Style**: REST API with JSON responses
- **Validation**: Zod schemas shared between frontend and backend

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (username, password)
- **Contacts Table**: Contact form submissions (name, email, subject, message, timestamp)
- **Schema Location**: `shared/schema.ts` for type safety across frontend and backend

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin functionality)

### Frontend Pages
- **Portfolio Page**: Main landing page with sections for hero, about, skills, projects, and contact
- **404 Page**: Not found page with helpful error message

### UI Component System
- Complete shadcn/ui component library implementation
- Custom theme with portfolio-specific CSS variables
- Dark theme design with gradient accents
- Responsive design with mobile-first approach

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Frontend validates with Zod → API request to backend
   - Backend validates again → Stores in database → Returns success/error response
   - Frontend shows toast notification and resets form on success

2. **Data Storage**:
   - Currently uses in-memory storage (MemStorage class) for development
   - Configured for PostgreSQL with Drizzle ORM for production
   - Database migrations handled through Drizzle Kit

3. **Type Safety**:
   - Shared TypeScript types between frontend and backend
   - Zod schemas provide runtime validation and type inference
   - Consistent data structure across the application

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database queries and migrations
- **Connection**: Environment variable `DATABASE_URL` required

### UI Framework
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety and better developer experience
- **ESLint/Prettier**: Code formatting and linting (implied)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Production**: Single Node.js server serves both API and static files

### Environment Configuration
- Development: Vite dev server with Express API
- Production: Express serves built React app as static files
- Database: PostgreSQL connection via `DATABASE_URL` environment variable

### Development Workflow
- `npm run dev`: Starts development server with hot reload
- `npm run build`: Creates production build
- `npm run db:push`: Pushes database schema changes via Drizzle

The application is designed to be deployed on platforms like Replit, Vercel, or similar Node.js hosting environments with PostgreSQL database support.

## Recent Performance & UX Improvements (January 2025)

### Navigation & Scroll Performance
- Added scroll spy functionality with active section highlighting in navigation
- Implemented smooth scroll behavior with performance optimizations
- Created custom useScrollSpy hook for better user experience

### Form & UI Enhancements
- Enhanced contact form with loading states and spinner animations
- Added disabled states with visual feedback during form submission
- Improved button interactions with proper hover and transition effects

### Image & Asset Optimization
- Added eager loading for hero profile image
- Implemented content-visibility for better image performance
- Added proper resume download functionality with file naming

### CSS Performance Optimizations
- Added will-change properties for smooth animations
- Implemented backface-visibility for better rendering
- Created reusable CSS classes for hover effects and gradients
- Enhanced font smoothing across all browsers