# Lovers Web App

Class project to collect user information for a dating website registration. This application provides a complete user registration flow with profile management and local data storage.

## Technologies
[![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Figma](https://img.shields.io/badge/Design-Figma-black?style=flat&logo=figma)](https://www.figma.com)

## Features
- ✅ **Create Account**: Complete multi-step registration form
- ✅ **View Profile**: Display user profile information
- ✅ **Local Storage**: Data persistence using browser's local storage

## Project Structure
```
src/
├── App.jsx                   
├── main.jsx                  
├── index.css                 # Global styles
├── modules/                  
│   ├── Header.jsx            
│   ├── Footer.jsx            
│   ├── HomeView.jsx          
│   ├── ErrorView.jsx         
│   ├── Button.jsx            
│   ├── form/                 # Form components (registration steps)
│   └── profile/              # Profile related components
├── utils/                    
│   ├── validations.js        # Input validators
│   └── storage.js            # localStorage
└── assets/                   
    └── logo_lovers.png
```
## Component Architecture
```mermaid
graph LR
    A[App.jsx] --> B[Header.jsx]
    A --> C[HomeView.jsx]
    A --> D[Footer.jsx]
    
    C --> E[FormContainer.jsx]
    E --> F[Form Components]
    E --> G[FormControls.jsx]
    
    F --> H[Input Forms]
    H --> I[FormName]
    H --> J[FormEmail]
    H --> K[FormBirthDate]
    H --> L[Otros...]
    
    A --> M[Profile.jsx]
    M --> N[ProfileBadge.jsx]
    
    F --> O[validations.js]
    E --> P[storage.js]
```


## How to Try

1. Clone the repository
```bash
git clone https://github.com/SergioGMunoz/Lovers-Web-App.git
```

2. Open the `dist` folder and open the `index.html` file in your browser

## Future Improvements
- **Backend**: Server integration
- **Database**: Database integration
- **Find Partner Screen**: Match discovery functionality
- **Chats Screen**: List of conversations
- **Chat Screen**: Individual chat interface
