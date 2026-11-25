# Content Update Guide — Sri Venkateswara Swamy Temple Website

All temple details, timings, sevas, festivals, announcements, and gallery entries are stored in clean TypeScript data files inside `src/data/` so updates require no layout or CSS changes.

## 1. Temple Identity & Contact Details (`src/data/temple.ts`)
- **Phone verification:** Update `contact.phoneVerified` to `true` once `+91 96777 47282` is confirmed by temple management.
- **WhatsApp / Email / Social:** Only add `whatsappNumber` (with `whatsappApproved: true`), `email`, or `socialLinks` if explicitly approved by the temple administration.

## 2. Darshan Timings (`src/data/timings.ts`)
- Replace `'To be confirmed by temple administration'` in each session with the official morning/evening hours.
- Set `confirmed: true` on each verified row and `allTimingsConfirmed: true`.
- Update `verificationNotice` once timings are finalized (keep `festivalNotice` visible).

## 3. Pooja & Seva (`src/data/sevas.ts`)
- Update `summary`, `feeInfo`, and `bookingProcedure` for confirmed services and set `confirmed: true`.
- Do not enable online booking or payment features unless officially authorized.

## 4. Festivals & Announcements (`src/data/festivals.ts` & `src/data/announcements.ts`)
- Edit event `dateText`, `timeText`, `announcementNote`, and set `confirmed: true` after panchangam approval.
- Add or update notices in `ANNOUNCEMENTS` inside `src/data/announcements.ts`.

## 5. Replacing Illustrative Artwork with Official Temple Photographs (`src/data/gallery.ts`)
1. Place official high-resolution temple photographs into `src/assets/temple/`.
2. Update the image imports in `src/data/gallery.ts` (and `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/pooja-seva.astro`).
3. Set `isIllustrative: false` on each verified gallery item so the illustrative artwork notice is removed.
4. Update `public/og-preview.jpg` (1200×630) with an approved temple photograph for social sharing previews.

## 6. Domain & Sitemap (`astro.config.mjs` & `public/robots.txt`)
- Set `site` in `astro.config.mjs` and the `Sitemap:` URL in `public/robots.txt` to the final production domain before deploying.
- Build the static site with `npm run build` (outputs to `dist/`).
