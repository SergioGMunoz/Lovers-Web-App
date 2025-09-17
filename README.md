<!-- Shields / Badges -->

# Lovers Web App
Class project — demo of profile creation flow for a dating website. Implemented with Vanilla JS, HTML and CSS. Data is stored in `localStorage` for local persistence.

## Technologies
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Figma](https://img.shields.io/badge/Design-Figma-black?style=flat&logo=figma)](https://www.figma.com)


## Project Structure
```
index.html # Start the app here
js/
    main.js         # entry point
    form.js         # form logic
    elements.js     # functions that create HTML for each section
    validations.js  # reusable validators 
    storage.js      # localStorage logic
    profile.js      # profile logic
styles/
    main.css
resources/
    img/
```

## How to test it
1. Open `index.html` in browser 
2. Click "Create Account".
3. Complete each step and use "Continue". Data is saved to `localStorage` as you progress.
4. After completing the biography, you'll be redirected to the profile view.


## Possible Improvements (Future)
- Add backend (API + database) for real persistence.
- Implement authentication and profile linking with users.
- Add chat functionality.
- Photo upload and storage.

