# Web fonts

Self-hosted fonts for the book theme in `static/custom.css`.

| Font | Use | Source | License |
|---|---|---|---|
| Noto Naskh Arabic (variable) | Body text | `@fontsource-variable/noto-naskh-arabic@5.1.0` | SIL OFL 1.1 |
| Vazirmatn (variable) | Headings, menus, header, footer | `@fontsource-variable/vazirmatn@5.1.0` | SIL OFL 1.1 |

Each font has an Arabic-script file and a Latin file. The `unicode-range`
in `custom.css` makes the browser load only the file that a page needs.
