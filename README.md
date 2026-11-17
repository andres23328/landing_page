# 🌐 Vida Fit — Landing Page Corporativa y Presentación del Ecosistema

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.6-0055FF?logo=framer&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-11.1-6332F6?logo=swiper&logoColor=white)

Sitio web promocional e informativo de **Vida Fit**, diseñado para presentar la propuesta de valor de la aplicación móvil, su arquitectura tecnológica, el equipo de desarrollo y herramientas interactivas para visitantes como una calculadora instantánea de Índice de Masa Corporal (IMC).

---

## ✨ Características Principales

- **Calculadora Interactiva de IMC en Tiempo Real:** Herramienta integrada en la página de inicio (`Inicio.jsx`) con validación de rangos fisiológicos (altura y peso) que clasifica el estado nutricional del visitante al instante.
- **Animaciones y Transiciones Fluidas:** Implementación de **AOS (Animate On Scroll)** y **Framer Motion** para una navegación moderna y dinámica, complementada con un botón de desplazamiento suave (*scroll-to-top*).
- **Carrusel Interactivo de Stack Tecnológico:** Sección dedicada (`Tecnologias.jsx`) construida con **Swiper.js** (soporte táctil, teclado y rueda del ratón) que detalla las herramientas del ecosistema (React Native, Firebase, Expo, Node.js, etc.).
- **Presentación del Equipo de Desarrollo:** Sección (`Equipo.jsx`) con tarjetas responsivas que detallan los roles de Gestión Documental, Desarrollo Fullstack y Diseño UI/UX.
- **Formulario de Contacto:** Vista (`Contacto.jsx`) para recepción de sugerencias y consultas con retroalimentación visual inmediata.

---

## 🛠️ Stack Tecnológico

- **Framework y Bundler:** React 18, Vite 5
- **Enrutamiento:** React Router DOM v6 (`createBrowserRouter`)
- **Estilos:** Tailwind CSS v3, PostCSS, CSS3 personalizado
- **Animaciones y Sliders:** Framer Motion, AOS (Animate On Scroll), Swiper.js
- **Iconografía:** FontAwesome, React Icons

---

## 📁 Estructura del Proyecto

```text
landing_page/
├── index.html                   # Punto de entrada HTML (Vida Fit)
├── package.json                 # Dependencias y scripts de Vite
├── postcss.config.js            # Configuración de Tailwind y Autoprefixer
└── src/
    ├── app/
    │   └── router.jsx           # Configuración centralizada de rutas SPA
    ├── components/
    │   └── Navbar.jsx           # Barra de navegación responsiva
    ├── layouts/
    │   └── AppLayout.jsx        # Estructura base compartida entre vistas
    ├── pages/
    │   ├── Inicio.jsx           # Hero section, servicios, sobre nosotros y calculadora IMC
    │   ├── Equipo.jsx           # Perfiles y roles del equipo de desarrollo
    │   ├── Tecnologias.jsx      # Slider interactivo con Swiper del stack tecnológico
    │   └── Contacto.jsx         # Formulario de contacto y atención al usuario
    ├── static/
    │   ├── css/                 # Hojas de estilo globales y personalizadas
    │   └── images/              # Recursos gráficos, iconos y fotografías del equipo
    ├── index.css                # Directivas de Tailwind CSS
    └── main.jsx                 # Renderizado raíz de React
```

---

## 🚀 Instalación y Ejecución Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/andres23328/landing_page.git
cd landing_page
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el entorno de desarrollo
```bash
npm run dev
```
Visita la URL local indicada por Vite (por defecto `http://localhost:5173`).

### 4. Compilar para producción
```bash
npm run build
```

---

## 👥 Equipo del Proyecto

- **Andrés Ardila** — Desarrollador Fullstack (Backend Node.js/Express, React Native, Firebase y Machine Learning)
- **Alejandro Suárez** — Diseñador de Interfaz y Frontend (UI/UX, Tailwind CSS y React Native)
- **Angie García** — Gestión Documental y Coordinación

---

## 👤 Contacto

**Andrés Felipe Ardila Ardila**  
Villavicencio, Meta, Colombia  
- GitHub: [@andres23328](https://github.com/andres23328)
- Correo: ardila23328@gmail.com
