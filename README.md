# Brilla Services website

Professional cleaning website for Malta and Gozo, operated by BnO Partners Ltd.

## Local development

Requires Node.js 20 or newer. No npm dependencies are needed.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173/.

## Files

- `build.mjs`: page templates and static-site generator.
- `data.mjs`: services and industry content.
- `icons.mjs`: SVG icon helpers.
- `dist/`: complete generated website, ready to serve.
- `dist/assets/`: source styles, browser JavaScript, fonts, logos and images. Keep this folder when rebuilding.
- `preview.mjs`: local preview server.
- `.openai/hosting.json`: existing ChatGPT Sites project configuration.

## Quotation enquiries

The form validates required fields and privacy acknowledgement, then opens WhatsApp for +356 9999 9572 with the enquiry. The visitor must tap Send in WhatsApp. The website does not send automatic emails or store submissions.

## Deployment

Current website: https://brilla-services-review.astralcow17.chatgpt.site/

This repository stores a copy of the website source. It is not automatically synchronized with ChatGPT Sites. Uploading to GitHub does not change the live website or enable GitHub Pages.

For another static host, publish `dist/` at the domain root. Before launching on a different domain, update canonical URLs and review-site noindex/robots settings in `build.mjs`, then rebuild.

Device dashboard imagery is illustrative and contains sample data.
