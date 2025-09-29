<!-- Shields / Badges -->

# Lovers Web App

Class project — a dating app profile creation flow built with React. Features a multi-step registration form with real-time validation and local data persistence.

## Technologies
[![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Figma](https://img.shields.io/badge/Design-Figma-black?style=flat&logo=figma)](https://www.figma.com)

## Features
- ✅ Multi-step form with React state management
- ✅ Real-time input validation
- ✅ Local data persistence with localStorage
- ✅ Responsive design
- ✅ Step navigation (next/previous)

## Project Structure
```
src/
├── App.jsx                   # Main application component
├── main.jsx                  # Entry point
├── index.css                 # Global styles
├── modules/                  # Reusable components
│   ├── Header.jsx            # Navigation header
│   ├── Footer.jsx            # App footer
│   ├── Title.jsx             # Title component
│   └── form/                 # Form components
│       ├── FormContainer.jsx # Form navigation logic
│       ├── FormName.jsx      # Name input step
│       └── FormEmail.jsx     # Email input step
├── utils/                    # Utility functions
│   ├── validations.js        # Input validators
│   └── storage.js            # localStorage helpers
└── assets/                   # Static resources
    ├── logo_lovers.png
    └── import-photo.png
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/SergioGMunoz/Lovers-Web-App.git
cd Lovers-Web-App
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Use
1. Fill out the registration form step by step
2. Data is automatically validated in real-time
3. Progress is saved to localStorage as you go
4. Use "Continue" to move forward or "Back" to go to previous steps

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Future Improvements
- Add remaining form steps (hobbies, bio, photos)
- Implement profile view component
- Add backend API integration
- User authentication system
- Photo upload functionality
- Chat features

