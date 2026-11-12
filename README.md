# WhileStone Estate 🏡

[![Next.js](https://img.shields.io/badge/Next.js-12.0.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-1.7.2-319795?style=for-the-badge&logo=chakraui)](https://chakra-ui.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**WhileStone Estate** is a modern, responsive real estate web application designed for discovering, purchasing, and renting premium residential and commercial properties. Built with **Next.js** and **Chakra UI**, WhileStone Estate delivers real-time property listings, multi-parameter search filtering, an interactive image carousel, comprehensive property specifications, and a dedicated contact hub with primary and alternative communication channels.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Brand & Contact Information](#brand--contact-information)
  - [Primary Contact Details](#primary-contact-details)
  - [Alternative Contact Details](#alternative-contact-details)
- [Tech Stack](#tech-stack)
- [Project Directory Structure](#project-directory-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [API Configuration](#api-configuration)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

---

## 🌟 Overview

**WhileStone Estate** connects property seekers, renters, and investors with verified properties. By combining server-side rendering (SSR) and static site generation (SSG) powered by Next.js with real-time property data from the RapidAPI Bayut API, users can seamlessly browse thousands of homes, villas, apartments, and commercial estates.

---

## ✨ Key Features

- **🏠 Explore For-Rent & For-Sale Listings**: Browse curated collections of properties tailored for immediate rental or direct acquisition.
- **🔍 Advanced Multi-Criteria Search & Filtering**:
  - Purpose (For Sale / For Rent)
  - Rent Frequency (Daily, Weekly, Monthly, Yearly)
  - Price Range (Minimum and Maximum budget)
  - Bedroom & Bathroom counts
  - Property Category & Type (Apartments, Villas, Townhouses, Penthouses)
  - Sorting (Price ascending/descending, Date listed, Verified status)
- **📸 Interactive Property Showcase**:
  - Horizontal smooth-scrolling image gallery / carousel
  - Verified agent & agency branding badges
  - Price tags with dynamic currency and frequency formatting
  - Comprehensive amenity badges and full architectural descriptions
- **📞 Comprehensive Contact & Alternative Details**:
  - Dedicated `/contact` hub with interactive inquiry dispatch
  - Clearly articulated primary and alternative phone numbers, email addresses, and branch locations
  - Direct WhatsApp concierge integration
- **⚡ Performance & UX**:
  - Ultra-fast page transitions with top-bar `NProgress` indicators
  - Mobile-responsive navigation and accessible design system powered by Chakra UI

---

## 🏢 Brand & Contact Information

WhileStone Estate provides both **primary** and **alternative** channels so clients, buyers, and tenants always have uninterrupted access to our advisory team.

### Primary Contact Details

| Channel | Detail |
| :--- | :--- |
| **Brand Name** | **WhileStone Estate** |
| **Primary Hotline** | `+1 (800) 555-0199` |
| **Primary Email** | `info@whilestone-estate.com` |
| **Corporate Headquarters** | 100 WhileStone Boulevard, Suite 400, Beverly Hills, CA 90210 |
| **Office Hours** | Monday – Friday: 8:30 AM – 6:30 PM (EST / PST) |

### Alternative Contact Details

| Channel | Detail | Purpose / Note |
| :--- | :--- | :--- |
| **Alternative Phone** | `+1 (800) 555-0144` | Backup line during peak volume / emergency support |
| **Alternative Email** | `support@whilestone-estate.com` | Dedicated client care & ticket escalation |
| **WhatsApp Concierge** | `+1 (555) 987-6543` | Rapid messaging & private tour scheduling |
| **East Coast Branch** | 742 Evergreen Terrace, Downtown Financial District, New York, NY 10001 | Alternative regional office |
| **Weekend Support** | Saturday: 10:00 AM – 4:00 PM / Sunday: By Appointment | Dedicated concierge coverage |

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** (v12) | React Framework with SSG (`getStaticProps`) & SSR (`getServerSideProps`) |
| **[React](https://reactjs.org/)** (v17) | Component-based UI library |
| **[Chakra UI](https://chakra-ui.com/)** | Accessible, modular, and themeable UI component library |
| **[Emotion](https://emotion.sh/)** | CSS-in-JS styling foundation for Chakra UI |
| **[Framer Motion](https://www.framer.com/motion/)** | Declarative animations and UI transitions |
| **[Axios](https://axios-http.com/)** | Promise-based HTTP client for external API requests |
| **[Millify](https://github.com/izolate/millify)** | Formats large numbers into human-readable strings (e.g. 500k, 1.2M) |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Scalable vector icon set (`fi`, `fc`, `bs`, `fa`, `go`) |
| **[NProgress](https://ricostacruz.com/nprogress/)** | Slim progress bars on page and route transitions |

---

## 📂 Project Directory Structure

```text
WhileStone-Estate/
├── assets/
│   └── images/
│       ├── house.jpg              # Default fallback property image
│       └── noresult.svg           # Empty search result vector illustration
├── components/
│   ├── Footer.jsx                 # Global footer with WhileStone Estate branding & contacts
│   ├── ImageScrollbar.jsx         # Horizontal carousel for property photo gallery
│   ├── Layout.jsx                 # Head metadata and layout wrapper (Navbar, Main, Footer)
│   ├── Navbar.jsx                 # Sticky header with WhileStone Estate branding & menu
│   ├── Property.jsx               # Reusable property summary card
│   └── SearchFilters.jsx          # Interactive filtering dropdowns for search page
├── pages/
│   ├── api/
│   │   ├── contact.js             # API route for handling inquiries & contact metadata
│   │   └── hello.js               # Sample API handler
│   ├── property/
│   │   └── [id].js                # Dynamic property details page with tour inquiry card
│   ├── _app.js                    # Custom App wrapper (ChakraProvider, NProgress)
│   ├── contact.js                 # Dedicated WhileStone Estate contact & alternative info page
│   ├── index.js                   # Homepage featuring hero banners and curated properties
│   └── search.js                  # Search results page with live filter integration
├── public/
│   ├── favicon.ico                # Website favicon
│   └── vercel.svg                 # Vector asset
├── styles/
│   ├── globals.css                # Global CSS reset and font definitions
│   └── Home.module.css            # Scoped style utilities
├── utils/
│   ├── fetchApi.js                # RapidAPI / Bayut Axios request helper
│   └── filterData.js              # Filter definitions, price brackets, and query presets
├── .babelrc                       # Babel configuration
├── .eslintrc.json                 # ESLint rules
├── .gitignore                     # Git ignored files & directories
├── next.config.js                 # Next.js configuration (domain image optimization)
├── package.json                   # Dependencies, project metadata, and scripts
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- **Node.js**: `v14.0.0` or later (tested on Node v16 / v18 / v20 / v24)
- **npm**: `v6.0.0` or later (or `yarn` / `pnpm`)

### Installation

1. **Clone or navigate to the repository directory**:
   ```bash
   cd WhileStone-Estate
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the local Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## ⚙️ API Configuration & Resilient Data Layer

WhileStone Estate is configured to work with the **Bayut Real Estate API** via **RapidAPI**, and includes an automatic **resilient fallback layer** ([`utils/mockData.js`](file:///c:/Users/QBS%20Accounting/Documents/websites/WhileStone-Estate/utils/mockData.js)):

- **Zero-Crash Resilience**: If RapidAPI returns `404` (e.g. if an unofficial endpoint is deprecated or removed), rate limits (`429`), or if you are running offline, the application automatically catches the error and serves high-fidelity WhileStone Estate listings without crashing.
- **Custom RapidAPI Configuration**: To use a live or custom RapidAPI service, simply provide the following environment variables in a `.env.local` file:

```env
NEXT_PUBLIC_RAPIDAPI_BASE_URL=https://bayut.p.rapidapi.com
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key_here
NEXT_PUBLIC_RAPIDAPI_HOST=bayut.p.rapidapi.com
```

---

## 📜 Available Scripts

In the project root, you can execute the following commands:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode on `http://localhost:3000` |
| `npm run build` | Compiles and optimizes the app for production deployment |
| `npm run start` | Starts the production Next.js server after `npm run build` |
| `npm run lint` | Runs ESLint to check for code syntax and formatting issues |

---

## 🚢 Deployment

The easiest and recommended way to deploy **WhileStone Estate** is via the [Vercel Platform](https://vercel.com/):

1. Push your changes to your Git repository (GitHub / GitLab / Bitbucket).
2. Import the repository into your Vercel dashboard.
3. Configure any required environment variables (such as RapidAPI keys).
4. Click **Deploy**. Vercel will automatically build and publish your Next.js application with edge caching and SSL enabled.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

© 2026 **WhileStone Estate**. All rights reserved.
