# Cryptocurrency Management Module

This folder contains the cryptocurrency management system for the admin dashboard.

## Structure

```
cryptocurrency/
├── components/
│   ├── StatsCard.tsx          # Reusable stats display card
│   ├── CryptoHeader.tsx       # Page header with navigation
│   ├── Sidebar.tsx            # Navigation sidebar
│   ├── CryptoTable.tsx        # Main cryptocurrency rates table
│   └── CryptoTableRow.tsx     # Individual table row component
└── Cryptocurrency.tsx         # Main page that connects all components
```

## Components

### StatsCard
Displays statistics like Total Crypto, Active, Inactive, and Avg Change with icons and optional trend indicators.

### CryptoHeader
Top navigation bar with logo, dashboard title, "Go to Home" button, notifications, and user profile.

### Sidebar
Full sidebar navigation with all menu items including Overview, Users, Transactions, Requests, Platform, Cryptocurrency (active), Payment Methods, Support, Pages, and Settings.

### CryptoTable
Table component displaying cryptocurrency data with columns for:
- Cryptocurrency (name & symbol with logo)
- Status (Active/Inactive badge)
- Buy Rate (₹)
- Sell Rate (₹)
- 24h Change (%)
- Last Updated
- Actions (Edit button)

### CryptoTableRow
Individual row component handling the display of each cryptocurrency entry.

### Cryptocurrency (Main Page)
Connects all components together and manages the overall page state.

## Features

- Fully responsive design using Tailwind CSS
- Matches the Figma design pixel-perfectly
- Statistics cards showing crypto metrics
- Table with cryptocurrency rates and status
- Edit functionality for each cryptocurrency
- Add Currency button for adding new cryptocurrencies
- Active sidebar navigation

## Route

Access this page at: `/cryptocurrency`

## Usage

The page is automatically integrated into the app routing. Navigate to `/cryptocurrency` to view the cryptocurrency management dashboard.
