# Admin Requests Page

This folder contains the Requests management page for the admin panel.

## Structure

```
requests/
├── components/
│   ├── RequestsTable.tsx          # Main table component
│   ├── RequestsTableRow.tsx       # Individual row component with RequestData interface
│   ├── RequestStatusFilter.tsx    # Status filter with badges (Pending, Approved, Rejected)
│   └── RequestsPagination.tsx     # Pagination controls
├── Requests.tsx                   # Main page component
└── README.md                      # This file
```

## Components

### Requests.tsx

Main page component that combines all child components and manages state.

**Features:**

- Status filtering (All, Pending, Approved, Rejected)
- Pagination
- Mock data for requests
- Responsive layout

### RequestsTable.tsx

Displays the requests in a table format with columns:

- Request ID
- Type (Deposit INR, Withdraw INR, Withdraw Crypto, etc.)
- User (Name and Email)
- Amount
- Currency
- Status
- Time
- Actions (View button)

### RequestsTableRow.tsx

Individual table row component with:

- Responsive design
- Status badge styling
- View action button
- Export `RequestData` interface

### RequestStatusFilter.tsx

Filter component with:

- Status count badges (Pending, Approved, Rejected)
- "All Requests" dropdown
- Click handlers for filtering

### RequestsPagination.tsx

Pagination component with:

- Page numbers
- Previous/Next buttons
- Total items count

## Usage

The page is accessible at `/admin/requests` and is already integrated into the app routing.

## Data Structure

```typescript
interface RequestData {
  id: string;
  requestId: string;
  type: string;
  userName: string;
  userEmail: string;
  amount: string;
  currency: string;
  status: "Pending" | "Approved" | "Rejected";
  time: string;
}
```

## Styling

- Uses Tailwind CSS
- Follows the design from Figma
- Fully responsive (mobile, tablet, desktop)
- Consistent with other admin pages
