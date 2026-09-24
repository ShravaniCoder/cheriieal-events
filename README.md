# Chériieal Events

Premium responsive React + Tailwind website for Chériieal Events.

## Stack

- React 18
- Vite 6
- Tailwind CSS 3.4
- React Router 7
- Lucide React
- Google Fonts: Cormorant Garamond + Manrope

## Install

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

## Deploy to Hostinger / Apache

1. Run `npm run build`.
2. Upload everything inside `dist/` to `public_html/`.
3. Keep the generated `.htaccess` in `public_html/`.
4. Update the domain in `public/robots.txt` and `public/sitemap.xml`.
5. The app uses client-side routes:
   - `/`
   - `/about`
   - `/events`
   - `/services`
   - `/contact`

The included `.htaccess` rewrites unknown routes to `index.html`.

## Brand

Primary: `#10231D`
Accent: `#17382D`
Light: `#F3EFE6`
Gold: `#C5AB76`
Sage: `#89998B`

The wordmark is written as **Chériieal Events**, with the French-style acute accent on the first e: **é**.

## Editing content

Most event, service and image content is centralized in:

`src/data.js`

Page copy is kept inside the corresponding files in:

`src/pages/`

The logo is a reusable React component:

`src/components/Logo.jsx`

Replace placeholder contact details in `Footer.jsx` and `Contact.jsx` before launch.
## If your browser shows `useEffect` / `destroy is not a function`

The project no longer uses an effect for route scrolling. This avoids the common React development warning caused by returning the result of `window.scrollTo()` from an effect.

If you copied an older version of the project, replace these three files with the current versions in this package:

- `src/App.jsx`
- `src/main.jsx`
- `src/components/SEO.jsx`

Then from the project folder run:

```bash
rmdir /s /q node_modules
del package-lock.json
npm cache verify
npm install
npm run dev
```

If you use PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm cache verify
npm install
npm run dev
```

Do not manually install a second React version. The project is pinned to React `18.3.1` and React DOM `18.3.1`.
