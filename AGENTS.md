# Project Guidelines for Agents

## Project Overview

This is a **frontend-only** cryptocurrency trading dashboard application built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
client/
├── pages/              # Page components (route pages)
├── components/        # Reusable UI components
│   └── ui/           # shadcn/ui component library
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
├── App.tsx           # Main app component with routing
└── global.css        # Global styles

public/               # Static assets (images, icons)
```

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + PostCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Form Validation**: React Hook Form + Zod
- **Particles**: react-tsparticles

## Important Rules

1. **Frontend Only**: This is a frontend project. Do NOT add backend, server, or API code.
2. **Client-side Routing**: Use React Router for all routing. Pages are in `client/pages/`
3. **No API Calls**: This is a UI prototype. Keep all data static or in component state.
4. **Component Organization**: 
   - Page components go in `client/pages/`
   - Reusable components go in `client/components/`
   - Utility functions go in `client/lib/`
5. **Styling**: Use Tailwind CSS classes. Keep styles responsive and mobile-first.
6. **State Management**: Use React hooks (useState, useContext). No Redux/Zustand needed.

## Deployment

This project is configured for **Netlify** deployment:
- Automatic SPA routing handled by `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist`

## Available Routes

- `/` - Home/Landing page
- `/login` - Login page
- `/dashboard` - Main dashboard
- `/buy-crypto` - Buy cryptocurrency
- `/sell-crypto` - Sell cryptocurrency
- `/payment-method` - Payment method selection
- `/sell-success` - Transaction success page

## Key Files to Know

- `client/App.tsx` - Main app with routing setup
- `client/pages/` - All page components
- `vite.config.ts` - Vite configuration (frontend only)
- `tailwind.config.ts` - Tailwind configuration
- `netlify.toml` - Netlify deployment configuration
- `package.json` - Dependencies (frontend only)

## Before Making Changes

1. Check if the component exists in `client/components/`
2. Use existing UI components from `client/components/ui/`
3. Keep the component architecture clean and modular
4. Follow the existing code style and naming conventions
5. Ensure all changes are frontend-related

## No Backend

This project does NOT have:
- Node.js/Express server
- API routes or endpoints
- Database connections
- Netlify functions
- Environment variables for backend services

If you need backend functionality, this is out of scope for this project.
