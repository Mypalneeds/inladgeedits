# Inladge Short-Form Content Portfolio

A static Netlify-ready landing page built around Inladge's short-form content editing offer.

## Deploy to Netlify

### Easiest option: drag and drop
1. Create/sign in to a Netlify account.
2. Open the Netlify dashboard.
3. Drag the entire `inladge_portfolio` folder onto the site's deploy area.
4. Netlify will publish the site and give you a temporary `.netlify.app` URL.

### Forms
The contact form no longer uses Netlify Forms. On submit, `script.js` collects the fields and opens WhatsApp (`wa.me/2348029073497`) with the prefilled intro message plus the form details. Change `WA_NUMBER` / `WA_INTRO` at the bottom of `script.js` to edit the number or message. `thank-you.html` is no longer used.

## Before public launch
- Replace the temporary Netlify URL with your preferred custom domain when ready.
- Add a Calendly/booking link to the CTA if you want calls booked directly.
- If you want a different email or WhatsApp CTA, update the contact section in `index.html`.
- Confirm you have permission to display the uploaded client work in a public portfolio. Client names have intentionally not been displayed.
