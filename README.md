<!-- Shields / Badges -->
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Figma](https://img.shields.io/badge/Design-Figma-black?style=flat&logo=figma)](https://www.figma.com)

# Lovers Web App

Proyecto de clase — demo de flujo de alta de perfil para una página de citas. Implementado con Vanilla JS, HTML y CSS. Los datos se guardan en `localStorage` para persistencia local.

## Descripción
Lovers Web App es una pequeña aplicación de ejemplo que permite crear un perfil paso a paso y ver el perfil resultante. Está pensada como trabajo de clase para aprender:

- Manipulación del DOM con módulos ES
- Separación de responsabilidades (componentes visuales, validaciones, almacenamiento)
- Persistencia simple con `localStorage`

La experiencia cubre los pasos: nombre → email → género → orientación → tipo de relación → hobbies → biografía → ver perfil.

## Tecnologías
- HTML5
- CSS3
- JavaScript (Vanilla, módulos ES)
- LocalStorage (persistencia en navegador)
- Diseño en Figma (prototipo / mockups)

## Estructura del proyecto
```
index.html
js/
	main.js         # punto de entrada
	form.js         # lógica paso a paso del formulario
	elements.js     # funciones que crean el HTML de cada paso
	validations.js  # validadores reutilizables
	storage.js      # helpers para localStorage
	profile.js      # vista del perfil
styles/
	main.css
resources/
	img/
```

## Cómo probarlo (rápido)
1. Abrir `index.html` en el navegador (doble clic o usando Live Server en VS Code).
2. Hacer clic en "Crear cuenta".
3. Completar cada paso y usar "Continuar". Los datos se guardan en `localStorage` al avanzar.
4. Al finalizar la biografía se redirige a la vista de perfil.

> Consejo: abre la consola del navegador (F12) para ver logs de validación y los pasos que se ejecutan.

## Límite y consideraciones
- Esta es una demo educativa: no hay backend ni autenticación real.
- `localStorage` no es una solución segura para datos sensibles; es solo para prototipos y pruebas locales.
- El paso de fotos se eliminó del flujo intencionalmente (no se usa en la versión actual).

## Posibles mejoras (futuras)
- Añadir backend (API + base de datos) para persistencia real (Node/Express + MongoDB o similar).
- Implementar autenticación y vinculación de perfiles con usuarios.
- Añadir funcionalidad de chat, matchmaking y conexión entre usuarios.
- Subida y almacenamiento de fotos (Cloudinary / S3) y previews antes de enviar.
- Tests automatizados para validadores y flujos críticos.

## Licencia y uso
Proyecto creado como trabajo de clase. Reutiliza imágenes propias; si añades recursos de terceros revisa sus licencias.

## Contacto
Si quieres contribuir o tienes dudas, abre una issue o PR en el repositorio.

---
_Nota: proyecto orientado a aprendizaje. Mantén tu navegador en modo desarrollo para ver y depurar fácilmente._