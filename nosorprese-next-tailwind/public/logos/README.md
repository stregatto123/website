# public/logos
Placeholder SVG set per telecom ed energia (Italia). Sostituisci i file con i loghi ufficiali rispettando esattamente i nomi.

## Convenzioni
- lowercase, `-` al posto degli spazi
- formato preferito: `.svg` (vettoriale)
- fallback: `default.svg`

## Esempio d'uso (React/Next)
```jsx
const logoFor = (key) => `/public/logos/${key}.svg`; // oppure import static con bundler

export default function BrandLogo({ file }) {
  return <img src={`/public/logos/${file}.svg`} alt={`${file} logo`} loading="lazy" />;
}
```