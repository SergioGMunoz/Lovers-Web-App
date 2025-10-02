# Lovers Web App - Gráficos y Diagramas

## 🏗️ Estructura del Proyecto

```mermaid
graph TD
    A[Lovers Web App] --> B[src/]
    B --> C[App.jsx]
    B --> D[main.jsx]
    B --> E[modules/]
    B --> F[utils/]
    B --> G[assets/]
    
    E --> H[Header.jsx]
    E --> I[Footer.jsx]
    E --> J[HomeView.jsx]
    E --> K[ErrorView.jsx]
    E --> L[Button.jsx]
    E --> M[form/]
    E --> N[profile/]
    
    M --> O[FormContainer.jsx]
    M --> P[FormName.jsx]
    M --> Q[FormEmail.jsx]
    M --> R[FormBirthDate.jsx]
    M --> S[FormGenderIdentity.jsx]
    M --> T[FormSexualOrientation.jsx]
    M --> U[FormRelationshipType.jsx]
    M --> V[FormBiography.jsx]
    M --> W[FormHobbies.jsx]
    M --> X[FormSocialLink.jsx]
    M --> Y[FormPhone.jsx]
    M --> Z[FormFavoriteColor.jsx]
    M --> AA[FormAgeRange.jsx]
    M --> BB[FormMaxDistance.jsx]
    M --> CC[FormCompleted.jsx]
    M --> DD[FormControls.jsx]
    
    N --> EE[Profile.jsx]
    N --> FF[ProfileBadge.jsx]
    
    F --> GG[storage.js]
    F --> HH[validations.js]
    
    G --> II[logo_lovers.png]
    
    style A fill:#ff6b6b
    style E fill:#4ecdc4
    style M fill:#45b7d1
    style N fill:#96ceb4
    style F fill:#feca57
    style G fill:#ff9ff3
```

## 🔄 Flujo de Registro de Usuario

```mermaid
flowchart TD
    A[Inicio] --> B[FormName]
    B --> C[FormEmail]
    C --> D[FormBirthDate]
    D --> E[FormGenderIdentity]
    E --> F[FormSexualOrientation]
    F --> G[FormRelationshipType]
    G --> H[FormBiography]
    H --> I[FormHobbies]
    I --> J[FormSocialLink]
    J --> K[FormPhone]
    K --> L[FormFavoriteColor]
    L --> M[FormAgeRange]
    M --> N[FormMaxDistance]
    N --> O[FormCompleted]
    O --> P[Ver Perfil]
    
    B -.-> Q[Validación]
    C -.-> Q
    D -.-> Q
    K -.-> Q
    
    Q --> R[LocalStorage]
    R --> S[Datos Guardados]
    
    style A fill:#ff6b6b
    style P fill:#96ceb4
    style Q fill:#feca57
    style R fill:#45b7d1
    style S fill:#4ecdc4
```

## 📊 Arquitectura de Componentes

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
    
    style A fill:#ff6b6b
    style E fill:#45b7d1
    style M fill:#96ceb4
    style O fill:#feca57
    style P fill:#4ecdc4
```

## 💾 Gestión de Datos

```mermaid
sequenceDiagram
    participant U as Usuario
    participant F as Form Component
    participant V as Validations
    participant S as Storage
    participant LS as LocalStorage
    
    U->>F: Introduce datos
    F->>V: Valida input
    V->>F: Resultado validación
    alt Datos válidos
        F->>S: Guarda datos
        S->>LS: Almacena en localStorage
        LS->>S: Confirmación
        S->>F: Datos guardados
        F->>U: Avanza al siguiente paso
    else Datos inválidos
        F->>U: Muestra error
    end
```

## 🎯 Estados de la Aplicación

```mermaid
stateDiagram-v2
    [*] --> Home
    Home --> RegistroIniciado
    
    state RegistroIniciado {
        [*] --> Paso1
        Paso1 --> Paso2
        Paso2 --> Paso3
        Paso3 --> Paso4
        Paso4 --> Paso5
        Paso5 --> Paso6
        Paso6 --> Paso7
        Paso7 --> Paso8
        Paso8 --> Paso9
        Paso9 --> Paso10
        Paso10 --> Paso11
        Paso11 --> Paso12
        Paso12 --> Completado
    }
    
    RegistroIniciado --> Home : Cancelar
    Completado --> PerfilCreado
    PerfilCreado --> [*]
```

## 🔮 Roadmap Futuro

```mermaid
gantt
    title Roadmap de Desarrollo
    dateFormat  YYYY-MM-DD
    section Fase Actual
    Registro Usuario     :done, registro, 2024-01-01, 2024-03-01
    Perfil Básico       :done, perfil, 2024-02-01, 2024-03-15
    
    section Próximas Mejoras
    Backend API         :backend, 2024-04-01, 2024-05-01
    Base de Datos       :database, 2024-04-15, 2024-05-15
    Buscar Pareja       :matching, 2024-05-01, 2024-06-01
    
    section Funciones Avanzadas
    Sistema de Chats    :chats, 2024-06-01, 2024-07-01
    Chat Individual     :chat, 2024-06-15, 2024-07-15
    Notificaciones      :notif, 2024-07-01, 2024-08-01
```

## 🛠️ Stack Tecnológico

```mermaid
mindmap
  root((Lovers App))
    Frontend
      React
      CSS3
      JavaScript ES6+
    Build Tools
      Vite
      ESLint
    Storage
      LocalStorage
      Browser APIs
    Design
      Figma
      Responsive Design
    Future
      Backend
        Node.js
        Express
      Database
        MongoDB
        PostgreSQL
      Deployment
        Vercel
        Netlify
```

## 📈 Métricas del Proyecto

```mermaid
pie title Distribución de Componentes
    "Form Components" : 13
    "Profile Components" : 2
    "UI Components" : 4
    "Utils" : 2
    "Views" : 2
```