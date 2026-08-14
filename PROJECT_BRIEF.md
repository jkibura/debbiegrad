# Deborah's Graduation Site — Project Brief

## What this is
A tribute website from her Bible-study group ("Beloved") celebrating her
graduation, built as a static HTML/CSS/JS site (separate files, no framework),
hosted via GitHub Pages, shared by QR code at the party.

## Who she is (drives every design choice)
Empathetic, expressive, speaks her mind. Ambitious and a dreamer. A helper
who steps up without being asked (e.g. leads Bible study reminders herself
when no one else does). Organized, thoughtful, articulate — "a beautiful
mind." Deep, personal faith — reads scripture, loves God, talks about Him
like a close friend. Loves photography and has taken huge numbers of photos.
Loves her parents as a couple. Close with her "Beloved" Bible study group.

## Palette (locked)
White (#FFFFFF, with a near-white pink tint #FFF4F8 for section backgrounds),
black (#1C1B19), deep blue (#223A66), and pink (#D6427B, with a soft pink
#F4B6CC) — pink is dominant, blue and black are supporting accents, white is
the base. No other colors.

## Type
Fraunces (serif, display/headlines) + Space Grotesk (sans, body) + Space Mono
(labels, captions, eyebrow text) — all via Google Fonts.

## Structure & the reasoning behind each part, top to bottom
1. **Spot-the-graduate gate** — a small tap game (pick her photo from a grid)
   before the site reveals itself, tied thematically into the reveal: correct
   guess triggers a pink/blue petal-fall animation, then the flower-pattern
   hero fades in underneath. Has a skip link for anyone who doesn't want to play.
2. **Hero** — name + headline over an original illustrated flower pattern
   (not a stock photo, to guarantee exact palette match and avoid licensing
   risk). Can be swapped for a real photo of a flower wall via one CSS line.
3. **Traits / Why we appreciate her** — a card grid, one trait per card,
   grounded in specifics (not generic compliments).
4. **Verses** — Romans 8:31 and 1 Peter 5:7, KJV (public domain text).
5. **Featured moments** — a curated tap-through full-screen photo viewer
   (manual tap only, no auto-advance or forced timing — respects her pace).
   This is the ONE flagship interactive photo experience; deliberately not
   duplicated elsewhere to avoid competing interaction patterns.
6. **Camera roll** — a masonry grid (CSS columns) that scales to any number
   of photos without looking curated-thin or overwhelming.
7. **Marquee** — a horizontally auto-scrolling banner of names of everyone
   who loves her, styled like a brand-logo slider.
8. **Her people** — a horizontal-scroll strip specifically for
   friends/selfies and her parents-as-a-couple photo. Horizontal scroll is
   used ONLY here and in the marquee — the rest of the site scrolls
   vertically, since the site is designed mobile-first for QR-code visitors.
9. **Beloved** — a fixed 3-photo row (the guys / the girls / everyone),
   kept separate from the general "her people" scroll since it's a specific,
   meaningful group rather than a general photo dump.
10. **Message wall** — ~20 messages from friends, masonry-laid-out note
    cards, each tilted slightly, sized to fit short or long text without
    special-casing. A floating "find a note" panel lets her jump to a
    specific person's message later — deliberately NOT a forced per-card
    timer, since gating her attention would feel controlling rather than caring.
11. **Music toggle** — button only, never autoplay (browsers block
    autoplay-with-sound anyway, and surprise audio is bad UX regardless).

## Explicitly decided against (and why)
- Multiple different photo-interaction paradigms (tap-through AND
  swipe-card-stack AND scroll) — consolidated to one flagship interaction
  (tap-through viewer) to avoid diluting the experience.
- Forced reading time / dwell timers on the message wall — respects her
  autonomy; unhurried reading is encouraged via generous card spacing and
  staggered entrance animation instead of a countdown.
- Live reactions / replies visible to the original message-writer — would
  require a real backend (e.g. Supabase) to sync data between different
  people's devices, which is out of scope for a party-deadline build. Noted
  as a good v2 idea if there's time after launch.
- A real stock/scraped photo for the hero background — avoided for licensing
  reasons; used an original illustrated pattern in the exact site palette instead.

## Still open / needs the user's input
- One hobby/interest mentioned (something about Spotify/a name that wasn't
  transcribed clearly) — left as a placeholder in TRAITS for the user to
  write in directly rather than guessing.
- Whether the reaction/reply feature gets built as a v2 after the party.

## Tech notes
- Files: index.html, style.css, script.js, make_qr.py, /photos folder — all
  in one project directory. ALL editable content lives in the data arrays at
  the top of script.js; no other file should need to change for routine edits.
- Hosting: GitHub Pages (public repo → Settings → Pages → root).
- QR code: generate with `python make_qr.py <live-url>` once hosted (uses the
  `qrcode` Python package, output styled black-on-white to match the site).
