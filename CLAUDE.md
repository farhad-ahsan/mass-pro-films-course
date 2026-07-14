# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **yarn** (see `yarn.lock`).

- `yarn dev` — start Vite dev server with HMR
- `yarn build` — production build
- `yarn preview` — serve the production build locally
- `yarn lint` — ESLint over `.js`/`.jsx`; runs with `--max-warnings 0`, so any warning fails

There is no test suite in this repo.

## Architecture

Single-page React 18 marketing site + gated video course for "Mass Pro Films", built with **Vite** (SWC React plugin) and **Material UI v5** (`@mui/material` + Emotion). It's a static frontend with no backend of its own — auth and content come from third-party services.

### Routing & auth flow
`src/App.jsx` is the root: it wraps everything in `UserProvider` → MUI `ThemeProvider` → `RouterProvider` (react-router-dom v6 `createBrowserRouter`). Routes:
- `/` → `LandingPage` (marketing sections)
- `/login` → `Login` (Firebase email/password sign-in + password reset)
- `/signup-steps` → `SignupStepsModal`
- `/course` → `Course`, wrapped in `ProtectedRoute`

Auth is **Firebase Auth** (`src/firebase.js`). `src/UserContext.jsx` subscribes to `auth.onAuthStateChanged` and exposes the current user via `UserContext`. `src/ProtectedRoute.jsx` reads that context and redirects to `/login` when there's no user. `Login` redirects to `/course` once a user exists. There is no sign-up in the app — accounts are provisioned externally (the signup flow funnels users to WhatsApp, see below).

### Course content
Course chapters are hardcoded YouTube playlist IDs in `src/constants.js` (`PLAYLISTS`). `Course.jsx` renders one `Playlist.jsx` accordion per entry; each `Playlist` fetches its videos at runtime from the **YouTube Data API v3** (`playlistItems` endpoint) via `axios`, then renders `VideoCard`s. `VIdeoPlayer.jsx` (note the capitalized typo in the filename) embeds the player.

### Landing page
`LandingPage.jsx` composes marketing sections from `src/components/` (`Hero`, `Learn`, `Pricing`, `Highlights`, `WhoIsThisFor`, `Testimonials` (exported as `Reviews`), `Footer`). Lead capture is WhatsApp-based: `WhatsappActionButton` / `WhatsappForm` collect name + email and open a `https://wa.me/<number>?text=...` deep link rather than posting to any backend.

### Conventions
- Components use PropTypes (`prop-types`) for prop validation, not TypeScript, despite `@types/react` being present.
- Styling is MUI `sx` props and `styled()`; theme is a plain light-mode `createTheme` in `App.jsx`, though many components still branch on `theme.palette.mode === "dark"`.

## Secrets note

The Firebase web config (`src/firebase.js`) and the YouTube Data API key (`src/Playlist.jsx`) are committed directly in source. These are client-side keys embedded at build time; when rotating or restricting them, update the hardcoded values in those files — there is no `.env` wiring.
