# Hero IO Clone

A fully responsive clone of Hero IO app store built using React, Tailwind CSS, and Recharts. This project demonstrates modern React development practices with functional components, hooks, and responsive design.

## 🔧 Tech Stack

- **React** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Router DOM v6** - Client-side routing
- **Recharts** - Composable charting library for React
- **React Hot Toast** - Toast notifications
- **LocalStorage** - Client-side storage for app installations

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **App Installation System** - Install and uninstall apps with localStorage persistence
- **Search & Filtering** - Live search functionality across all apps
- **Sorting Options** - Sort installed apps by download count
- **Dynamic Routes** - Navigate between different pages seamlessly
- **Interactive Charts** - Visualize app rating distributions with Recharts
- **Toast Notifications** - User feedback for actions
- **Loading States** - Smooth loading animations throughout the app
- **Error Handling** - Custom 404 page for invalid routes

## 📁 Project Structure

```
src/
├─ assets/              # Static assets
├─ components/          # Reusable UI components
│   ├─ Header.jsx      # Navigation header with responsive menu
│   ├─ Footer.jsx      # Site footer
│   ├─ AppCard.jsx     # App display card component
│   ├─ LoadingSpinner.jsx # Loading animation component
│   └─ SearchBar.jsx   # Search input component
├─ data/
│   └─ appsData.js     # Mock data for 20+ applications
├─ pages/              # Page components
│   ├─ Home.jsx        # Landing page with stats and featured apps
│   ├─ AllApps.jsx     # Browse all applications with search
│   ├─ AppDetails.jsx  # Individual app details with charts
│   ├─ MyInstallation.jsx # Manage installed apps
│   └─ ErrorPage.jsx   # 404 error page
├─ App.jsx             # Main app component with routing
├─ main.jsx            # React app entry point
└─ index.css           # Global styles and Tailwind imports
```

## 💻 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hero-io-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Key Features Implementation

### Header Component
- Responsive navigation with mobile hamburger menu
- Active route highlighting with NavLink
- Contribution button linking to GitHub
- Logo and branding

### Home Page
- Hero banner with call-to-action buttons
- Statistics cards (Total Apps, Downloads, Average Rating)
- Featured apps grid (first 8 apps)
- "Show All" button linking to /apps

### All Apps Page
- Live search functionality (case-insensitive)
- App count display
- Clickable app cards navigating to details
- "No App Found" state for empty search results

### App Details Page
- App image and information display
- Install/uninstall functionality with localStorage
- Rating distribution chart using Recharts BarChart
- Toast notifications for user actions

### My Installation Page
- Display installed apps as cards
- Uninstall functionality
- Sort dropdown (High-Low/Low-High by downloads)
- Empty state for no installations

### LocalStorage Integration
- Persistent storage of installed apps
- Automatic state management across page reloads


## 🎨 Styling & Design

- **Tailwind CSS** for utility-first styling
- **Responsive breakpoints** for mobile-first design
- **Custom animations** and transitions
- **Gradient backgrounds** and hover effects

## 🔗 Navigation Routes

- `/` - Home page with featured content
- `/apps` - Browse all applications
- `/apps/:id` - Individual app details
- `/my-installation` - Manage installed apps
- `*` - 404 error page for invalid routes

## 🚀 Getting Started

The app is fully functional with mock data for 20 applications. You can:

1. Browse apps on the home page
2. Search and filter apps on the All Apps page
3. View detailed information and install apps
4. Manage your installed apps with sorting options
5. Experience responsive design on all screen sizes


