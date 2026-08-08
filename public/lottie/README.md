# Lottie assets

**Update:** the three animations originally slotted here (AI Spending Scan,
Global Money Network, Bank-Level Encryption) are now hand-built directly in
`components/BentoAnimations.tsx` using SVG + Framer Motion — matching the
reference asset sheet's radar sweep, orbiting network, and two-tone security
ring. No `.lottie` file is required for those three anymore, and `BentoGrid.tsx`
no longer imports `LottieVisual` for them.

`components/LottieVisual.tsx` is still in the project as reusable
infrastructure — a real, verified integration with `@lottiefiles/dotlottie-react`
(client-only load, correct `loadError` event handling, graceful fallback) —
in case you want to drop in an actual Lottie file for some other element
later. To use it again: pass a `src` pointing at a `.lottie`/`.json` file
placed in this folder, and a `fallback` node to render until it's confirmed
loadable.

## Why no third-party CDN links are hardcoded anywhere

No `lottie.host` / LottieFiles CDN URL is hardcoded in this project. Those
"public" links are per-account ephemeral uploads, not versioned package
assets — pointing production code at one is a silent broken-link risk with
no upstream stability guarantee.

