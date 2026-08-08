# Lottie assets

`components/LottieVisual.tsx` looks for real `.lottie` (or `.json`) files here,
using these three paths right now:

| Path                              | Used in                          | Suggested motif                          |
|------------------------------------|-----------------------------------|-------------------------------------------|
| `ai-insight-scan.lottie`           | Bento → AI Spending Insight tile  | Pulsing scan line / waveform loop         |
| `global-transfer-nodes.lottie`     | Bento → Instant Global Transfers  | Nodes lighting up along connecting lines  |
| `shield-lock-close.lottie`         | Bento → Bank-Level Encryption     | Shield closing / lock securing            |

## Why this folder is empty right now

No third-party `lottie.host` / LottieFiles CDN URL is hardcoded anywhere in
this project. Those "public" links are per-account ephemeral uploads, not
versioned package assets — pointing production code at one is a silent
broken-link risk with no upstream stability guarantee.

Until you drop real exports here, `LottieVisual` renders the existing
hand-built SVG/CSS fallback for each tile, so the UI is fully functional and
ships nothing fake. Once you add a matching file at one of the paths above,
it renders automatically — no code changes needed.

## Where to get exports

- Export directly from After Effects via the Bodymovin/LottieFiles plugin, or
- Pull a licensed animation you've saved to your own LottieFiles workspace
  (Workspace → your asset → "Download .lottie"), or
- Build one in the LottieFiles editor and export.

Keep file size small (a few dozen KB) — these are decorative micro-interactions,
not hero video.
