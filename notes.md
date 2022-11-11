# Notes

## Resources

- https://vuejs.org/
- https://tailwindcss.com/
- https://daisyui.com/
-

## Install Font Awesome

- https://fontawesome.com/v6/icons/download?s=solid&f=classic
- https://fontawesome.com/v6/search?o=r&m=free&f=brands
- https://fontawesome.com/v6/search?o=r&m=free

```powershell
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/vue-fontawesome@latest-3
```

Load the desired icons by using camel case, but call them in vue components by kebab-case

## Install Tailwind and DaisyUI

- https://tailwindcss.com/docs/guides/vite
- https://daisyui.com/docs/install/

```powershell
npm install -D tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p
```

Update `tailwind.config.js` file so that tailwind knows where to look for the files that have utility classes

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  //...
};
```

Add daisyUI to the `tailwind.config.js` file

```javascript
module.exports = {
  //...
  plugins: [require("daisyui")],
};
```

Nodejs Style Guide

https://github.com/felixge/node-style-guide

- camelCase: Use lowerCamelCase for variables, properties and function names
- PascalCase: Use UpperCamelCase for class names
- Use UPPERCASE for Constants

Vuejs Style Guide

https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for

- Use multi-word component names (PascalCase[templates], kabab-case [in-DOM templates])
- Use detailed prop definitions
- Use keyed v-for
- Single-file component filename casing (PascalCase [Prefered], kabak-case [acceptable])
- Base component names: Presentational only should all prefix with `Base`, `App`, or `V`
- Single-instance component names
  - Used Once per page with out Props: Use `The` prefix. TheHeader.vue, TheSideBar.vue, TheFooter
- Tightly coupled component names
  - Child components that are tightly coupled with their parent should include the parent component name as a prefix.
- Order of words in component names
  - Component names should start with the highest-level (often most general) words and end with descriptive modifying words.
- Full-word component names
- Prop name casing: We're simply following the conventions of each language. Within JavaScript, camelCase is more natural. Within HTML, kebab-case is.
  - requires switching casing within the SFC
- Directive shorthands
  - Directive shorthands (: for v-bind:, @ for v-on: and # for v-slot) should be used always or never.

TailwindCSS

If you want to add an additional breakpoint you need to specify all of them. you can't just add one, it probably completely replaces the parameter.
