# Aaryan Dharmadhikari Portfolio Website

A professional dark-themed portfolio website built with React, TypeScript, and Express.js.

## Features

- Modern dark theme with gradient accents
- Responsive design for all devices
- Hero section with personal photo background
- Professional experience and education sections
- Skills showcase (Tech & Data skills)
- Project portfolio with hover effects
- Contact form with backend integration
- Smooth scrolling navigation
- Footer navigation menu

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Radix UI components with shadcn/ui
- Wouter for routing
- React Query for state management
- React Hook Form with Zod validation
- Vite for development and building

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Drizzle ORM
- In-memory storage for development
- Zod for data validation

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes (when using PostgreSQL)

## Project Structure

```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility libraries
├── server/          # Backend Express application
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes
│   └── storage.ts   # Data storage layer
├── shared/          # Shared types and schemas
└── components.json  # shadcn/ui configuration
```

## Customization

### Personal Information
1. Update the hero section in `client/src/components/hero-section.tsx`
2. Modify the about section with your experience and education in `client/src/components/about-section.tsx`
3. Update skills in `client/src/components/skills-section.tsx`
4. Replace projects with your own in `client/src/components/projects-section.tsx`
5. Update contact information in `client/src/components/contact-section.tsx`

### Styling
- Main styles are in `client/src/index.css`
- Color variables can be customized in the `:root` section
- Component-specific styles use Tailwind CSS classes

### Images
- Replace the hero background image URL in `hero-section.tsx`
- Add your own project images in `projects-section.tsx`

## Database Setup (Optional)

For production, you can connect to a PostgreSQL database:

1. Set up a PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. Add your database URL to environment variables:
   ```bash
   DATABASE_URL="your-postgresql-connection-string"
   ```
3. Run database migrations:
   ```bash
   npm run db:push
   ```

## Deployment

### Build for Production
```bash
npm run build
```

### Deployment Platforms
- **Replit**: Deploy directly from Replit dashboard
- **Vercel**: Connect your GitHub repository
- **Netlify**: Upload the `dist` folder after building
- **Railway**: Connect GitHub and deploy automatically

## Environment Variables

For production, set these environment variables:
- `DATABASE_URL` - PostgreSQL connection string (optional)
- `NODE_ENV` - Set to "production"

## Contact Form

The contact form is fully functional and stores submissions. In development, it uses in-memory storage. For production, connect a PostgreSQL database for persistent storage.

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact:
- Email: aaryan@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]