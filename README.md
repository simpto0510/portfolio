# M&nbsp;R&nbsp;Khan — Portfolio (Next.js + Tailwind)

This repository contains a personal portfolio site built with **Next.js** and **Tailwind CSS**.  It uses the App Router introduced in Next 15 and has been designed for deployment on [Vercel](https://vercel.com/) with zero configuration.

The project includes a dynamic background animation, custom fonts, and multiple sections (projects, education, involvement, skills and contact) sourced from a single data file.  All logic lives in the `app/` and `src/` folders; the deprecated Create React App entry points have been removed.

## Running Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server (with hot‑reloading):

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

To create an optimized production build locally, run:

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), select **New Project** and import the repository.
3. Vercel will auto‑detect the Next.js framework and handle the build and output directory for you.  The default `npm run build` is used and no custom output folder needs to be set.
4. Click **Deploy**.  Your portfolio will be live moments later.

## Updating Your CV

Replace the file `public/M_R_Khan_CV.pdf` with your own CV (keeping the same filename).  The link on the site will automatically point to it.
