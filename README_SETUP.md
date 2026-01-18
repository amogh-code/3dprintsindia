# 3D Prints India - Setup Guide

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Google Sheets Integration (Portfolio)

The "Our Work" page (`/work`) fetches data dynamically from a Google Sheet.

To enable this connection:

1. Create a project in Google Cloud Console.
2. Enable the **Google Sheets API**.
3. Create a **Service Account** and create a JSON key for it.
4. Share your target Google Sheet with the Service Account email address (Editor or Viewer access).
5. Create a `.env.local` file in the root directory with the following variables:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
GOOGLE_SHEET_ID=your_sheet_id_from_url
```

*Note: If these variables are missing, the site will display mock/placeholder data automatically so you can still develop the UI.*

## Tally.so Integration (Careers)

The Careers page embeds a Tally form. To update the form:
1. Go to `app/careers/page.tsx`.
2. Update the `data-tally-src` URL with your own form URL.
