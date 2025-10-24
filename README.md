# Lovers Web App

> 🚧 **En desarrollo:** esta aplicación aún no ha sido implementada.  
> El sistema se encuentra en fase de definición y diseño de requisitos.

Proyecto de clase para recopilar información de usuarios para el registro en un sitio web de citas. Esta aplicación proporciona un flujo completo de registro de usuario con gestión de perfil y almacenamiento local de datos.

## ⚙️ Tecnologías
[![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Figma](https://img.shields.io/badge/Diseño-Figma-black?style=flat&logo=figma)](https://www.figma.com)

## 🔧 Funcionalidades
- ✅ **Crear Cuenta**: Formulario de registro completo en múltiples pasos  
- ✅ **Ver Perfil**: Visualización de la información del perfil de usuario  
- ✅ **Almacenamiento Local**: Persistencia de datos usando el almacenamiento local del navegador  


## 🏗️ Project Structure
```
src/
├── App.jsx
├── main.jsx
├── index.css # Estilos globales
├── modules/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── HomeView.jsx
│ ├── ErrorView.jsx
│ ├── Button.jsx
│ ├── form/ # Componentes del formulario (pasos del registro)
│ └── profile/ # Componentes relacionados con el perfil
├── utils/
│ ├── validations.js # Validadores de entradas
│ └── storage.js # LocalStorage
└── assets/
└── logo_lovers.png
```

## 🧱 Arquitectura de Componentes
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

## 🚀 Cómo Probarlo

1. Clona el repositorio
```bash
git clone https://github.com/SergioGMunoz/Lovers-Web-App.git
```

2. Open the `dist` folder and open the `index.html` file in your browser

## 🛩️ Mejoras futuras
- **Backend**: Integración con el servidor
- **Base de Datos**: Integración con la base de datos
- **Pantalla de Buscar Pareja**: Funcionalidad de descubrimiento de coincidencias
- **Pantalla de Chats**: Lista de conversaciones
- **Pantalla de Chat Individual**:Interfaz de chat individual
