# TripBooking.ai - High-Fidelity Travel Platform

Welcome to **TripBooking.ai**, a premium, high-performance landing page designed for a modern travel and tourism experience. This project focuses on high-fidelity UI/UX, modular component architecture, and a seamless user experience.

## 🚀 Getting Started

To get the project running locally on your machine, follow these simple steps:

### 1. Clone the repository
```bash
git clone https://github.com/arabyhossainabid/tripbooking.git
cd tripbooking/frontend
```

### 2. Install Dependencies
I recommend using `pnpm` or `npm` for installing the necessary packages:
```bash
npm install
# or
pnpm install
```

### 3. Run the Development Server
```bash
npm run dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ✨ Key Features Implemented

This project isn't just a static template; I've focused on making it feel "alive" with interactive elements and professional styling.

### 1. Interactive Search Architecture
- **Dynamic Dropdowns**: Built custom dropdowns for Location, Date, and Guest selection.
- **Auto-Close Logic**: Opening one menu automatically handles the others to keep the UI clean.
- **Tab Switching**: Smooth transitions between "Tours" and "Hotels" search modes with a premium yellow-pill active state.

### 2. Custom Carousel Systems
- Instead of relying on heavy third-party libraries, I implemented **custom horizontal scroll logic** for:
  - **Featured Tours**: Beautifully styled cards with interactive "Book Now" states.
  - **Top Rated Hotels**: High-fidelity hotel listings with rating systems.
  - **Promotional Offers**: A specialized carousel for highlighted deals.

### 3. Premium Design System
- **Standardized Rounding**: Used a strict `rounded-2xl` (1rem) system across all major containers for a modern, consistent look.
- **Typography**: Optimized font weights to ensure maximum readability and a high-end "institutional" feel.
- **Semantic Assets**: Refactored the entire public folder to use meaningful, descriptive filenames (e.g., `venice.svg`, `california-sunset.svg`) for better SEO and maintainability.

### 4. Fully Responsive & Accessible
- Designed with a "Mobile-First" approach.
- Implemented a **glassmorphism** navbar that adapts its background as you scroll.
- Semantic HTML5 structure for better accessibility and SEO.

---

## 📝 Assumptions & Decisions

During development, I made a few logical decisions to ensure the best possible output:
- **Static Demonstration**: Since this is a frontend-focused task, all data (Tours, Hotels, Locations) is currently stored in clean data constants for easy replacement with an API in the future.
- **Asset Refactoring**: I assumed that a professional project requires clean file names, so I renamed all generic assets (`121.svg`, `journey2.svg`) into semantic, human-readable identifiers.
- **Interactive States**: I prioritized subtle micro-interactions (hover states, active scales) to make the design feel premium without being distracting.

---

Built with ❤️ by [Araby Hossain Abid](https://github.com/arabyhossainabid)
