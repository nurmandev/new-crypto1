# Crypto Trading Dashboard

A modern, responsive frontend application for cryptocurrency trading built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🔄 Client-side routing with React Router
- 📱 Fully responsive design
- 🎯 Interactive trading interface
- 💳 Payment method selection
- ✨ Smooth animations with Framer Motion

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner

## Project Structure

```
client/
├── pages/              # Page components
│   ├── Index.tsx      # Home page
│   ├── Login.tsx      # Login page
│   ├── Dashboard.tsx  # Dashboard
│   ├── BuyCrypto.tsx  # Buy crypto page
│   ├── SellCrypto.tsx # Sell crypto page
│   ├── PaymentMethod.tsx
│   ├── SellSuccess.tsx
│   ├── NotFound.tsx
│   └── ...
├── components/        # Reusable components
│   ├── ui/           # UI component library
│   └── Particles.tsx # Particle effects
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main app component
├── global.css        # Global styles
└── vite-env.d.ts     # Vite environment types
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server (http://localhost:5173)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm format.fix` - Format code with Prettier
- `pnpm typecheck` - Check TypeScript types

## Deployment

This project is optimized for deployment on Netlify:

1. Push code to your repository
2. Connect to Netlify
3. Netlify will automatically build and deploy

The `netlify.toml` configuration handles SPA routing automatically.

## Pages

- **Home** (`/`) - Landing page
- **Login** (`/login`) - User authentication
- **Dashboard** (`/dashboard`) - Main dashboard
- **Buy Crypto** (`/buy-crypto`) - Purchase cryptocurrency
- **Sell Crypto** (`/sell-crypto`) - Sell cryptocurrency
- **Payment Method** (`/payment-method`) - Select payment method
- **Sell Success** (`/sell-success`) - Transaction confirmation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
